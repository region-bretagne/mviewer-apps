{
mviewer.customLayers.commune_destination_touristique = {};
var commune_destination_touristique = mviewer.customLayers.commune_destination_touristique;

commune_destination_touristique.legend = { items: [
    {
        label: "Commune destination touristique",
        geometry: "Point",
        styles: [new ol.style.Style({
			image: new ol.style.Circle({
        fill: new ol.style.Fill({
            color: 'rgba(255, 255, 255,0)'
        }),
        stroke: new ol.style.Stroke({
            color: 'rgba(255, 255, 255,0)',
            width: 3
        }),
        radius: 7
		})
	})]
    }
] };

mviewer.customLayers.commune_destination_touristique.layer = new ol.layer.Vector({
        source: new ol.source.Vector({
            url: "https://ows.region-bretagne.fr/geoserver/interne/wfs?SERVICE=WFS&VERSION=1.0.0&REQUEST=GETFEATURE&TYPENAME=commune_destination_touristique&outputFormat=application/json&srsName=EPSG:4326",
            format: new ol.format.GeoJSON()
        }),
        style: function(feature, resolution) {
            return commune_destination_touristique.legend.items[0].styles;
        }
});
mviewer.customLayers.commune_destination_touristique.handle = false;
}