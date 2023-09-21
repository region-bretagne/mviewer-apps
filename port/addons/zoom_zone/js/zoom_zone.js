//Variables pour les points à zoomer
const label1=mviewer.customComponents.zoom_zone.config.entities[0].label;
const coord1=mviewer.customComponents.zoom_zone.config.entities[0].coord;
const label2="Concarneau";
const coord2=[-436000,6084000];
const label3="Le Légué";
const coord3=[-302000,6195000];
const label4="Lorient";
const coord4=[-373000,6063000 ];
const label5="Saint-Malo";
const coord5=[-226000,6215000];



var zoom_zone = (function() {

    // plugin's config
    var config = mviewer.customComponents.zoom_zone.config;

    function initzoom_zone() {
        //attendre que mviewer.getMap().getLayers() soit disponible
        mviewer.getMap().once('rendercomplete', function(e) {

            //Création des boutons radio
            $('.mv-nav').append(
                "<div class='radioZone-bar'><input class='radioZone' type='radio' id='entite1' name='zone' value='entite1'><label for='entite1'>"+label1+"</label><input class='radioZone' type='radio' id='entite2' name='zone' value='entite2'><label for='entite2'>"+label2+"</label><input class='radioZone' type='radio' id='entite3' name='zone' value='entite3'><label for='entite3'>"+label3+"</label><input class='radioZone' type='radio' id='entite4' name='zone' value='entite4'><label for='entite4'>"+label4+"</label><input class='radioZone' type='radio' id='entite5' name='zone' value='entite5'><label for='entite5'>"+label5+"</label></div>"
            );

            $('.radioZone').on('click', function(e) {

                //applique le filtre à l'ensemble de la région
                if ($('#entite1').is(':checked')) {
                    //Récupérer le json qui sert de masque

                        var view = mviewer.getMap().getView();
                        var center = coord1;
                        view.animate({
                            center: center,
                            duration: 1500,
                            zoom: 14
                        });
                        view.animate({
                            zoom: zoom - zoom * 0.1,
                            duration: 1500 / 2
                        }, {
                            zoom: zoom - 0.5,
                            duration: 1500 / 2
                        });

                } else if ($('#entite2').is(':checked')) {
    
                        var view = mviewer.getMap().getView();
                        var center = coord2;
                        view.animate({
                            center: center,
                            duration: 1500,
                            zoom: 14
                        });
                        view.animate({
                            zoom: zoom - zoom * 0.1,
                            duration: 1500 / 2
                        }, {
                            zoom: zoom - 0.5,
                            duration: 1500 / 2
                        });

                } else if ($('#entite3').is(':checked')) {

                        var view = mviewer.getMap().getView();
                        var center = coord3;
                        view.animate({
                            center: center,
                            duration: 1500,
                            zoom: 14
                        });
                        view.animate({
                            zoom: zoom - zoom * 0.1,
                            duration: 1500 / 2
                        }, {
                            zoom: zoom - 0.5,
                            duration: 1500 / 2
                        });
                } else if ($('#entite4').is(':checked')) {

                        var view = mviewer.getMap().getView();
                        var center = coord4;
                        view.animate({
                            center: center,
                            duration: 1500,
                            zoom: 14
                        });
                        view.animate({
                            zoom: zoom - zoom * 0.1,
                            duration: 1500 / 2
                        }, {
                            zoom: zoom - 0.5,
                            duration: 1500 / 2
                        });
                } else if ($('#entite5').is(':checked')) {

                        var view = mviewer.getMap().getView();
                        var center = coord5;
                        view.animate({
                            center: center,
                            duration: 1500,
                            zoom: 14
                        });
                        view.animate({
                            zoom: zoom - zoom * 0.1,
                            duration: 1500 / 2
                        }, {
                            zoom: zoom - 0.5,
                            duration: 1500 / 2
                        });
                }
            });
        })
    }

    return {
        // trigger when plugin is loaded
        init: () => {
            initzoom_zone();
        },
        // get plugin config
        getConfig: () => config
    };

})();

new CustomComponent("zoom_zone", zoom_zone.init);