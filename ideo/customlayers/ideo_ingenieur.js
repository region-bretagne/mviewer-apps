{
mviewer.customLayers.ideo_ingenieur = {};
var ideo_ingenieur = mviewer.customLayers.ideo_ingenieur;

ideo_ingenieur.legend = { items: [
    {
        label: "Ecole d'ingénieur",
        geometry: "Point",
        styles: [new ol.style.Style({
		  image: new ol.style.Icon({
			anchor: [0.5, 46],
			anchorXUnits: 'fraction',
			anchorYUnits: 'pixels',
			src: 'https://kartenn.region-bretagne.fr/img/styles/education.svg',
			width: 40,
			height: 40,
        })
	})
	]
    }
]};	


mviewer.customLayers.ideo_ingenieur.layer = new ol.layer.Vector({
        source: new ol.source.Vector({
            url: "https://ows.region-bretagne.fr/geoserver/interne/wfs?SERVICE=WFS&VERSION=1.0.0&REQUEST=GETFEATURE&TYPENAME=ideo_ingenieur&outputFormat=application/json&srsName=EPSG:4326",
            format: new ol.format.GeoJSON()
        }),
        style: function(feature, resolution) {
            return ideo_ingenieur.legend.items[0].styles;
        }
});
mviewer.customLayers.ideo_ingenieur.handle = false;
}