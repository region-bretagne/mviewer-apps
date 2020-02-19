mviewer.customLayers.eqpts = (function () {


    var _legend = { items: [] };


    var _gymnase = [new ol.style.Style({
        image: new ol.style.RegularShape({
          fill: new ol.style.Fill({
                color: 'rgba(127, 143, 166,1.0)'
            }),
          stroke: new ol.style.Stroke({
                color: "#ededed",
                width: 3
            }),
          points: 5,
          radius: 13,
          radius2: 6,
          angle: 0
        })
    })];
    
    var _selectionStyle = [new ol.style.Style({
        image: new ol.style.RegularShape({
          fill: new ol.style.Fill({
                color: 'rgba(47, 54, 64,0)'
            }),
          stroke: new ol.style.Stroke({
                color: 'rgba(47, 54, 64,1.0)',
                width: 3
            }),
          points: 5,
          radius: 18,
          radius2: 9,
          angle: 0
        })
    })];


    var _piscine = [new ol.style.Style({
        image: new ol.style.RegularShape({
          fill: new ol.style.Fill({
                color: 'rgba(0, 168, 255,1.0)'
            }),
          stroke: new ol.style.Stroke({
                color: "#ededed",
                width: 3
            }),
          points: 5,
          radius: 13,
          radius2: 6,
          angle: 0
        })
    })];

    var _stade = [new ol.style.Style({
        image: new ol.style.RegularShape({
          fill: new ol.style.Fill({
                color: 'rgba(68, 189, 50,1.0)'
            }),
          stroke: new ol.style.Stroke({
                color: "#ededed",
                width: 3
            }),
          points: 5,
          radius: 13,
          radius2: 6,
          angle: 0
        })
    })];
    var _complexe = [new ol.style.Style({
        image: new ol.style.RegularShape({
          fill: new ol.style.Fill({
                color: 'rgba(232, 65, 24,1.0)'
            }),
          stroke: new ol.style.Stroke({
                color: "#ededed",
                width: 3
            }),
          points: 5,
          radius: 13,
          radius2: 6,
          angle: 0
        })
    })];



    _legend.items.push({styles:_piscine, label: "Piscines", geometry: "Point"});
    _legend.items.push({styles:_stade, label: "Stades", geometry: "Point"});
    _legend.items.push({styles:_gymnase, label: "Gymnases", geometry: "Point"});
    _legend.items.push({styles:_complexe, label: "Complexes", geometry: "Point"});

    var _source = new ol.source.Vector({
        url: "https://ows.region-bretagne.fr/geoserver/rb/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=rb%3Alycee_eqpt_ext&outputFormat=application%2Fjson&srsName=EPSG:4326",
        format: new ol.format.GeoJSON()
    });

    var _layer = new ol.layer.Vector({
            source: _source,
            style: function(feature,resolution) {
                var stl;
                if(feature.get("type") === 'piscine') {
                    stl = _piscine;
                } else if(feature.get("type") === "stade"){
                    stl=_stade;
                } else if(feature.get("type") === "complexe"){
                    stl=_complexe;
                } else {
                    stl = _gymnase;
                }
                return stl;
            }
    });

    var _selection = function(rne) {
        var features = _source.getFeatures();
        var selected = [];
        features.forEach(function(feature){
            var usages = JSON.parse(feature.getProperties()["usages"]);
            usages.forEach(function(item,index){
                if (item === rne) {
                  var b = feature.clone();
                  b.setStyle(_selectionStyle);
                  selected.push(b);
                } 
            });
        });
        console.log(selected);
        var _sourceOverlay = mviewer.getSourceOverlay();
        _sourceOverlay.clear();
        _sourceOverlay.addFeatures(selected);

    };


    return {
            layer: _layer,
            handle: false,
            legend: _legend,
            selection: _selection
        };

    }());
