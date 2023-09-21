{
mviewer.customLayers.psa = {};
mviewer.customLayers.psa.layer = new ol.layer.Vector({
        source: new ol.source.Vector({
            url: "https://wxs.ign.fr/transports/geoportail/wfs?SERVICE=WFS&VERSION=2.0.0&REQUEST=GETFEATURE&TYPENAME=TRANSPORTS.AIRNOISE.DOCS:dgac_psa_poi_wm&outputFormat=application/json&srsName=EPSG:4326",
            format: new ol.format.GeoJSON()
        }),
style: new ol.style.Style({
          stroke: new ol.style.Stroke({
            color: 'rgba(45, 64,89,255)',
            width: 1
          })
})        
  });
mviewer.customLayers.psa.handle = false;