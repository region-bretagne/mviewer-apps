{
// Définition des variables. Remplacer indice_position_sociale_ecole par le nom de la couche
mviewer.customLayers.indice_position_sociale_ecole = {};
var data = mviewer.customLayers.indice_position_sociale_ecole;

data.legend = { items: [
    {
        label: "Moins de 80",
        geometry: "Point",
        styles: [new ol.style.Style({
			image: new ol.style.Circle({
        fill: new ol.style.Fill({
            color: '#B1252E'
        }),
        stroke: new ol.style.Stroke({
            color: "#ffffff",
            width: 3
        }),
        radius: 7
		})
	})]
    },
    {
        label: "Entre 80 et 100",
        geometry: "Point",
        styles: [new ol.style.Style({
			image: new ol.style.Circle({
        fill: new ol.style.Fill({
            color: '#C28B7E'
        }),
        stroke: new ol.style.Stroke({
            color: "#ffffff",
            width: 3
        }),
        radius: 7
		})
	})]
    },
    {
        label: "Entre 100 et 120",
        geometry: "Point",
        styles: [new ol.style.Style({
			image: new ol.style.Circle({
        fill: new ol.style.Fill({
            color: '#A6B4DA'
        }),
        stroke: new ol.style.Stroke({
            color: "#ffffff",
            width: 3
        }),
        radius: 7
		})
	})]
    },
    {
        label: "Plus de 120",
        geometry: "Point",
        styles: [new ol.style.Style({
			image: new ol.style.Circle({
        fill: new ol.style.Fill({
            color: '#4C75B6'
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


data.layer = new ol.layer.Vector({
        source: new ol.source.Vector({
            url: "https://ows.region-bretagne.fr/geoserver/rb/wfs?SERVICE=WFS&VERSION=1.0.0&REQUEST=GETFEATURE&TYPENAME=indice_position_sociale_ecole&outputFormat=application/json&srsName=EPSG:4326",
            format: new ol.format.GeoJSON()
        }),
        style: function(feature, resolution) {
            var stl;
            if (feature.get('ips') < 80){
                stl = data.legend.items[0].styles;
			}
            else if (feature.get('ips') >= 80 && feature.get('ips') < 100 ){
                stl = data.legend.items[1].styles;
			}
            else if (feature.get('ips') >= 100 && feature.get('ips') < 120 ){
                stl = data.legend.items[2].styles;
            }
            else if (feature.get('ips') >= 120 ){
                stl = data.legend.items[3].styles;
            }
            return stl;
        }
});
data.handle = false;
}