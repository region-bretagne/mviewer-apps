{
mviewer.customLayers.mon_intercommunalite_2021 = {};
mviewer.customLayers.mon_intercommunalite_2021.layer = new ol.layer.Vector({
        source: new ol.source.Vector({
            url: 'https://kartenn.region-bretagne.fr/territoires/data/epci_simple.geojson',
            format: new ol.format.GeoJSON(),
        }),
        style: new ol.style.Style({
          stroke: new ol.style.Stroke({
            color: 'rgba(255, 255, 255, 255)',
            width: 0.5
          }),
          fill: new ol.style.Fill({
            color: 'rgba(61, 62, 93, 255)'
          })
})        
  });
mviewer.customLayers.mon_intercommunalite_2021.handle = false;
} 