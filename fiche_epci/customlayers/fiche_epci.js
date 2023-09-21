{
mviewer.customLayers.fiche_epci = {};
var fiche_epci = mviewer.customLayers.fiche_epci;

fiche_epci.legend = { items: [
    {
        label: "Espace territorial Armor",
        geometry: "Polygon",
        styles: [new ol.style.Style({
            stroke: new ol.style.Stroke({ color: 'rgba(159, 185, 53,1.0)', width: 2 }),
            fill: new ol.style.Fill({ color: 'rgba(159, 185, 53,0.5)'})
        })]
    },
    {
        label: "Espace territorial Brest",
        geometry: "Polygon",
        styles: [new ol.style.Style({
            stroke: new ol.style.Stroke({ color: 'rgba(176, 37, 46,1.0)', width: 2 }),
            fill: new ol.style.Fill({ color: 'rgba(176, 37, 46,0.5)'})
        })]
    },    
    {
        label: "Espace territorial Bretagne sud",
        geometry: "Polygon",
        styles: [new ol.style.Style({
            stroke: new ol.style.Stroke({ color: 'rgba(227, 194, 19,1.0)', width: 2 }),
            fill: new ol.style.Fill({ color: 'rgba(227, 194, 19,0.5)'})
        })]
    },
    {
        label: "Espace territorial Centre Bretagne",
        geometry: "Polygon",
        styles: [new ol.style.Style({
            stroke: new ol.style.Stroke({ color: 'rgba(186, 136, 164,1.0)', width: 2 }),
            fill: new ol.style.Fill({ color: 'rgba(186, 136, 164,0.5)'})
        })]
    },
    {
        label: "Espace territorial Cornouaille",
        geometry: "Polygon",
        styles: [new ol.style.Style({
            stroke: new ol.style.Stroke({ color: 'rgba(165, 179, 217,1.0)', width: 2 }),
            fill: new ol.style.Fill({ color: 'rgba(165, 179, 217,0.5)'})
        })]
    },
    {
        label: "Espace territorial Marches de Bretagne",
        geometry: "Polygon",
        styles: [new ol.style.Style({
            stroke: new ol.style.Stroke({ color: 'rgba(153, 134, 8,1.0)', width: 2 }),
            fill: new ol.style.Fill({ color: 'rgba(153, 134, 8,0.5)'})
        })]
    },
    {
        label: "Espace territorial Rennes – St-Malo – Redon",
        geometry: "Polygon",
        styles: [new ol.style.Style({
            stroke: new ol.style.Stroke({ color: 'rgba(0, 90, 102,1.0)', width: 2 }),
            fill: new ol.style.Fill({ color: 'rgba(0, 90, 102,0.5)'})
        })]
    }

] };


mviewer.customLayers.fiche_epci.layer = new ol.layer.Vector({
        source: new ol.source.Vector({
            url: "https://ows.region-bretagne.fr/geoserver/rb/wfs?SERVICE=WFS&VERSION=1.0.0&REQUEST=GETFEATURE&TYPENAME=fiche_epci&outputFormat=application/json&srsName=EPSG:4326",
            format: new ol.format.GeoJSON()
        }),
        style: function(feature, resolution) {
            var stl;            
            if (feature.get('agence_nom')) {              
                switch (feature.get('agence_nom')) {
                    case "Espace territorial Armor":
                        stl = fiche_epci.legend.items[0].styles;
                        break;
                    case "Espace territorial Brest":
                        stl = fiche_epci.legend.items[1].styles;
                        break;
                    case "Espace territorial Bretagne sud":
                        stl = fiche_epci.legend.items[2].styles;
                        break;
                    case "Espace territorial Centre Bretagne":
                        stl = fiche_epci.legend.items[3].styles;
                        break;
                    case "Espace territorial Cornouaille":
                        stl = fiche_epci.legend.items[4].styles;
                        break;
                    case "Espace territorial Marches de Bretagne":
                        stl = fiche_epci.legend.items[5].styles;
                        break;
                    case "Espace territorial Rennes – St-Malo – Redon":
                        stl = fiche_epci.legend.items[6].styles;
                        break;
                }
            }            
            return stl;
        }
});
//false pour activation interrogation
mviewer.customLayers.fiche_epci.handle = false;
}