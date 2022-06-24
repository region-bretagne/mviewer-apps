{
mviewer.customLayers.l_qpv_pnru = {};
var l_qpv_pnru = mviewer.customLayers.l_qpv_pnru;

l_qpv_pnru.legend = { items: [
    {
        label: "Quartier Prioritaire de la Ville",
        geometry: "Polygon",
        styles: [new ol.style.Style({
            stroke: new ol.style.Stroke({ color: 'rgba(45, 64, 89,1.0)', width: 3 }),
            fill: new ol.style.Fill({ color: 'rgba(255, 255, 255,.01)'})
        })]
    }
] };

mviewer.customLayers.l_qpv_pnru.layer = new ol.layer.Vector({
        source: new ol.source.Vector({
            url: "https://geobretagne.fr/geoserver/dreal_b/wfs?SERVICE=WFS&VERSION=1.0.0&REQUEST=GETFEATURE&TYPENAME=l_qpv_pnru&outputFormat=application/json&srsName=EPSG:4326",
            format: new ol.format.GeoJSON()
        }),
        style: function(feature, resolution) {
            return l_qpv_pnru.legend.items[0].styles;
        }
});
mviewer.customLayers.l_qpv_pnru.handle = false;
}