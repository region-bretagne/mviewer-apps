mviewer.customLayers.eqpts = (function () {


  var _legend = {
    items: []
  };
  var _map = mviewer.getMap();

  var _gymnase = new ol.style.Style({
    image: new ol.style.Icon({
      color: "black",
      size: [25,25],
      src: 'apps/region/equipements/img/equipement/features/gymnase.svg'
    })
  });
  var _piscine = new ol.style.Style({
    image: new ol.style.Icon({
      color: "black",
      size: [25,25],
      src: 'apps/region/equipements/img/equipement/features/piscine.svg'
    })
  });

  var _stade = new ol.style.Style({
    image: new ol.style.Icon({
      color: "black",
      size: [25,25],
      src: 'apps/region/equipements/img/equipement/features/stade.svg'
    })
  });
  var _complexe = new ol.style.Style({
    image: new ol.style.Icon({
      color: "black",
      size: [25,25],
      src: 'apps/region/equipements/img/equipement/features/complexe.svg'
    })
  });



  _legend.items.push({
    styles: [_piscine],
    label: "Piscines",
    geometry: "Point"
  });
  _legend.items.push({
    styles: [_stade],
    label: "Stades",
    geometry: "Point"
  });
  _legend.items.push({
    styles: [_gymnase],
    label: "Gymnases",
    geometry: "Point"
  });
  _legend.items.push({
    styles: [_complexe],
    label: "Complexes",
    geometry: "Point"
  });

  var _source = new ol.source.Vector({
    url: "https://ows.region-bretagne.fr/geoserver/rb/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=rb%3Alycee_eqpt_ext&outputFormat=application%2Fjson&srsName=EPSG:4326",
    format: new ol.format.GeoJSON()
  });
  var getText = function(feature, resolution) {
    var maxResolution = 6;
    var text = feature.get('nom');
    if (resolution > maxResolution) {
        text = '';
    } 
    return text.toUpperCase();
};

var createTextStyle = function(feature, resolution) {
    var align = 'Start';
    var baseline = 'Middle';
    var size = '10px';
    var offsetX = 0;
    var offsetY = -15;
    var weight = 'Normal';
    var rotation = 0;
    var font = weight + ' ' + size + ' ' + 'Verdana';
    var fillColor = '#aa3300';
    var outlineColor = '#ffffff';
    var outlineWidth = 2;

    return new ol.style.Text({
        /*textAlign: align,*/
        /*textBaseline: baseline,*/
        font: font,
        text: getText(feature, resolution),
        fill: new ol.style.Fill({color: fillColor}),
        stroke: new ol.style.Stroke({color: outlineColor, width: outlineWidth}),
        offsetX: offsetX,
        offsetY: offsetY,
        rotation: rotation
    });
};
  var styleFunction = function (feature, resolution) {
    var stl;
    if (feature.get("type") === 'piscine') {
      stl = _piscine;
    } else if (feature.get("type").substr(0,feature.get("type").indexOf(" ")) === "stade" || feature.get("type") === "stade") {
      stl = _stade;
    } else if (feature.get("type") === "complexe") {
      stl = _complexe;
    } else {
      stl = _gymnase;
    }
    stl.setText(createTextStyle(feature, resolution));
    if(feature.highlighted==1){
      var img = stl.getImage().getSrc();
      stl = new ol.style.Style({
        image: new ol.style.Icon({
          color: '#FF1493',
          size: [25,25],
          src: img
        })
      });
      stl = stl.clone();
    }else if(feature.highlighted == 2){
      var img = stl.getImage().getSrc();
      stl = new ol.style.Style({
        image: new ol.style.Icon({
          color: '#FF0000',
          size: [25,25],
          src: img
        })
      });
      stl = stl.clone();
    }
    return [stl];
  }
  var _layer = new ol.layer.Vector({
    source: _source,
    style: styleFunction,
    updateWhileAnimating: true,
    updateWhileInteracting: true
  });
  var _selection = function (rne) {
    var features = _source.getFeatures();
    features.forEach(function (feature) {
      var usages = JSON.parse(feature.getProperties()["usages"]);
      usages.every(function (item) {
        if (item === rne) {
          feature.highlighted = 1;
          return false;
        } else {
          feature.highlighted = 0;
        }
        return true;
      });
    });
    _map.getView().animate({zoom: _map.getView().getZoom()+0.0000001});
  };
  var _highlightEqpt = function(eqptId) {
    var features =_source.getFeatures();
    features.forEach(function (feature) {
      if(feature.get("code")==eqptId){
        feature.highlighted = 2;
        var padding = 250;
        if ($("#wrapper").hasClass("toggled-2"))
            padding = 50;
        _map.getView().fit(feature.getGeometry(), {
          duration: 500,
          maxZoom: _map.getView().getZoom(),
          padding: [0, padding, 0, 0]
        });
      }
      else if(feature.highlighted==2){
        feature.highlighted=1;
      }
    });
    

  };
  var _renderPanel = function (features, views) {
    var l = mviewer.getLayer("eqpts");
    var html;
    if (l.template) {
        html = info.templateHTMLContent(features, l);
    } else {
        html = info.formatHTMLContent(features, l);
    }
    var panel = "right-panel";
    if (configuration.getConfiguration().mobile) {
        panel = "modal-panel";
    }
    var view = views[panel];
    view.layers.push({
        "id": view.layers.length + 1,
        "firstlayer": false,
        "manyfeatures": (features.length > 1),
        "nbfeatures": features.length,
        "name": l.name,
        "layerid": "eqpts",
        "theme_icon": l.icon,
        "html": html
    });
};
  var _handle = function(features,views){
    _renderPanel(features,views);
    _resetStyles();
    var padding = 250;
      if ($("#wrapper").hasClass("toggled-2"))
          padding = 50;
      _map.getView().fit(features[0].properties.geometry, {
          duration: 500,
          maxZoom: _map.getView().getZoom(),
          padding: [0, padding, 0, 0]
      });
  }
  var _resetStyles = function(){
    var allFeatures = _source.getFeatures();
    allFeatures.forEach(function (feature) {
      feature.highlighted = 0;
    });
    _map.getView().animate({zoom: _map.getView().getZoom()+0.0000001});
  }
  


  return {
    layer: _layer,
    handle: _handle,
    legend: _legend,
    highlightEqpt: _highlightEqpt,
    selection: _selection,
    resetStyle: _resetStyles,
  };

}());