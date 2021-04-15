{
mviewer.customLayers.departement = {};
mviewer.customLayers.departement.layer = new ol.layer.Vector({
        source: new ol.source.Vector({
            url: "apps/region/ocs56/data/departement_simple.geojson",
            format: new ol.format.GeoJSON()
        }),
style: new ol.style.Style({
          stroke: new ol.style.Stroke({
            color: 'rgba(23,36,52,255)',
            width: 3
          }),
          fill: new ol.style.Fill({
            color: 'rgba(0, 0, 0, 0)'
          })
})        
  });
mviewer.customLayers.departement.handle = false;
} 