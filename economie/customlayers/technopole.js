{
mviewer.customLayers.technopole = {};
var technopole = mviewer.customLayers.technopole;

technopole.legend = { items: [
    {
        label: "Technopôle",
        geometry: "Polygon",
        styles: [new ol.style.Style({
            stroke: new ol.style.Stroke({ color: '#2F476C', width: 3 }),
            fill: new ol.style.Fill({ color: 'rgba(0, 0, 0, 0)'})
        })]
    }
] };

mviewer.customLayers.technopole.layer = new ol.layer.Vector({
        source: new ol.source.Vector({
            url: "https://ows.region-bretagne.fr/geoserver/rb/wfs?SERVICE=WFS&VERSION=1.0.0&REQUEST=GETFEATURE&TYPENAME=technopole&outputFormat=application/json&srsName=EPSG:4326",
            format: new ol.format.GeoJSON()
        }),
        style: function(feature, resolution) {
            return technopole.legend.items[0].styles;
        }
});
mviewer.customLayers.technopole.handle = false;
}