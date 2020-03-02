mviewer.customLayers.eqpts = (function () {


  var _legend = {
    items: []
  };


  var _gymnase = new ol.style.Style({
    image: new ol.style.RegularShape({
      fill: new ol.style.Fill({
        color: 'rgba(127, 143, 166,1.0)'
      }),
      stroke: new ol.style.Stroke({
        color: "#ededed",
        width: 3
      }),
      points: 5,
      radius: 13,
      radius2: 6,
      angle: 0
    })
  });
  var _piscine = new ol.style.Style({
    image: new ol.style.RegularShape({
      fill: new ol.style.Fill({
        color: 'rgba(0, 168, 255,1.0)'
      }),
      stroke: new ol.style.Stroke({
        color: "#ededed",
        width: 3
      }),
      points: 5,
      radius: 13,
      radius2: 6,
      angle: 0
    })
  });

  var _stade = new ol.style.Style({
    image: new ol.style.RegularShape({
      fill: new ol.style.Fill({
        color: 'rgba(68, 189, 50,1.0)'
      }),
      stroke: new ol.style.Stroke({
        color: "#ededed",
        width: 3
      }),
      points: 5,
      radius: 13,
      radius2: 6,
      angle: 0
    })
  });
  var _complexe = new ol.style.Style({
    image: new ol.style.RegularShape({
      fill: new ol.style.Fill({
        color: 'rgba(232, 65, 24,1.0)'
      }),
      stroke: new ol.style.Stroke({
        color: "#ededed",
        width: 3
      }),
      points: 5,
      radius: 13,
      radius2: 6,
      angle: 0
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
    var type = 'Normal';
    var maxResolution = 4;
    var text = feature.get('nom');

    if (resolution > maxResolution) {
        text = '';
    } else if (type == 'hide') {
        text = '';
    } else if (type == 'shorten') {
        text = text.truncate(12);
    } else if (type == 'wrap') {
        text = text.divide(16, '\n');
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
  var _layer = new ol.layer.Vector({
    source: _source,
    style: function (feature, resolution) {
      var stl;
      if (feature.get("type") === 'piscine') {
        stl = _piscine.clone();
      } else if (feature.get("type").substr(0,feature.get("type").indexOf(" ")) === "stade" || feature.get("type") === "stade") {
        stl = _stade.clone();
      } else if (feature.get("type") === "complexe") {
        stl = _complexe.clone();
      } else {
        stl = _gymnase.clone();
      }
      stl.setText(createTextStyle(feature, resolution));
      return [stl];
    }
  });
  var _getBaseStyle = function(feature){
      var stl;
      var type=feature.get("type");
      if (type === 'piscine') {
        stl = _piscine;
      } else if (type.substr(0,type.indexOf(" ")) === "stade" || type === "stade") {
        stl = _stade;
      } else if (type === "complexe") {
        stl = _complexe;
      } else {
        stl = _gymnase;
      }
      return stl;
  }
  var _selection = function (rne) {
    var features = _source.getFeatures();
    features.forEach(function (feature) {
      var usages = JSON.parse(feature.getProperties()["usages"]);
      var stl = _getBaseStyle(feature);
      usages.every(function (item) {
        if (item === rne) {
          stl.getImage().getStroke().setColor("#FF1493");
          feature.setStyle(stl.clone());
          return false;
        } else {
          feature.setStyle(stl);
        }
        return true;
      });
    });
  };
  var _highlightEqpt = function(eqptId) {
    var features =_source.getFeatures();
    features.forEach(function (feature) {
      var stl = _getBaseStyle(feature).clone();
      if(feature.get("code")==eqptId){
        stl.getImage().getStroke().setColor("#FF0000");
        feature.setStyle(stl.clone());
        var padding = 250;
        if ($("#wrapper").hasClass("toggled-2"))
            padding = 50;
        _map.getView().fit(feature.getGeometry(), {
          duration: 500,
          maxZoom: _map.getView().getZoom(),
          padding: [0, padding, 0, 0]
        });
      }
      else if(feature.getStyle().getImage().getStroke().getColor()=="#FF0000"){
        stl.getImage().getStroke().setColor("#FF1493");
        feature.setStyle(stl.clone());
        
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
    console.log();
    var allFeatures = _source.getFeatures();
    allFeatures.forEach(function (feature) {
      var stl = _getBaseStyle(feature);
      stl.setText(createTextStyle(feature, _map.getView().getResolution()));
      feature.setStyle(stl.clone());
    });
    var padding = 250;
      if ($("#wrapper").hasClass("toggled-2"))
          padding = 50;
      _map.getView().fit(features[0].properties.geometry, {
          duration: 500,
          maxZoom: _map.getView().getZoom(),
          padding: [0, padding, 0, 0]
      });
  }


  return {
    layer: _layer,
    handle: _handle,
    legend: _legend,
    highlightEqpt: _highlightEqpt,
    selection: _selection
  };

}());