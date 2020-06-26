{
mviewer.customLayers.reserve_naturelle_regionale = {};
var reserve_naturelle_regionale = mviewer.customLayers.reserve_naturelle_regionale;

reserve_naturelle_regionale.legend = { items: [
    {
        label: "Réserve naturelle régionale",
        geometry: "Polygon",
        styles: [new ol.style.Style({
            stroke: new ol.style.Stroke({ color: 'rgba(0, 90, 102,1.0)', width: 3 }),
            fill: new ol.style.Fill({ color: 'rgba(0, 90, 102,.7)'})
        })]
    }/*,
    {
        label: "Logo",
        styles: [new ol.style.Style({
		  image: new ol.style.Icon({
			scale: 0.015,
			anchorXUnits: 'fraction',
			anchorYUnits: 'pixels',
			src: 'https://kartenn.region-bretagne.fr/img/styles/rnr.svg'
        })})]
    }*/

] };

mviewer.customLayers.reserve_naturelle_regionale.layer = new ol.layer.Vector({
        source: new ol.source.Vector({
            url: "https://ows.region-bretagne.fr/geoserver/rb/wfs?SERVICE=WFS&VERSION=1.0.0&REQUEST=GETFEATURE&TYPENAME=reserve_naturelle_regionale&outputFormat=application/json&srsName=EPSG:4326",
            format: new ol.format.GeoJSON()
        }),
        style: function(feature, resolution) {
            return reserve_naturelle_regionale.legend.items[0].styles;
        }
});
mviewer.customLayers.reserve_naturelle_regionale.handle = false;
}