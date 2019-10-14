mviewer.customLayers.eqpts = (function () {


var _legend = { items: [] };


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

var _o = [new ol.style.Style({
    image: new ol.style.Circle({
        fill: new ol.style.Fill({
            color: 'rgba(110, 42, 114,1.0)'
        }),
        stroke: new ol.style.Stroke({
            color: "#ff0000",
            width: 4
        }),
        radius: 9
    })
})];

_legend.items.push({styles:_stylePrive, label: "Equipements", geometry: "Point"});

var _source = new ol.source.Vector({
    url: "apps/region/equipements/eqpts.geojson",
    format: new ol.format.GeoJSON()
});

var _layer = new ol.layer.Vector({
        source: _source,
        style: _stylePrive
});

var _selection = function(rne) {
    var features = _source.getFeatures();
    features.forEach(function(feature){

        if (feature.getProperties()["usage lycée"] === rne) {
            console.log(feature);
            feature.setStyle(_o);
        } else {
            feature.setStyle(_stylePrive);
        }

    });

};


return {
        layer: _layer,
        handle: false,
        legend: _legend,
        selection: _selection
    };

}());
