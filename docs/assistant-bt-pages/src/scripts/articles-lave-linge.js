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

    // ouvrir filtres
    $('.boutonfiltres').on('click', function (e) {
        e.preventDefault();
        ouvrirFiltres();
    });

    // ouvrir volet
    $('.table-row').on('click', function (e) {
        e.preventDefault();
        var id = $(this).attr('id');

        if (id == 'id_8690842276484') {
            fermerVoletArticle2();
            fermerVoletArticle3();
            ouvrirVoletArticle1();
        } else if (id == 'id_3660767953772') {
            fermerVoletArticle1();
            fermerVoletArticle3();
            ouvrirVoletArticle2();
        } else if (id == 'id_8016361915329') {
            fermerVoletArticle1();
            fermerVoletArticle2();
            ouvrirVoletArticle3();
        } else if (Math.floor(Math.random() * 100) < 50) {
            fermerVoletArticle2();
            fermerVoletArticle3();
            ouvrirVoletArticle1();
        } else {
            fermerVoletArticle1();
            fermerVoletArticle3();
            ouvrirVoletArticle2();
        }
        
    });

    // fermer volet
    $('.voletnavigationconteneur.jsvolet1 .croixconteneur').on('click', function (e) {
        e.preventDefault();
        fermerVoletArticle1();
    });

    $('.voletnavigationconteneur.jsvolet2 .croixconteneur').on('click', function (e) {
        e.preventDefault();
        fermerVoletArticle2();
    });

    $('.voletnavigationconteneur.jsvolet3 .croixconteneur').on('click', function (e) {
        e.preventDefault();
        fermerVoletArticle3();
    });

    $('.jspoigneeapres').hide();

    $('.jspoigneeavant .nstSlider').on('click', function () {
        $('.jspoigneeavant').hide();
        $('.jspoigneeapres').show();
    });

    // comparatif
    $('.jscomparer1').on('click', function (e) {
        e.preventDefault();

        $('.jscomparatif').show();
        $('.jspageconteneur').addClass('aveccomparatif');
        $('.jscomparer1').text('Retirer du comparatif');

        $('.jsproduit1').show();
    });

    $('.jscomparer2').on('click', function (e) {
        e.preventDefault();

        $('.jsproduit2').show();
        $('.jsboutonvalider').removeClass('desactive');
        $('.jscomparer2').text('Retirer du comparatif');
    });

    // filtres
    $('.jstableapresfiltre').hide();
    $('.jstotalapresfiltre').hide();

    $('.jsboutonfiltrer').on('click', function (e) {
        e.preventDefault();
        $('.jstableavantfiltre').hide();
        $('.jstableapresfiltre').show();
        fermerFiltres();

        $('.jstotalavantfiltre').hide();
        $('.jstotalapresfiltre').show();
    });

    // ajouter panier
    $('.jsvolet2 .commandearticleconteneur').on('click', function (e) {
        e.preventDefault();

        fermerVoletArticle2();
        $('.badgenumero').text('2');
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

var fermerVoletArticle1 = function () {
    $('.voletnavigationconteneur.jsvolet1').removeClass('voletouvert');
    $('#id_8690842276484').removeClass('selectionne');
};

var ouvrirVoletArticle1 = function () {
    $('.fauxvoletchargement').show();
    $('.fauxvoletchargement').addClass('voletouvert');

    $('.voletnavigationconteneur.jsvolet1').addClass('voletouvert');
    $('#id_8690842276484').addClass('selectionne');

    $('.voletnavigationconteneur.jsvolet1').hide();

    setTimeout(function () {
        $('.voletnavigationconteneur.jsvolet1').show();
        $('.fauxvoletchargement').hide();
        $('.fauxvoletchargement').removeClass('voletouvert');
    }, 1500);
};

var fermerVoletArticle2 = function () {
    $('.voletnavigationconteneur.jsvolet2').removeClass('voletouvert');
    $('#id_3660767953772').removeClass('selectionne');
};

var ouvrirVoletArticle2 = function () {
    $('.fauxvoletchargement').show();
    $('.fauxvoletchargement').addClass('voletouvert');

    $('.voletnavigationconteneur.jsvolet2').addClass('voletouvert');
    $('#id_3660767953772').addClass('selectionne');

    $('.voletnavigationconteneur.jsvolet2').hide();

    setTimeout(function () {
        $('.voletnavigationconteneur.jsvolet2').show();
        $('.fauxvoletchargement').hide();
        $('.fauxvoletchargement').removeClass('voletouvert');
    }, 1500);
};

var fermerVoletArticle3 = function () {
    $('.voletnavigationconteneur.jsvolet3').removeClass('voletouvert');
    $('#id_8016361915329').removeClass('selectionne');
};

var ouvrirVoletArticle3 = function () {
    $('.fauxvoletchargement').show();
    $('.fauxvoletchargement').addClass('voletouvert');

    $('.voletnavigationconteneur.jsvolet3').addClass('voletouvert');
    $('#id_8016361915329').addClass('selectionne');

    $('.voletnavigationconteneur.jsvolet3').hide();

    setTimeout(function () {
        $('.voletnavigationconteneur.jsvolet3').show();
        $('.fauxvoletchargement').hide();
        $('.fauxvoletchargement').removeClass('voletouvert');
    }, 1500);
};