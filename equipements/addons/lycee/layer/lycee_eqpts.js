mviewer.customLayers.lycee_eqpts = (function () {


    var _legend = {
        items: []
    };
    var _map = mviewer.getMap();

    var getText = function(feature, resolution) {
        var type = 'Normal';
        var maxResolution = 4;
        var text = feature.get('nom');
    
        if (resolution > maxResolution) {
            text = '';
        } else if (type == 'hide') {
            text = '';
        } else if (type == 'shorten') {
            text = text.truncate(12);
        } else if (type == 'wrap') {
            text = text.divide(16, '\n');
        }
    
        return text;
    };
    
    var createTextStyle = function(feature, resolution) {
        var align = 'Start';
        var baseline = 'Middle';
        var size = '10px';
        var offsetX = 0;
        var offsetY = -15;
        var weight = 'Normal';
        var rotation = 0;
        var font = weight + ' ' + size + ' ' + 'Verdana';
        var fillColor = '#aa3300';
        var outlineColor = '#ffffff';
        var outlineWidth = 2;
    
        return new ol.style.Text({
            /*textAlign: align,*/
            /*textBaseline: baseline,*/
            font: font,
            text: getText(feature, resolution),
            fill: new ol.style.Fill({color: fillColor}),
            stroke: new ol.style.Stroke({color: outlineColor, width: outlineWidth}),
            offsetX: offsetX,
            offsetY: offsetY,
            rotation: rotation
        });
    };
    var aucun = new ol.style.Style({
        image: new ol.style.Circle({
            fill: new ol.style.Fill({
                color: 'rgba(255, 204, 0,1.0)'
            }),
            stroke: new ol.style.Stroke({
                color: "#ffffff",
                width: 4
            }),
            radius: 10
        })
    });

    var partiel = new ol.style.Style({
        image: new ol.style.Circle({
            fill: new ol.style.Fill({
                color: 'rgba(255, 102, 0,1.0)'
            }),
            stroke: new ol.style.Stroke({
                color: "#ffffff",
                width: 4
            }),
            radius: 10
        })
    });

    var complet = new ol.style.Style({
        image: new ol.style.Circle({
            fill: new ol.style.Fill({
                color: 'rgba(204, 0, 0,1.0)'
            }),
            stroke: new ol.style.Stroke({
                color: "#ffffff",
                width: 4
            }),
            radius: 10
        })
    });

    _legend.items.push({
        styles: [aucun],
        label: "Aucun équipement",
        geometry: "Point"
    });
    _legend.items.push({
        styles: [partiel],
        label: "Equipements partiels",
        geometry: "Point"
    });
    _legend.items.push({
        styles: [complet],
        label: "Equipements complets",
        geometry: "Point"
    });

    var _layer = new ol.layer.Vector({
        source: new ol.source.Vector({
            url: "https://ows.region-bretagne.fr/geoserver/rb/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=rb%3Alycee_eqpt_sportif&outputFormat=application%2Fjson&srsName=EPSG:4326",
            format: new ol.format.GeoJSON()
        }),
        style: function (feature, resolution) {
            var stl;
            if (feature.get('gymnase') === 'oui' && feature.get('exterieur') === 'oui') {
                stl = complet.clone();
            } else if (feature.get('gymnase') === 'oui' || feature.get('exterieur') === 'oui') {
                stl = partiel.clone();
            } else {
                stl = aucun.clone();
            }
            stl.setText(createTextStyle(feature, resolution));
            return [stl];
        }
    });

    var _renderPanel = function (features, views) {
        var l = mviewer.getLayer("lycee_eqpts");
        var html;
        if (l.template) {
            html = info.templateHTMLContent(features, l);
        } else {
            html = info.formatHTMLContent(features, l);
        }
        var panel = "right-panel";
        if (configuration.getConfiguration().mobile) {
            panel = "modal-panel";
        }
        var view = views[panel];
        view.layers.push({
            "id": view.layers.length + 1,
            "firstlayer": false,
            "manyfeatures": (features.length > 1),
            "nbfeatures": features.length,
            "name": l.name,
            "layerid": "lycee_eqpts",
            "theme_icon": l.icon,
            "html": html
        });
    };

    var _handle = function (features, views) {
        _renderPanel(features, views);
        var padding = 250;
        if ($("#wrapper").hasClass("toggled-2"))
            padding = 50;
        _map.getView().fit(features[0].properties.geometry, {
            duration: 1000,
            maxZoom: _map.getView().getZoom(),
            padding: [0, padding, 0, 0]
        });
        mviewer.customLayers.eqpts.selection(features[0].properties["code"])
    };



    return {
        layer: _layer,
        handle: _handle,
        legend: _legend,
    };

}());