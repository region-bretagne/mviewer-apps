{
mviewer.customLayers.fiche_epci = {};
mviewer.customLayers.fiche_epci.layer = new ol.layer.Vector({
        source: new ol.source.Vector({
            url: "apps/region/territoire/data/epci_simple.geojson",
            format: new ol.format.GeoJSON()
        }),
style: new ol.style.Style({
          stroke: new ol.style.Stroke({
            color: 'rgba(114,72,127,255)',
            width: 1.5
          }),
          fill: new ol.style.Fill({
            color: 'rgba(114,72,127,0.2)'
          })
})        
  });
mviewer.customLayers.fiche_epci.handle = false;
} 