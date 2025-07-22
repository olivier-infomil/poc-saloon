function initPanier() {
    $('.jsboutoncheckbox').on('click', function (e) {
        e.preventDefault();

        $(this).toggleClass('estcochee');

        if ($(this).hasClass('estcochee')) {
            $('.jsextension').hide();
            $('.jsextensionprix').show();
            $('.jsprixtotal').text('977');
        } else {
            $('.jsextension').show();
            $('.jsextensionprix').hide();
            $('.jsprixtotal').text('878');
        }
    });

    $('.jsextensionprix').hide();

    $('.jsboutonradio.groupe1 .radioconteneur').on('click', function (e) {
        e.preventDefault();

        $('.jsboutonradio.groupe1 .radioconteneur').removeClass('estcochee');
        $(this).toggleClass('estcochee');
    });

    $('.jsboutonradio.groupe2 .radioconteneur').on('click', function (e) {
        e.preventDefault();

        $('.jsboutonradio.groupe2 .radioconteneur').removeClass('estcochee');
        $(this).toggleClass('estcochee');
    });

    $('.jsboutoncreneaux').on('click', function (e) {
        e.preventDefault();

        $('.jsdialoguecreneaux').show();
    });

    $('.jsiconecroix').on('click', function (e) {
        e.preventDefault();

        $('.jsdialoguecreneaux').hide();
        $('.bullecreneau').hide();
    });

    $('.jslivraison').on('click', function (e) {
        e.preventDefault();

        $('.jsmodelivraison').removeClass('desactive');
        $('.jsfraislivraison').show();
    });

    $('.jsfrais').on('click', function (e) {
        e.preventDefault();

        $('.jsfraisprix').text('15');
        $('.jsprixtotal').text('992');
    });

    $('.jschoixlivraison').on('click', function (e) {
        e.preventDefault();

        if ($('.jschoixlivraisonconteneur').hasClass('ouvert')) {
            $('.jschoixlivraisonconteneur').removeClass('ouvert');
            $('.jsmenulivraison').hide();
        } else {
            $('.jschoixlivraisonconteneur').addClass('ouvert');
            $('.jsmenulivraison').show();
        }
    });

    $('.jsmenulivraison .choixmenu').on('click', function (e) {
        e.preventDefault();

        $('.jschoixlivraisonconteneur').removeClass('ouvert');
        $('.jsmenulivraison').hide();
    });

    $('.jschoixlivraisonemporter').on('click', function (e) {
        e.preventDefault();

        if ($('.jschoixlivraisonemporterconteneur').hasClass('ouvert')) {
            $('.jschoixlivraisonemporterconteneur').removeClass('ouvert');
            $('.jsmenulivraisonemporter').hide();
        } else {
            $('.jschoixlivraisonemporterconteneur').addClass('ouvert');
            $('.jsmenulivraisonemporter').show();
        }
    });

    $('.jsmenulivraisonemporter .choixmenu').on('click', function (e) {
        e.preventDefault();

        $('.jschoixlivraisonemporterconteneur').removeClass('ouvert');
        $('.jsmenulivraisonemporter').hide();
    });

    $('.jschoixlivraisonemporter2').on('click', function (e) {
        e.preventDefault();

        if ($('.jschoixlivraisonemporterconteneur2').hasClass('ouvert')) {
            $('.jschoixlivraisonemporterconteneur2').removeClass('ouvert');
            $('.jsmenulivraisonemporter2').hide();
        } else {
            $('.jschoixlivraisonemporterconteneur2').addClass('ouvert');
            $('.jsmenulivraisonemporter2').show();
        }
    });

    $('.jsmenulivraisonemporter2 .choixmenu').on('click', function (e) {
        e.preventDefault();

        $('.jschoixlivraisonemporterconteneur2').removeClass('ouvert');
        $('.jsmenulivraisonemporter2').hide();
    });

    $('.creneaupris').on('click', function (e) {
        e.preventDefault();

        $('.bullecreneau')[0].style.top = e.clientY + 'px';
        $('.bullecreneau')[0].style.left = e.clientX + 'px';
        $('.bullecreneau').show();
    });

    $('.jsiconecroixbulle').on('click', function (e) {
        e.preventDefault();

        $('.bullecreneau').hide();
    });
}