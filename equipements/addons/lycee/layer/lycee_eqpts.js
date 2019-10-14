
mviewer.customLayers.lycee_eqpts = (function () {


var _legend = { items: [] };

var _stylePublic = [new ol.style.Style({
    image: new ol.style.Circle({
        fill: new ol.style.Fill({
            color: 'rgba(255, 118, 117,1.0)'
        }),
        stroke: new ol.style.Stroke({
            color: "#ffffff",
            width: 4
        }),
        radius: 9
    })
})];

var _stylePrive = [new ol.style.Style({
    image: new ol.style.Circle({
        fill: new ol.style.Fill({
            color: 'rgba(99, 110, 114,1.0)'
        }),
        stroke: new ol.style.Stroke({
            color: "#ffffff",
            width: 4
        }),
        radius: 9
    })
})];

_legend.items.push({styles:_stylePublic, label: "Public", geometry: "Point"});
_legend.items.push({styles:_stylePrive, label: "Privé", geometry: "Point"});

var _layer = new ol.layer.Vector({
        source: new ol.source.Vector({
            url: "apps/region/equipements/lycees.geojson",
            format: new ol.format.GeoJSON()
        }),
        style: function(feature, resolution) {
            var stl;
            if(feature.get('secteur_li') === 'Public') {
                stl = _stylePublic;
            } else if(feature.get('secteur_li') === "Privé sous contrat avec l'éducation nationale") {
                stl = _stylePrive;
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