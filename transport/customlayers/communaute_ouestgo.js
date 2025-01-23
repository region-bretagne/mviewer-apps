{
mviewer.customLayers.communaute_ouestgo = {};
var communaute_ouestgo = mviewer.customLayers.communaute_ouestgo;

communaute_ouestgo.legend = { items: [
    {
        label: "Bassin de vie",
        geometry: "Polygon",
        styles: [new ol.style.Style({
            stroke: new ol.style.Stroke({ color: '#CF7A26', width: 2 }),
            fill: new ol.style.Fill({ color: 'rgba(207, 122, 38,0.5)'})
        })]
    },
    {
        label: "Lieu de travail",
        geometry: "Point",
        styles: [new ol.style.Style({
			image: new ol.style.Circle({
			fill: new ol.style.Fill({
            color: '#B0252E'
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
        label: "Lieu d'éducation",
        geometry: "Point",
        styles: [new ol.style.Style({
			image: new ol.style.Circle({
			fill: new ol.style.Fill({
            color: '#4C74B5'
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
        label: "Lieu de loisir/événement",
        geometry: "Point",
        styles: [new ol.style.Style({
			image: new ol.style.Circle({
			fill: new ol.style.Fill({
            color: '#69003F'
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
        label: "Axe routier",
        geometry: "Point",
        styles: [new ol.style.Style({
			image: new ol.style.Circle({
			fill: new ol.style.Fill({
            color: '#6E8225'
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
        label: "Point de covoiturage",
        geometry: "Point",
        styles: [new ol.style.Style({
			image: new ol.style.Circle({
			fill: new ol.style.Fill({
            color: '#E3C213'
        }),
        stroke: new ol.style.Stroke({
            color: "#ffffff",
            width: 3
        }),
        radius: 7
		})
		})]
    }
] };


mviewer.customLayers.communaute_ouestgo.layer = new ol.layer.Vector({
        source: new ol.source.Vector({
            url: "https://ows.region-bretagne.fr/geoserver/interne/wfs?SERVICE=WFS&VERSION=1.0.0&REQUEST=GETFEATURE&TYPENAME=communaute_ouestgo&outputFormat=application/json&srsName=EPSG:4326",
            format: new ol.format.GeoJSON()
        }),
        style: function(feature, resolution) {
            var stl;            
            switch (feature.get('type_carte')) {              
				case "Lieu de travail":
					stl = communaute_ouestgo.legend.items[1].styles;
					break;
				case "Lieu d'éducation":
					stl = communaute_ouestgo.legend.items[2].styles;
					break;
				case "Lieu de loisir/événement":
					stl = communaute_ouestgo.legend.items[3].styles;
					break;
				case "Axe routier":
					stl = communaute_ouestgo.legend.items[4].styles;
					break;
				case "Point de covoiturage":
					stl = communaute_ouestgo.legend.items[5].styles;
					break;
				case "Bassin de vie":
					stl = communaute_ouestgo.legend.items[0].styles;
					break;
            }            
            return stl;
        }
});
//false pour activation interrogation
mviewer.customLayers.communaute_ouestgo.handle = false;
}