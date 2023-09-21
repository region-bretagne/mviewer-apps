{
mviewer.customLayers.rde = {};
var rde = mviewer.customLayers.rde;

// Génération de la liste des légendes
rde.legend = {items: [{
        geometry: "Point",
        label: "Réunion",
        styles: [new ol.style.Style({
            image: new ol.style.Circle({
                fill: new ol.style.Fill({
                    color: "#e3c213"
                }),
                stroke: new ol.style.Stroke({
                    color: "#ffffff",
                    width: 3
                }),
                radius: 7
            })
        })]
    }]
};

// Appel de la source de donnée (attention à la projection) et affichage du style sur la carte
mviewer.customLayers.rde.layer = new ol.layer.Vector({
        source: new ol.source.Vector({
            url: "https://ows.region-bretagne.fr/geoserver/rb/wfs?SERVICE=WFS&VERSION=1.0.0&REQUEST=GETFEATURE&TYPENAME=rde&outputFormat=application/json&srsName=EPSG:4326",
            format: new ol.format.GeoJSON()
        }),
        style: function(feature, resolution) {
			var stl;
            if (feature.get('code_commune_insee')) {          
                switch (feature.get('code_commune_insee')) {
                    case "visio":
                        stl = new ol.style.Style({
						image: new ol.style.Circle({
							fill: new ol.style.Fill({
								color: "#e3c213"
							}),
							stroke: new ol.style.Stroke({
								color: "#ffffff",
								width: 3
							}),
							radius: 7
						}),
						text: new ol.style.Text({
							font: '12px Trebuchet-MS',
							text: feature.get('code_commune_insee'),
							fill: new ol.style.Fill({
								color: "#000000"
							}),
							stroke: new ol.style.Stroke({
								color: "#ffffff",
								width: 3
							}),
							offsetX: 20
						})
						})
                        break;
                    default:
                        stl = new ol.style.Style({
						image: new ol.style.Circle({
							fill: new ol.style.Fill({
								color: "#e3c213"
							}),
							stroke: new ol.style.Stroke({
								color: "#ffffff",
								width: 3
							}),
							radius: 7
						})
					})
				}
			}
            return stl;
        }
});
mviewer.customLayers.rde.handle = false;
}