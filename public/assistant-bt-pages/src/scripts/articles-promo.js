function init() {

    // ouvrir volet
    $('.table-row').on('click', function (e) {
        e.preventDefault();
        var id = $(this).attr('id');

        if (id == 'id_4710180841367') {
            fermerVoletArticle2();
            ouvrirVoletArticle1();
        } else if (id == 'id_3601029952201') {
            fermerVoletArticle1();
            ouvrirVoletArticle2();
        } else if (Math.floor(Math.random() * 100) < 50) {
            fermerVoletArticle2();
            ouvrirVoletArticle1();
        } else {
            fermerVoletArticle1();
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
}

var fermerVoletArticle1 = function () {
    $('.voletnavigationconteneur.jsvolet1').removeClass('voletouvert');
    $('#id_4710180841367').removeClass('selectionne');
};

var ouvrirVoletArticle1 = function () {
    $('.fauxvoletchargement').show();
    $('.fauxvoletchargement').addClass('voletouvert');

    $('.voletnavigationconteneur.jsvolet1').addClass('voletouvert');
    $('#id_4710180841367').addClass('selectionne');

    $('.voletnavigationconteneur.jsvolet1').hide();

    setTimeout(function () {
        $('.voletnavigationconteneur.jsvolet1').show();
        $('.fauxvoletchargement').hide();
        $('.fauxvoletchargement').removeClass('voletouvert');
    }, 1500);
};

var fermerVoletArticle2 = function () {
    $('.voletnavigationconteneur.jsvolet2').removeClass('voletouvert');
    $('#id_3601029952201').removeClass('selectionne');
};

var ouvrirVoletArticle2 = function () {
    $('.fauxvoletchargement').show();
    $('.fauxvoletchargement').addClass('voletouvert');

    $('.voletnavigationconteneur.jsvolet2').addClass('voletouvert');
    $('#id_3601029952201').addClass('selectionne');

    $('.voletnavigationconteneur.jsvolet2').hide();

    setTimeout(function () {
        $('.voletnavigationconteneur.jsvolet2').show();
        $('.fauxvoletchargement').hide();
        $('.fauxvoletchargement').removeClass('voletouvert');
    }, 1500);
};