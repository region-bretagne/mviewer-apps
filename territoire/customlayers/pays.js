{
mviewer.customLayers.pays = {};
mviewer.customLayers.pays.layer = new ol.layer.Vector({
        source: new ol.source.Vector({
            url: "apps/region/territoire/data/pays_simple.geojson",
            format: new ol.format.GeoJSON()
        }),
style: new ol.style.Style({
          stroke: new ol.style.Stroke({
            color: 'rgba(45, 64,89,255)',
            width: 2.4
          }),
          fill: new ol.style.Fill({
            color: 'rgba(0, 0, 0, 0)'
          })
})        
  });
mviewer.customLayers.pays.handle = false;
} 