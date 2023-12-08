//Données issues de : https://data.ille-et-vilaine.fr/dataset/trafic-routier

{
mviewer.customLayers.trafic = {};
var trafic = mviewer.customLayers.trafic;

trafic.legend = { items: [
 {
        label: "inf à 500",
        geometry: "LineString",
        styles: [new ol.style.Style({
            stroke: new ol.style.Stroke({ color: '#fff5f0', width: 1 })
        })]
    },
    {
        label: "500 - 1000",
        geometry: "LineString",
        styles: [new ol.style.Style({
            stroke: new ol.style.Stroke({ color: '#fcbea5', width: 1 })
        })]
    },
	{
        label: "1000 - 2500",
        geometry: "LineString",
        styles: [new ol.style.Style({
            stroke: new ol.style.Stroke({ color: '#fb7050', width: 2 })
        })]
    },    	
    {
        label: "2500 - 5000",
        geometry: "LineString",
        styles: [new ol.style.Style({
            stroke: new ol.style.Stroke({ color: '#d32020', width: 2 })
        })]
    },
	{
        label: " sup à 5000",
        geometry: "LineString",
        styles: [new ol.style.Style({
            stroke: new ol.style.Stroke({ color: '#67000d', width: 3 })
        })]
    }
] };


mviewer.customLayers.trafic.layer = new ol.layer.Vector({
        source: new ol.source.Vector({
            url: "apps/region/transport/data/trafic_routier_i_et_v.geojson",
            format: new ol.format.GeoJSON()
        }),
		style: function(feature, resolution) {
            var stl;  
			
			if (feature.get('MJATVTCJN') < '500'){
                stl = trafic.legend.items[0].styles;}
            else if (feature.get('MJATVTCJN') > '500' && feature.get('MJATVTCJN') < '1000'){
                stl = trafic.legend.items[1].styles;}
            else if (feature.get('MJATVTCJN') > '1000' && feature.get('MJATVTCJN') < '2500'){
                stl = trafic.legend.items[2].styles;}
			else if (feature.get('MJATVTCJN') > '2500' && feature.get('MJATVTCJN') < '5000'){
                stl = trafic.legend.items[3].styles;}
			else if (feature.get('MJATVTCJN') > '5000' && feature.get('MJATVTCJN') < '150000'){
                stl = trafic.legend.items[4].styles;}	
            return stl;
		}        
  });
mviewer.customLayers.trafic.handle = false;
} 