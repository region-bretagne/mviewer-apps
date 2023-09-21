const zoom_zone = (function() {

    // plugin's config
    var config = mviewer.customComponents.zoom_zone.config;

    function initzoom_zone() {
        //attendre que mviewer.getMap().getLayers() soit disponible
        mviewer.getMap().once('rendercomplete', function(e) {

            //Création des boutons radio
            $('.mv-nav').append(
                "<div class='radioZone-bar'><input class='radioZone' type='radio' id='AER_2901' name='zone' value='AER_2901'><label for='AER_2901'>Brest</label><input class='radioZone' type='radio' id='AER_3501' name='zone' value='AER_3501'><label for='AER_3501'>Dinard</label><input class='radioZone' type='radio' id='AER_2902' name='zone' value='AER_2902'><label for='AER_2902'>Quimper</label><input class='radioZone' type='radio' id='AER_3502' name='zone' value='AER_3502'><label for='AER_3502'>Rennes</label></div>"
            );

            //Associer un fichier de style
            $('head').append('<link rel="stylesheet" type="text/css" href="apps/region/aeroport/addons/zoom_zone/css/zoom_zone.css">');

            $('.radioZone').on('click', function(e) {

                //applique le filtre à l'ensemble de la région
                if ($('#AER_2901').is(':checked')) {
                    //Récupérer le json qui sert de masque

                        var view = mviewer.getMap().getView();
                        var center = [-491465,6181499];
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

                } else if ($('#AER_2902').is(':checked')) {
    
                        var view = mviewer.getMap().getView();
                        var center = [-462423,6103116 ];
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

                } else if ($('#AER_3501').is(':checked')) {

                        var view = mviewer.getMap().getView();
                        var center = [-230596,6205428];
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
                } else if ($('#AER_3502').is(':checked')) {

                        var view = mviewer.getMap().getView();
                        var center = [-192281,6118458];
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