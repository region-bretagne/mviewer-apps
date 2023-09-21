{
mviewer.customLayers.fiche_dep = {};
mviewer.customLayers.fiche_dep.layer = new ol.layer.Vector({
        source: new ol.source.Vector({
            url: "https://kartenn.region-bretagne.fr/kartoviz/apps/region/territoire/data/departement_simple.geojson",
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
mviewer.customLayers.fiche_dep.handle = false;
} 