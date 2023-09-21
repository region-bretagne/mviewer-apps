{
mviewer.customLayers.naye = {};
var naye = mviewer.customLayers.naye;

naye.legend = { items: [
    {
        label: "Terre-plein du Naye",
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
})]
    }
]};	


mviewer.customLayers.naye.layer = new ol.layer.Vector({
        source: new ol.source.Vector({
            url: "https://kartenn.region-bretagne.fr/kartoviz/apps/region/kelenn/data/naye.geojson",
            format: new ol.format.GeoJSON()
        }),
        style: function(feature, resolution) {
            return naye.legend.items[0].styles;
        }
});
mviewer.customLayers.naye.handle = false;
}