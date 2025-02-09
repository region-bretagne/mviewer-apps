const aerial = new ol.layer.Tile({
  source: new ol.source.TileWMS({
    url: "https://geobretagne.fr/geoserver/geobretagne/ows",
    params: { LAYERS: "mos", TILED: true, SRS: "EPSG:3857", STYLES: "geobretagne:mos_2021"},
    serverType: "geoserver",
  }),
});
//Classe qui etend la classe abstraite et decris le custom Layer
class Swipe extends CustomLayer {
  // Initialize the Custom Layer
  constructor(id, layer, legend, handle = false) {
    // Initialize CustomLayer superClass
    super(id, layer, legend, handle);
    // Define events on the Tile Layer
    aerial.on("prerender", function (event) {
      var ctx = event.context;
      var width = ctx.canvas.width * (swipe.value / 100);
      ctx.save();
      ctx.beginPath();
      ctx.rect(width, 0, ctx.canvas.width - width, ctx.canvas.height);
      ctx.clip();
    });
    // Define events on the Tile Layer
    aerial.on("postrender", function (event) {
      var ctx = event.context;
      ctx.restore();
    });
  }
}
// Create The Custom Layer
new Swipe("swipe", aerial);
