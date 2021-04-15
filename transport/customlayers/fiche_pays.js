{
mviewer.customLayers.fiche_pays = {};
mviewer.customLayers.fiche_pays.layer = new ol.layer.Vector({
        source: new ol.source.Vector({
            url: "apps/region/territoire/data/pays_simple.geojson",
            format: new ol.format.GeoJSON()
        }),
style: new ol.style.Style({
          stroke: new ol.style.Stroke({
            color: 'rgba(114,72,127,255)',
            width: 2
          }),
          fill: new ol.style.Fill({
            color: 'rgba(114,72,127,0.2)'
          })
})        
  });
mviewer.customLayers.fiche_pays.handle = false;
} 