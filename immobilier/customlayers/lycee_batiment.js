{
mviewer.customLayers.lycee_batiment = {};
var lycee_batiment = mviewer.customLayers.lycee_batiment;

lycee_batiment.legend = { items: [
    {
        label: "Bâtiment",
        geometry: "Polygon",
        styles: [new ol.style.Style({
            stroke: new ol.style.Stroke({ color: '#777', width: 2 }),
            fill: new ol.style.Fill({ color: 'rgba(0, 0, 0, 0.5)'})
        })]
    }
] };

mviewer.customLayers.lycee_batiment.layer = new ol.layer.Vector({
        source: new ol.source.Vector({
            url: "https://ows.region-bretagne.fr/geoserver/rb/wfs?SERVICE=WFS&VERSION=1.0.0&REQUEST=GETFEATURE&TYPENAME=lycee_batiment&outputFormat=application/json&srsName=EPSG:4326",
            format: new ol.format.GeoJSON()
        }),
        style: function(feature, resolution) {
            return lycee_batiment.legend.items[0].styles;
        }
});
mviewer.customLayers.lycee_batiment.handle = false;
}