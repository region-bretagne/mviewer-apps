{
mviewer.customLayers.deplacement_president = {};
var deplacement_president = mviewer.customLayers.deplacement_president;

deplacement_president.legend = { items: [
    {
        label: "Déplacement",
        geometry: "Point",
        styles: [new ol.style.Style({
			image: new ol.style.Circle({
        fill: new ol.style.Fill({
            color: '#e3c213'
        }),
        stroke: new ol.style.Stroke({
            color: "#ffffff",
            width: 3
        }),
        radius: 7
		})
	})]
    }
]};	


mviewer.customLayers.deplacement_president.layer = new ol.layer.Vector({
        source: new ol.source.Vector({
            url: "https://ows.region-bretagne.fr/geoserver/rb/wfs?SERVICE=WFS&VERSION=1.0.0&REQUEST=GETFEATURE&TYPENAME=deplacement_president&outputFormat=application/json&srsName=EPSG:4326",
            format: new ol.format.GeoJSON()
        }),
        style: function(feature, resolution) {
            return deplacement_president.legend.items[0].styles;
        }
});
mviewer.customLayers.deplacement_president.handle = false;
}