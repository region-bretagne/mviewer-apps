{
mviewer.customLayers.laureat_zero_phyto = {};
var laureat_zero_phyto = mviewer.customLayers.laureat_zero_phyto;

laureat_zero_phyto.legend = { items: [
    {
        label: "Commune lauréate",
        geometry: "Polygon",
        styles: [new ol.style.Style({
            stroke: new ol.style.Stroke({ color: '#FFFFFF', width: 1 }),
            fill: new ol.style.Fill({ color: '#EED969'})
        })]
    },
    {
        label: "Commune lauréate durable",
        geometry: "Polygon",
        styles: [new ol.style.Style({
            stroke: new ol.style.Stroke({ color: '#FFFFFF', width: 1 }),
            fill: new ol.style.Fill({ color: '#9FB935'})
        })]
    },    
    {
        label: "Intercommunalité lauréate",
        geometry: "Polygon",
        styles: [new ol.style.Style({
            stroke: new ol.style.Stroke({ color: '#998608', width: 4 })
        })]
    },
    {
        label: "Intercommunalité lauréate durable",
        geometry: "Polygon",
        styles: [new ol.style.Style({
            stroke: new ol.style.Stroke({ color: '#6E8225', width: 4 })
        })]
    }
] };

mviewer.customLayers.laureat_zero_phyto.layer = new ol.layer.Vector({
        source: new ol.source.Vector({
            url: "https://ows.region-bretagne.fr/geoserver/rb/wfs?SERVICE=WFS&VERSION=1.0.0&REQUEST=GETFEATURE&TYPENAME=laureat_zero_phyto&outputFormat=application/json&srsName=EPSG:4326",
            format: new ol.format.GeoJSON()
        }),
        style: function(feature, resolution) {
            var stl;            
            if (feature.get('type_collectivite') === 'Commune' && feature.get('annee_prix_durable') == undefined){
                stl = laureat_zero_phyto.legend.items[0].styles;
			}
            else if (feature.get('type_collectivite') === 'Commune' && feature.get('annee_prix_durable') != undefined){
                stl = laureat_zero_phyto.legend.items[1].styles;
			}
            else if (feature.get('type_collectivite') === 'Intercommunalité' && feature.get('annee_prix_durable') == undefined){
                stl = laureat_zero_phyto.legend.items[2].styles;
            }
            else if (feature.get('type_collectivite') === 'Intercommunalité' && feature.get('annee_prix_durable') !=  undefined){
                stl = laureat_zero_phyto.legend.items[3].styles;
            }
            return stl;
        }
});
mviewer.customLayers.laureat_zero_phyto.handle = false;
}