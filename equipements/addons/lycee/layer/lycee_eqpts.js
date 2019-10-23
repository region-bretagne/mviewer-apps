
mviewer.customLayers.lycee_eqpts = (function () {


var _legend = { items: [] };

var style0 = [new ol.style.Style({
    image: new ol.style.Circle({
        fill: new ol.style.Fill({
            color: 'rgba(232, 65, 24,1.0)'
        }),
        stroke: new ol.style.Stroke({
            color: "#ffffff",
            width: 4
        }),
        radius: 10
    })
})];

var style1 = [new ol.style.Style({
    image: new ol.style.Circle({
        fill: new ol.style.Fill({
            color: 'rgba(251, 197, 49,1.0)'
        }),
        stroke: new ol.style.Stroke({
            color: "#ffffff",
            width: 4
        }),
        radius: 10
    })
})];

var style2 = [new ol.style.Style({
    image: new ol.style.Circle({
        fill: new ol.style.Fill({
            color: 'rgba(68, 189, 50,1.0)'
        }),
        stroke: new ol.style.Stroke({
            color: "#ffffff",
            width: 4
        }),
        radius: 10
    })
})];

_legend.items.push({styles:style0, label: "Aucun équipement", geometry: "Point"});
_legend.items.push({styles:style1, label: "Equipements partiels", geometry: "Point"});
_legend.items.push({styles:style2, label: "Equipements complets", geometry: "Point"});

var _layer = new ol.layer.Vector({
        source: new ol.source.Vector({
            url: "apps/region/equipements/lycees.geojson",
            format: new ol.format.GeoJSON()
        }),
        style: function(feature, resolution) {
            var stl;
            if(feature.get('gymnase') === 'oui' && feature.get('terrain ext') === 'oui') {
                stl = style2;
            } else if(feature.get('gymnase') === 'oui' || feature.get('terrain ext') === 'oui') {
                stl = style1;
            } else {
                stl = style0;                
            }
            return stl;
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

var _handle = function(features, views) {    
    _renderPanel(features, views);
    mviewer.customLayers.eqpts.selection(features[0].properties["code_rne"])
};



 return {
        layer: _layer,
        handle: _handle,
        legend: _legend,        
    };

}());