{
mviewer.customLayers.scot = {};
mviewer.customLayers.scot.layer = new ol.layer.Vector({
        source: new ol.source.Vector({
            url: "apps/region/ocs56/data/scot_simple.geojson",
            format: new ol.format.GeoJSON()
        }),
style: new ol.style.Style({
          stroke: new ol.style.Stroke({
            color: 'rgba(45, 64,89,255)',
            width: 1.5
          }),
          fill: new ol.style.Fill({
            color: 'rgba(0, 0, 0, 0)'
          })
})        
  });
mviewer.customLayers.scot.handle = false;
} 