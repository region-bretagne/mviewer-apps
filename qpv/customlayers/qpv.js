{
mviewer.customLayers.qpv = {};
var qpv = mviewer.customLayers.qpv;

qpv.legend = { items: [
    {
        label: "Quartier Prioritaire de la Ville",
        geometry: "Polygon",
        styles: [new ol.style.Style({
            stroke: new ol.style.Stroke({ color: 'rgba(45, 64, 89,1.0)', width: 2 }),
            fill: new ol.style.Fill({ color: 'rgba(255, 255, 255,.01)'})
        })]
    }
] };

mviewer.customLayers.qpv.layer = new ol.layer.Vector({
        source: new ol.source.Vector({
            url: "https://ows.region-bretagne.fr/geoserver/interne/wfs?SERVICE=WFS&VERSION=1.0.0&REQUEST=GETFEATURE&TYPENAME=qpv&outputFormat=application/json&srsName=EPSG:4326",
            format: new ol.format.GeoJSON()
        }),
        style: function(feature, resolution) {
            return qpv.legend.items[0].styles;
        }
});
mviewer.customLayers.qpv.handle = false;
}