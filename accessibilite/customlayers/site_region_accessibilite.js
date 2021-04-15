{
mviewer.customLayers.site_region_accessibilite = {};
var site_region_accessibilite = mviewer.customLayers.site_region_accessibilite;

site_region_accessibilite.legend = { items: [
    {
        label: "Lycée",
        geometry: "Point",
        styles: [new ol.style.Style({
			image: new ol.style.Circle({
        fill: new ol.style.Fill({
            color: '#0094AB'
        }),
        stroke: new ol.style.Stroke({
            color: "#ffffff",
            width: 4
        }),
        radius: 9
    })
})]
    },
    {
        label: "Services",
        geometry: "Point",
        styles: [new ol.style.Style({
			image: new ol.style.Circle({
        fill: new ol.style.Fill({
            color: '#B0006B'
        }),
        stroke: new ol.style.Stroke({
            color: "#ffffff",
            width: 4
        }),
        radius: 9
    })
    })
]}
]};	


mviewer.customLayers.site_region_accessibilite.layer = new ol.layer.Vector({
        source: new ol.source.Vector({
            url: "https://ows.region-bretagne.fr/geoserver/rb/wfs?SERVICE=WFS&VERSION=1.0.0&REQUEST=GETFEATURE&TYPENAME=site_region_accessibilite&outputFormat=application/json&srsName=EPSG:4326",
            format: new ol.format.GeoJSON()
        }),
        style: function(feature, resolution) {
            var stl;
            if(feature.get('type_etablissement') === 'Lycée' || feature.get('type_etablissement') === 'EREA' || feature.get('type_etablissement') === 'CFA') {
                stl = site_region_accessibilite.legend.items[0].styles;
            } else if(feature.get('type_etablissement') === "Bâtiment tertiaire") {
                stl = site_region_accessibilite.legend.items[1].styles;
            }
            return stl;
        }
});
mviewer.customLayers.site_region_accessibilite.handle = false;
}