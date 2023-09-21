{
mviewer.customLayers.lycee_lingerie = {};
var lycee_lingerie = mviewer.customLayers.lycee_lingerie;

lycee_lingerie.legend = {items: [{
        geometry: "Point",
        label: "Lingerie",
        styles: [new ol.style.Style({
            image: new ol.style.Circle({
                fill: new ol.style.Fill({
                    color: "#ff2a00"
                }),
                stroke: new ol.style.Stroke({
                    color: "#ff2a00",
                    width: 4
                }),
                radius: 4
            })
        })]
    }]
};

mviewer.customLayers.lycee_lingerie.layer = new ol.layer.Vector({
        source: new ol.source.Vector({
            url: "https://ows.region-bretagne.fr/geoserver/rb/wfs?SERVICE=WFS&VERSION=1.0.0&REQUEST=GETFEATURE&TYPENAME=lycee_lingerie&outputFormat=application/json&srsName=EPSG:4326",
            format: new ol.format.GeoJSON()
        }),
        style: function(feature, resolution) {
            return lycee_lingerie.legend.items[0].styles;
        }
});
mviewer.customLayers.lycee_lingerie.handle = false;