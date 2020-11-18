{
mviewer.customLayers.port_rb_com = {};
var port_rb_com = mviewer.customLayers.port_rb_com;

port_rb_com.legend = { items: [
    {
        label: "Port",
        geometry: "Point",
        styles: [new ol.style.Style({
            image: new ol.style.Icon ({
				opacity: 1,
				src:"https://kartenn.region-bretagne.fr/img/styles/port_generique.svg",
				scale: 0.2
			})
        })]
    }
] };

mviewer.customLayers.port_rb_com.layer = new ol.layer.Vector({
        source: new ol.source.Vector({
            url: "https://ows.region-bretagne.fr/geoserver/interne/wfs?SERVICE=WFS&VERSION=1.0.0&REQUEST=GETFEATURE&TYPENAME=port_rb_com&outputFormat=application/json&srsName=EPSG:4326",
            format: new ol.format.GeoJSON()
        }),
        style: function(feature, resolution) {
            return port_rb_com.legend.items[0].styles;
        }
});
mviewer.customLayers.port_rb_com.handle = false;
}