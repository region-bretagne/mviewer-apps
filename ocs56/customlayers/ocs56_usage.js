{
mviewer.customLayers.ocs56_usage = {};
mviewer.customLayers.ocs56_usage.classification_usage = {};
mviewer.customLayers.ocs56_usage.classification_usage.a = {
        "US1%":{"title":"Production primaire","fill":"#ffffa8","stroke":"#fd6270"},
        "US2%":{"title":"Production secondaire, tertiaire et usage résidentiel","fill":"#cc0000"},
        "US3%":{"title":"Production secondaire, tertiaire et usage résidentiel","fill":"#cc0000"},
        "US4%":{"title":"Autre usage","fill":"#e6004d"},
        "US5%":{"title":"Production secondaire, tertiaire et usage résidentiel","fill":"#e6004d"},
        "US6%":{"title":"Autre usage","fill":"#ff4dff"}
};
mviewer.customLayers.ocs56_usage.classification_usage.b = {
        "US1?1%":{"title":"Agriculture","fill":"#ffffa8"},
        "US1?2%":{"title":"Sylviculture","fill":"#008000"},
        "US1?3%":{"title":"Activités d'extraction","fill":"#78de41"},
        "US1?4%":{"title":"Pêche et aquaculture","fill":"#000099"},
        "US1?5%":{"title":"Autre","fill":"#e0967e"},
        "US2.123":{"title":"Industrie","fill":"#a42424"},
        "US2?4%":{"title":"Production d'énergie","fill":"#e04f3c"},
        "US2?5%":{"title":"Autres Industries","fill":"#ffcc00"},
        "US3?1%":{"title":"Commerce","fill":"#b18acc"},
        "US3?2%":{"title":"Finance et information/communication","fill":"#894465"},
        "US3?4%":{"title":"Loisirs, culturels…","fill":"#ffbee8"},
        "US3?5%":{"title":"Autres services","fill":"#cd6699"},
        "US4?1%":{"title":"Réseaux de transport","fill":"#cc0000"},
        "US4?2%":{"title":"Services logistiques et de stockage","fill":"#5a5e6b"},
        "US4?3%":{"title":"Réseaux d'utilité publique","fill":"#83a697"},
        "US5?1%":{"title":"Usage résidentiel permanent","fill":"#ff0000"},
        "US5?2%":{"title":"Usage résidentiel mixé à d'autres usages compatibles","fill":"#ff0000"},
        "US5?3%":{"title":"Autre usage résidentiel","fill":"#fd6270"},
        "US6?1%":{"title":"Zones de transition (ou de construction)","fill":"#e9d6d2"},
        "US6?2%":{"title":"Zone abandonnée (friche)","fill":"#842e1b"},
        "US6?3%":{"title":"Sans usages","fill":"#a98c78"},
        "US6?4%":{"title":"Inconnu","fill":"#503737"}
};
mviewer.customLayers.ocs56_usage.classification_usage.c = {
        "US1.1.1.1":{"title":"Pâturage","fill":"#a6ff8a"},
        "US1.1.1.2":{"title":"Elevage","fill":"#a6ff8a"},
        "US1.1.1.3":{"title":"Culture","fill":"#a6ff8a",},
        "US1.1.2.1":{"title":"Stockage","fill":"#ffff99"},
        "US1.1.2.2":{"title":"Elevage","fill":"#ffff99"},
        "US1.1.2.3":{"title":"Autres","fill":"#ffff99"},
        "US1.2":{"title":"Sylviculture","fill":"#008000"},
        "US1.3":{"title":"Activités d'extraction","fill":"#78de41"},
        "US1.5":{"title":"Autre","fill":"#e0967e"},
        "US1.1.3":{"title":"Autoconsommation","fill":"#dad6bf"},
        "US1.4.1":{"title":"Aquaculture","fill":"#7dc5ff"},
        "US1.4.2":{"title":"Pêcherie","fill":"#00ccf2"},
        "US2.123":{"title":"Industrie","fill":"#a42424"},
        "US2.4":{"title":"Production d'énergie","fill":"#e04f3c"},
        "US2.5":{"title":"Autres Industries","fill":"#ffcc00"},
        "US3.1":{"title":"Commerce","fill":"#b18acc"},
        "US3.23.1":{"title":"Finance, information, communication","fill":"#894465"},
        "US3.23.2":{"title":"Finance et information/communication","fill":"#894465"},
        "US3.4":{"title":"Loisirs, culturels…","fill":"#ffbee8"},
        "US3.5":{"title":"Autres services","fill":"#cd6699"},
        "US4.1.1":{"title":"Transport routier","fill":"#ff2c29"},
        "US4.1.2":{"title":"Transport ferrovière","fill":"#6d071a"},
        "US4.1.3":{"title":"Aérien","fill":"#bec9e8"},
        "US4.1.4":{"title":"Fluvial et maritime","fill":"#297fed"},
        "US4.1.5":{"title":"Autre","fill":"#343434"},
        "US4.2":{"title":"Services logistiques et de stockage","fill":"#5a5e6b"},
        "US4.3":{"title":"Réseaux d'utilité publique","fill":"#83a697"},
        "US5.1.1":{"title":"Individuel","fill":"#fd6270"},
        "US5.1.2":{"title":"Collectif","fill":"#fd6270"},
        "US5.2.1":{"title":"Individuel","fill":"#fd6270"},
        "US5.2.2":{"title":"Collectif","fill":"#fd6270"},
        "US5.3":{"title":"Autre usage résidentiel","fill":"#fd6270"},
        "US6.1":{"title":"Zones de transition (ou de construction)","fill":"#e9d6d2"},
        "US6.2":{"title":"Zone abandonnée (friche)","fill":"#842e1b"},
        "US6.3":{"title":"Sans usages","fill":"#a98c78"},
        "US6.4":{"title":"Inconnu","fill":"#503737"}
    };



mviewer.customLayers.ocs56_usage.style0 = function (feature, resolution) {
    var level = "";
    var ref = "";
    var val = feature.get("usage");
    if (resolution > 76) {
            level = "a";
            ref = val.substring(0,3)+"%";
    } else if (resolution > 38) {
            level = "b";
            if (val !== "US2.123") {
                ref = val.substr(0,3)+"?"+val.substr(4,1)+"%";
            } else {
                ref = val;
            }
    } else {
			level = "d";
            ref = val;
	}
    var style;
    if (mviewer.customLayers.ocs56_usage.classification_usage[level][ref]) {
        feature.getProperties()["label"] = mviewer.customLayers.ocs56_usage.classification_usage[level][ref].title;
        style = new ol.style.Style({
            fill: new ol.style.Fill({
              color: mviewer.customLayers.ocs56_usage.classification_usage[level][ref].fill
            }),
            stroke: new ol.style.Stroke({
              color: mviewer.customLayers.ocs56_usage.classification_usage[level][ref].fill,
              width: 0
            })
        });
    } else {
        console.log(ref, val);
        style = new ol.style.Style();
    }
    return style;
};


mviewer.customLayers.ocs56_usage.layer = new ol.layer.VectorTile({
      style:  mviewer.customLayers.ocs56_usage.style0,
      minResolution: 2,
      maxResolution: 306,
      source: new ol.source.VectorTile({
        tilePixelRatio: 1, // oversampling when > 1
        tileGrid: ol.tilegrid.createXYZ({maxZoom: 20}),
        format: new ol.format.MVT(),
        url: 'https://ows.region-bretagne.fr/geoserver/gwc/service/tms/1.0.0/rb:ocs56_origine@EPSG%3A3857@pbf/{z}/{x}/{-y}.pbf'
      })
});
mviewer.customLayers.ocs56_usage.handle = false;
}
