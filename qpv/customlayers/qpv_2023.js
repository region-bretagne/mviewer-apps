{
mviewer.customLayers.qpv_2023 = {};
var qpv_2023 = mviewer.customLayers.qpv_2023;

qpv_2023.legend = { items: [
    {
        label: "Quartier Prioritaire de la Ville 2023",
        geometry: "Polygon",
        styles: [new ol.style.Style({
            stroke: new ol.style.Stroke({ color: 'rgba(255, 78, 26,1.0)', width: 2 }),
            fill: new ol.style.Fill({ color: 'rgba(255, 255, 255,.01)'})
        })]
    }
] };

mviewer.customLayers.qpv_2023.layer = new ol.layer.Vector({
        source: new ol.source.Vector({
            url: "https://ows.region-bretagne.fr/geoserver/interne/wfs?SERVICE=WFS&VERSION=1.0.0&REQUEST=GETFEATURE&TYPENAME=qpv_2023&outputFormat=application/json&srsName=EPSG:4326",
            format: new ol.format.GeoJSON()
        }),
        style: function(feature, resolution) {
            return qpv_2023.legend.items[0].styles;
        }
});
mviewer.customLayers.qpv_2023.handle = false;
}