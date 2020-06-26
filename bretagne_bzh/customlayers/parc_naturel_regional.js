{
mviewer.customLayers.parc_naturel_regional = {};
var parc_naturel_regional = mviewer.customLayers.parc_naturel_regional;

parc_naturel_regional.legend = { items: [
    {
        label: "Parc Naturel Régional",
        geometry: "Polygon",
        styles: [new ol.style.Style({
            stroke: new ol.style.Stroke({ color: 'rgba(110, 178, 37,1.0)', width: 3 }),
            fill: new ol.style.Fill({ color: 'rgba(110, 178, 37,.7)'})
        })]
    }
] };

mviewer.customLayers.parc_naturel_regional.layer = new ol.layer.Vector({
        source: new ol.source.Vector({
            url: "https://ows.region-bretagne.fr/geoserver/rb/wfs?SERVICE=WFS&VERSION=1.0.0&REQUEST=GETFEATURE&TYPENAME=parc_naturel_regional&outputFormat=application/json&srsName=EPSG:4326",
            format: new ol.format.GeoJSON()
        }),
        style: function(feature, resolution) {
            return parc_naturel_regional.legend.items[0].styles;
        }
});
mviewer.customLayers.parc_naturel_regional.handle = false;
}