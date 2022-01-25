{
mviewer.customLayers.batiment_region_accessibilite_mot = {};
var batiment_region_accessibilite_mot = mviewer.customLayers.batiment_region_accessibilite_mot;

batiment_region_accessibilite_mot.legend = { items: [
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

mviewer.customLayers.batiment_region_accessibilite_mot.layer = new ol.layer.Vector({
        source: new ol.source.Vector({
            url: "https://ows.region-bretagne.fr/geoserver/rb/wfs?SERVICE=WFS&VERSION=1.0.0&REQUEST=GETFEATURE&TYPENAME=batiment_region_accessibilite&outputFormat=application/json&srsName=EPSG:4326",
            format: new ol.format.GeoJSON()
        }),
        style: function(feature, resolution) {
            var stl;            
            if (feature.get('classe_h_mot_txt') == 'Non accessible, non praticable'){
                stl = batiment_region_accessibilite_mot.legend.items[0].styles;
			}
            else if (feature.get('classe_h_mot_txt') == 'Non accessible mais praticable'){
                stl = batiment_region_accessibilite_mot.legend.items[1].styles;
			}
            else if (feature.get('classe_h_mot_txt') == 'Accessible'){
                stl = batiment_region_accessibilite_mot.legend.items[2].styles;
            }
            return stl;
        }
});
mviewer.customLayers.batiment_region_accessibilite_mot.handle = false;
}