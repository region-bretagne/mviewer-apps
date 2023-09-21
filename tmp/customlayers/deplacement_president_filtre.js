{
mviewer.customLayers.deplacement_president_filtre = {};
var deplacement_president_filtre = mviewer.customLayers.deplacement_president_filtre;

deplacement_president_filtre.legend = { items: [
    {
        label: "Déplacement",
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
    }
]};	


mviewer.customLayers.deplacement_president_filtre.layer = new ol.layer.Vector({
        source: new ol.source.Vector({
            url: "https://ows.region-bretagne.fr/geoserver/interne/wfs?SERVICE=WFS&VERSION=1.0.0&REQUEST=GETFEATURE&TYPENAME=deplacement_president_stock&outputFormat=application/json&srsName=EPSG:4326",
            format: new ol.format.GeoJSON()
        }),
        style: function(feature, resolution) {
            return deplacement_president_filtre.legend.items[0].styles;
        }
});
mviewer.customLayers.deplacement_president_filtre.handle = false;
}