{
mviewer.customLayers.sirene_bretagne = {};
var sirene_bretagne = mviewer.customLayers.sirene_bretagne;

sirene_bretagne.legend = { items: [
    {
        label: "Entreprise",
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


mviewer.customLayers.sirene_bretagne.layer = new ol.layer.Vector({
        source: new ol.source.Vector({
            url: "https://ows.region-bretagne.fr/geoserver/rb/wfs?SERVICE=WFS&VERSION=1.0.0&REQUEST=GETFEATURE&TYPENAME=sirene_bretagne&outputFormat=application/json&srsName=EPSG:4326&cql_filter=codecommune=35188",
            format: new ol.format.GeoJSON()
        }),
        style: function(feature, resolution) {
            return sirene_bretagne.legend.items[0].styles;
        }
});
mviewer.customLayers.sirene_bretagne.handle = false;
}