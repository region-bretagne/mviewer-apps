{
mviewer.customLayers.etude_patrimoine_simple = {};
var etude_patrimoine_simple = mviewer.customLayers.etude_patrimoine_simple;

etude_patrimoine_simple.legend = { items: [
    {
        label: "Patrimoine",
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


mviewer.customLayers.etude_patrimoine_simple.layer = new ol.layer.Vector({
        source: new ol.source.Vector({
            url: "https://ows.region-bretagne.fr/geoserver/rb/wfs?SERVICE=WFS&VERSION=1.0.0&REQUEST=GETFEATURE&TYPENAME=etude_patrimoine_simple&outputFormat=application/json&srsName=EPSG:4326&propertyName=reference,denomination,type_dossier,materiaux_murs,geom",
            format: new ol.format.GeoJSON()
        }),
        style: function(feature, resolution) {
            return etude_patrimoine_simple.legend.items[0].styles;
        }
});
mviewer.customLayers.etude_patrimoine_simple.handle = false;
}