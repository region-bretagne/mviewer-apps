{
mviewer.customLayers.peb = {};
var peb = mviewer.customLayers.peb;

peb.legend = { items: [
    {
        label: "Zonage A",
        geometry: "Polygon",
        styles: [new ol.style.Style({

            fill: new ol.style.Fill({ color: '#d0021b'})
        })]
    },
    {
        label: "Zonage B",
        geometry: "Polygon",
        styles: [new ol.style.Style({
            fill: new ol.style.Fill({ color: '#f6c215'})
        })]
    },    
    {
        label: "Zonage C",
        geometry: "Polygon",
        styles: [new ol.style.Style({
            fill: new ol.style.Fill({ color: '#8af346'})
        })]
    },
    {
        label: "Zonage D",
        geometry: "Polygon",
        styles: [new ol.style.Style({
            fill: new ol.style.Fill({ color: '#9699f6'})
        })]
    }
] };

mviewer.customLayers.peb.layer = new ol.layer.Vector({
        source: new ol.source.Vector({
                       // url: "https://kartenn.region-bretagne.fr/kartoviz/apps/region/aeroport/data/peb.geojson",
						url: "https://wxs.ign.fr/transports/geoportail/wfs?SERVICE=WFS&VERSION=2.0.0&REQUEST=GETFEATURE&TYPENAME=DGAC-PEB_BDD_FXX_WM:fxx_peb_wm&outputFormat=application/json&srsName=EPSG:4326",
            format: new ol.format.GeoJSON()
        }),
        style: function(feature, resolution) {
            var stl;            
            if (feature.get('zone') === 'A' ){
                stl = peb.legend.items[0].styles;
			}
            else if (feature.get('zone') === 'B' ){
                stl = peb.legend.items[1].styles;
			}
            else if (feature.get('zone') === 'C'){
                stl = peb.legend.items[2].styles;
            }
            else if (feature.get('zone') === 'D'){
                stl = peb.legend.items[3].styles;
            }
            return stl;
        }
});
mviewer.customLayers.peb.handle = false;
}