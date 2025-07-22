function init() {
    // fermeture initiale des catégories et des filtres
    $('.titreextensible').removeClass('ouvert');
    $('.contenuextensible').hide();
    fermerFiltres();

    // ouverture / fermeture des catégories de filtres
    $('.titreextensible').on('click', function (e) {
        e.preventDefault();
        var titre = $(this);

        titre.toggleClass('ouvert');

        if ($(this).hasClass('ouvert')) {
            titre.next().show();
        } else {
            titre.next().hide();
        }
    });

    // bascule cases à cocher
    $('.checkboxcontainer').on('click', function (e) {
        e.preventDefault();
       $(this).toggleClass('estcochee'); 
    });

    // fermer filtres
    $('.voile').on('click', function (e) {
        e.preventDefault();
        fermerFiltres();
    });

    $('.filters .croixconteneur').on('click', function (e) {
        e.preventDefault();
        fermerFiltres();
    });

    $('.jsboutonfiltrer').on('click', function (e) {
        e.preventDefault();
        fermerFiltres();
    });

    // ouvrir filtres
    $('.boutonfiltres').on('click', function (e) {
        e.preventDefault();
        ouvrirFiltres();
    });

    // ouvrir volet
    $('.table-row').on('click', function (e) {
        e.preventDefault();
        ouvrirVoletArticle();
    });

    // fermer volet
    $('.voletnavigationconteneur .croixconteneur').on('click', function (e) {
        e.preventDefault();
        fermerVoletArticle();
    });

    // boutons commande
    $('.boutonquantite.plus').on('click', function (e) {
        e.preventDefault();
        $('.jsquantite').text('1');
        $('.boutonquantite.moins').removeClass('desactive');
        $('.textecommander').removeClass('desactive');
    });

    $('.jsstockrec').hide();

    $('.textecommander').on('click', function () {
        if ($('.jsquantite.emphase').text() == '1') {
            $('.jscommande').text('1 CAR (1 UVC)');
            $('.jsstockrec').show();
            $('.textecommander').addClass('desactive');
        }
    });
}

var fermerFiltres = function () {
    $('.voile').hide();
    $('.js-filters').removeClass('is-open');
};

var ouvrirFiltres = function () {
    $('.voile').show();
    $('.js-filters').addClass('is-open');
};

var fermerVoletArticle = function () {
    $('.voletnavigationconteneur').removeClass('voletouvert');
    $('.id_8806098424689').removeClass('selectionne');
};

var ouvrirVoletArticle = function () {
    $('.fauxvoletchargement').show();
    $('.fauxvoletchargement').addClass('voletouvert');

    $('.voletnavigationconteneur').addClass('voletouvert');
    $('.id_8806098424689').addClass('selectionne');

    $('.voletnavigationconteneur').hide();

    setTimeout(function () {
        $('.voletnavigationconteneur').show();
        $('.fauxvoletchargement').hide();
        $('.fauxvoletchargement').removeClass('voletouvert');
    }, 1500);
};