mviewer.customLayers.eqpts = (function () {


    var _legend = { items: [] };
    
    
    var _stylePrive = [new ol.style.Style({
        image: new ol.style.Circle({
            fill: new ol.style.Fill({
                color: 'rgba(99, 110, 114,1.0)'
            }),
            stroke: new ol.style.Stroke({
                color: "#ffffff",
                width: 3
            }),
            radius: 9
        })
    })];
    
    var _o = [new ol.style.Style({
        image: new ol.style.Circle({
            fill: new ol.style.Fill({
                color: 'rgba(110, 42, 114,1.0)'
            }),
            stroke: new ol.style.Stroke({
                color: "#ff0000",
                width: 4
            }),
            radius: 9
        })
    })];
    var _piscine = [new ol.style.Style({
        image: new ol.style.Circle({
            fill: new ol.style.Fill({
                color: 'rgba(78, 197, 241,1.0)'
            }),
            stroke: new ol.style.Stroke({
                color: "#ededed",
                width: 3
            }),
            radius: 9
        })
    })];
    var _stade = [new ol.style.Style({
        image: new ol.style.Circle({
            fill: new ol.style.Fill({
                color: 'rgba(13, 242, 200,1.0)'
            }),
            stroke: new ol.style.Stroke({
                color: "#ededed",
                width: 3
            }),
            radius: 9
        })
    })];
    var _complexe = [new ol.style.Style({
        image: new ol.style.Circle({
            fill: new ol.style.Fill({
                color: 'rgba(247, 255, 10,1.0)'
            }),
            stroke: new ol.style.Stroke({
                color: "#ededed",
                width: 3
            }),
            radius: 9
        })
    })];
    
    _legend.items.push({styles:_piscine, label: "Piscines", geometry: "Point"});
    _legend.items.push({styles:_stade, label: "Stades", geometry: "Point"});
    _legend.items.push({styles:_stylePrive, label: "Gymnases", geometry: "Point"});
    _legend.items.push({styles:_complexe, label: "Complexes", geometry: "Point"});
    
    var _source = new ol.source.Vector({
        url: "apps/region/equipements/eqpts.geojson",
        format: new ol.format.GeoJSON()
    });
    
    var _layer = new ol.layer.Vector({
            source: _source,
            style: function(feature,resolution) {
                var stl;
                if(feature.get("type d'équipement") === 'piscine') {
                    stl = _piscine;
                } else if(feature.get("type d'équipement").substr(0,feature.get("type d'équipement").indexOf(" ")) === "stade" || feature.get("type d'équipement") === "stade"){
                    stl=_stade;
                } else if(feature.get("type d'équipement") === "complexe"){
                    stl=_complexe;
                } else {
                    stl = _stylePrive;
                }
                return stl;
            }
    });
    
    var _selection = function(rne) {
        var features = _source.getFeatures();
        features.forEach(function(feature){
    
            if (feature.getProperties()["usage lycée"] === rne) {
                console.log(feature);
                feature.setStyle(_o);
            }else if(feature.get("type d'équipement") === 'piscine') {
                feature.setStyle(_piscine);
            } else if(feature.get("type d'équipement").substr(0,feature.get("type d'équipement").indexOf(" ")) === "stade" || feature.get("type d'équipement") === "stade"){
                feature.setStyle(_stade);
            } else if(feature.get("type d'équipement") === "complexe"){
                feature.setStyle(_complexe);
            } else {
                feature.setStyle(_stylePrive);
            }
    
        });
    
    };
    
    
    return {
            layer: _layer,
            handle: false,
            legend: _legend,
            selection: _selection
        };
    
    }());
    