{
mviewer.customLayers.trafic = {};
mviewer.customLayers.trafic.layer = new ol.layer.Vector({
        source: new ol.source.Vector({
            url: "apps/region/transport/data/trafic_routier_i_et_v.geojson",
            format: new ol.format.GeoJSON()
        }),
style: new ol.style.Style({
          stroke: new ol.style.Stroke({
            color: 'rgba(45, 64,89,255)',
            width: 2,
          }),
          
})        
  });
mviewer.customLayers.trafic.handle = false;
} 