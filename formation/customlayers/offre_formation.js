{
mviewer.customLayers.offre_formation = {};
var offre_formation = mviewer.customLayers.offre_formation;

offre_formation.legend = { items: [
    {
        label: "01 - Agriculture - Horticulture	- Paysage",
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
        label: "02 - Pêche - Transports Maritimes - Elevages Aquacoles",
        geometry: "Point",
        styles: [new ol.style.Style({
			image: new ol.style.Circle({
        fill: new ol.style.Fill({
            color: '#c18a7e'
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
        label: "03 - Nautisme",
        geometry: "Point",
        styles: [new ol.style.Style({
			image: new ol.style.Circle({
        fill: new ol.style.Fill({
            color: '#d5b082'
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
        label: "04 - Bâtiment - Travaux Publics",
        geometry: "Point",
        styles: [new ol.style.Style({
			image: new ol.style.Circle({
        fill: new ol.style.Fill({
            color: '#cf7a26'
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
        label: "05 - Métiers De L'énergie",
        geometry: "Point",
        styles: [new ol.style.Style({
			image: new ol.style.Circle({
        fill: new ol.style.Fill({
            color: '#e3c213'
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
        label: "06 - Industries",
        geometry: "Point",
        styles: [new ol.style.Style({
			image: new ol.style.Circle({
        fill: new ol.style.Fill({
            color: '#9fb935'
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
        label: "08 - Hôtellerie - Restauration - Tourisme",
        geometry: "Point",
        styles: [new ol.style.Style({
			image: new ol.style.Circle({
        fill: new ol.style.Fill({
            color: '#8eb9c5'
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
        label: "09 - Sport - Animation",
        geometry: "Point",
        styles: [new ol.style.Style({
			image: new ol.style.Circle({
        fill: new ol.style.Fill({
            color: '#a5b3d9'
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
        label: "11 - Transports - Logistique",
        geometry: "Point",
        styles: [new ol.style.Style({
			image: new ol.style.Circle({
        fill: new ol.style.Fill({
            color: '#4c74b5'
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
        label: "12 - Gestion - Comptabilité - Formation",
        geometry: "Point",
        styles: [new ol.style.Style({
			image: new ol.style.Circle({
        fill: new ol.style.Fill({
            color: '#b0006b'
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
        label: "13 - Numérique - Digitalisation",
        geometry: "Point",
        styles: [new ol.style.Style({
			image: new ol.style.Circle({
        fill: new ol.style.Fill({
            color: '#2a317e'
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
        label: "14 - Commerce - Vente",
        geometry: "Point",
        styles: [new ol.style.Style({
			image: new ol.style.Circle({
        fill: new ol.style.Fill({
            color: '#8a317e'
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
        label: "16 - Sanitaire Et Social",
        geometry: "Point",
        styles: [new ol.style.Style({
			image: new ol.style.Circle({
        fill: new ol.style.Fill({
            color: '#2a3149'
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
        label: "18 - Environnement - Propreté - Sécurité",
        geometry: "Point",
        styles: [new ol.style.Style({
			image: new ol.style.Circle({
        fill: new ol.style.Fill({
            color: '#2a547e'
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
        label: "19 - Arts - Design - Spectacle - Audiovisuel",
        geometry: "Point",
        styles: [new ol.style.Style({
			image: new ol.style.Circle({
        fill: new ol.style.Fill({
            color: '#B0A52E'
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


mviewer.customLayers.offre_formation.layer = new ol.layer.Vector({
        source: new ol.source.Vector({
            url: "https://ows.region-bretagne.fr/geoserver/interne/wfs?SERVICE=WFS&VERSION=1.0.0&REQUEST=GETFEATURE&TYPENAME=offre_formation&outputFormat=application/json&srsName=EPSG:4326",
            format: new ol.format.GeoJSON()
        }),style: function(feature, resolution) {
            var stl;
            if(feature.get('domaine') === '01 - Agriculture - Horticulture - Paysage') {
                stl = offre_formation.legend.items[0].styles;
            } else if(feature.get('domaine') === "02 - Pêche - Transports Maritimes - Elevages Aquacoles") {
                stl = offre_formation.legend.items[1].styles;
            }  else if(feature.get('domaine') === "03 - Nautisme") {
                stl = offre_formation.legend.items[2].styles;
            } else if(feature.get('domaine') === "04 - Bâtiment - Travaux Publics") {
                stl = offre_formation.legend.items[3].styles;
            } else if(feature.get('domaine') === "05 - Métiers De L'énergie") {
                stl = offre_formation.legend.items[4].styles;
            } else if(feature.get('domaine') === "06 - Industries") {
                stl = offre_formation.legend.items[5].styles;
            } else if(feature.get('domaine') === "08 - Hôtellerie - Restauration - Tourisme") {
                stl = offre_formation.legend.items[6].styles;
            } else if(feature.get('domaine') === "09 - Sport - Animation") {
                stl = offre_formation.legend.items[7].styles;
            } else if(feature.get('domaine') === "11 - Transports - Logistique") {
                stl = offre_formation.legend.items[8].styles;
            } else if(feature.get('domaine') === "12 - Gestion - Comptabilité - Formation") {
                stl = offre_formation.legend.items[9].styles;
            } else if(feature.get('domaine') === "13 - Numérique - Digitalisation") {
                stl = offre_formation.legend.items[10].styles;
            } else if(feature.get('domaine') === "14 - Commerce - Vente") {
                stl = offre_formation.legend.items[11].styles;
            } else if(feature.get('domaine') === "16 - Sanitaire Et Social") {
                stl = offre_formation.legend.items[12].styles;
            } else if(feature.get('domaine') === "18 - Environnement - Propreté - Sécurité") {
                stl = offre_formation.legend.items[13].styles;
            } else if(feature.get('domaine') === "19 - Arts - Design - Spectacle - Audiovisuel") {
                stl = offre_formation.legend.items[14].styles;
            }
            return stl;
        }
});
mviewer.customLayers.offre_formation.handle = false;
}