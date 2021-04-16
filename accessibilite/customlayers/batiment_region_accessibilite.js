{
mviewer.customLayers.batiment_region_accessibilite = {};
var batiment_region_accessibilite = mviewer.customLayers.batiment_region_accessibilite;

batiment_region_accessibilite.legend = { items: [
    {
        label: "Non accessible, non praticable",
        geometry: "Polygon",
        styles: [new ol.style.Style({
            stroke: new ol.style.Stroke({ color: '#B0252E', width: 3 }),
            fill: new ol.style.Fill({ color: '#C18A7E'})
        })]
    },
    {
        label: "Non accessible mais praticable",
        geometry: "Polygon",
        styles: [new ol.style.Style({
            stroke: new ol.style.Stroke({ color: '#E3C213', width: 3 }),
            fill: new ol.style.Fill({ color: '#EED969'})
        })]
    },    
    {
        label: "Accessible",
        geometry: "Polygon",
        styles: [new ol.style.Style({
            stroke: new ol.style.Stroke({ color: '#9FB935', width: 3 }),
            fill: new ol.style.Fill({ color: '#C1CA90'})
        })]
    }
] };

mviewer.customLayers.batiment_region_accessibilite.layer = new ol.layer.Vector({
        source: new ol.source.Vector({
            url: "https://ows.region-bretagne.fr/geoserver/rb/wfs?SERVICE=WFS&VERSION=1.0.0&REQUEST=GETFEATURE&TYPENAME=batiment_region_accessibilite&outputFormat=application/json&srsName=EPSG:4326",
            format: new ol.format.GeoJSON()
        }),
        style: function(feature, resolution) {
            var stl;            
            if (feature.get('taux_global') >= 0 && feature.get('taux_global') < 65){
                stl = batiment_region_accessibilite.legend.items[0].styles;
			}
            else if (feature.get('taux_global') >= 65 && feature.get('taux_global') < 85){
                stl = batiment_region_accessibilite.legend.items[1].styles;
			}
            else if (feature.get('taux_global') >= 85){
                stl = batiment_region_accessibilite.legend.items[2].styles;
            }
            return stl;
        }
});
mviewer.customLayers.batiment_region_accessibilite.handle = false;
}