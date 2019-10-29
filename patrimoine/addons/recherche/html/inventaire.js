mviewer.customControls.inventaire = (function() {
    /*
     * Private
     */
    var _idlayer = 'inventaire';

    var _zoomlevel = false;

    var _defaultValue = "maison,18e siècle,ardoise";

    var _lastValues = false;

    var _collection = false;

    var charMap = {
        "à": "a",
        "á": "a",
        "â": "a",
        "é": "e",
        "è": "e",
        "ê": "e",
        "ë": "e",
        "É": "e",
        "ï": "i",
        "î": "i",
        "ô": "o",
        "ö": "o",
        "û": "u",
        "ù": "u",
        "ü": "u",
        "ñ": "n"
    };

    var normalize = function (input) {
        $.each(charMap, function (unnormalizedChar, normalizedChar) {
            var regex = new RegExp(unnormalizedChar, 'gi');
            input = input.replace(regex, normalizedChar);
        });
        return input;
    };

    var _updateLayer = function() {
        var values = $.map($("#inventaire_search_queries").tagsinput('items') || [], function (item) { return item.value; });
        mviewer.customLayers.inventaire.setFilter(values);
        mviewer.customLayers.inventaire.layer.getSource().getSource().clear(false);
        _lastValues = values.join(",");
    };

    var _mapChanged = function (e) {
        var newZoomlevel = mviewer.getMap().getView().getZoom();
        if ( _zoomlevel && (newZoomlevel > _zoomlevel)) {
            _updateLayer();
        }
        _zoomlevel = newZoomlevel;
    };

    var _initForm = function () {

        var queryTokenizer = function (q) {
            var normalized = normalize(q);
            return Bloodhound.tokenizers.whitespace(normalized);
        };

        var dico = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.obj.whitespace('nor'),
            queryTokenizer: queryTokenizer,
            local: _collection
        });

        dico.initialize();

        $("#inventaire_search_queries").tagsinput({
            itemValue: 'value',
            itemText: 'nor',
            typeaheadjs: [
            {
                name: 'dico',
                source: dico.ttAdapter(),
                items: 10,
                displayKey: 'nor',
                displayText: function (item){ return item.nor },
                updater: function(item) {
                     $("#inventaire_search_queries").tagsinput("add", item);
                },
                matcher: function (item) {
                    return (item.nor.toLowerCase().indexOf(normalize(this.query.toLowerCase())) != -1)
                }
            }
            ],
            freeInput: false,
            tagClass: 'label label-mv'
        });

        if (_defaultValue && !_lastValues) {
            _defaultValue.split(",").forEach(function (value) {
                $("#inventaire_search_queries").tagsinput("add", {value: value, nor: value});
            });
            _defaultValue = false;
            _updateLayer();
        } else if (_lastValues) {
            _lastValues.split(",").forEach(function (value) {
                $("#inventaire_search_queries").tagsinput("add", {value: value, nor: value});
            });
            _defaultValue = false;
            _updateLayer();
        }
        $("#inventaire_search_queries").on('itemAdded', function(event) {
            _updateLayer();
            setTimeout(function(){
                $(">input[type=text]",".bootstrap-tagsinput").val("");
            }, 1);
        });
        $("#inventaire_search_queries").on('itemRemoved', function(event) {
            _updateLayer();
        });
    };



    return {
        /*
         * Public
         */

        init: function() {
            // mandatory - code executed when panel is opened
            if (!_collection) {
                $.getJSON("apps/region/patrimoine/addons/recherche/collection.json", function(data){
                    _collection = $.map(data, function(item){
                        return {value: item, nor:normalize(item)};
                    });
                    _initForm();
                });
            } else {
                _initForm();
            }
            mviewer.getMap().on('moveend', _mapChanged);


        },

        destroy: function() {
            // mandatory - code executed when panel is closed
            $("#inventaire_search_queries").tagsinput('removeAll');
            mviewer.getMap().un('moveend', _mapChanged);

        }
    };

}());
