/*Vector tile*/
{
mviewer.customLayers.patrimoine_simple = {};
mviewer.customLayers.patrimoine_simple.classification = {
        "a":{"id":1,"title":"Architecture","field":"type_dossier","value":"architecture","fill":"#9fb935","stroke":"#fafafa","strokewidth":0.5,"maxscaledenominator":"100000"},
        "m":{"id":2,"title":"Mobilier","field":"type_dossier","value":"mobilier","fill":"#EF3B2C","stroke":"#fafafa","strokewidth":0.5,"maxscaledenominator":"100000"}
  };

mviewer.customLayers.patrimoine_simple.style1 = function (feature, resolution) {
    var ref = "";
    var val = feature.get("type_dossier");
	ref = val.substr(0,1);
    feature.getProperties()["label"] = mviewer.customLayers.patrimoine_simple.classification[ref].title;
    var style = new ol.style.Style({
		image: new ol.style.Circle({
		fill: new ol.style.Fill({
		  color: mviewer.customLayers.patrimoine_simple.classification[ref].fill
		}),
		stroke: new ol.style.Stroke({
		  color: mviewer.customLayers.patrimoine_simple.classification[ref].fill,
		  width: mviewer.customLayers.patrimoine_simple.classification[ref].strokewidth
		}),
		radius: 9
    })
  });
    return style;
};

mviewer.customLayers.patrimoine_simple.layer = new ol.layer.VectorTile({
      style:  mviewer.customLayers.patrimoine_simple.style1,
      // minResolution: 2,
      maxResolution: 306,
      source: new ol.source.VectorTile({
        tilePixelRatio: 1, // oversampling when > 1
        tileGrid: ol.tilegrid.createXYZ({maxZoom: 20}),
        format: new ol.format.MVT(),
        url: 'https://ows.region-bretagne.fr/geoserver/gwc/service/tms/1.0.0/interne:patrimoine_simple@EPSG%3A3857@pbf/{z}/{x}/{-y}.pbf'
      })
});
mviewer.customLayers.patrimoine_simple.handle = false;
}
