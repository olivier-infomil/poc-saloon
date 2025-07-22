function init() {
    // boutons commande
    $('.boutonquantite.plus').on('click', function (e) {
        e.preventDefault();

        if ($('.jsquantite.emphase').text() == '0') {
            $('.jsquantite').text('1');
            $('.textecommander').addClass('desactive');
            $('.boutonquantite.moins').removeClass('desactive');
        } else {
            $('.jsquantite').text('2');
            $('.textecommander').removeClass('desactive');
        }
        
    });

    $('.textecommander').on('click', function () {
        if ($('.jsquantite.emphase').text() == '2') {
            $('.jscommande').text('2 CAR (2 UVC)');
            $('.jsstockarecevoir').text('2');
            $('.textecommander').addClass('desactive');
        }
    });

    // zoom
    $('.photopleinecranconteneur').hide();

    $('.jsphoto').on('click', function (e) {
        e.preventDefault();

        $('.photopleinecranconteneur').show();
    });

    $('.photopleinecranconteneur .croixconteneur').on('click', function (e) {
        e.preventDefault();

        $('.photopleinecranconteneur').hide();
    }); 

    $('.jsvignette2zoom').on('click', function (e) {
        e.preventDefault();

        selectionnerImage2Zoom();
        selectionnerImage2();
    });

    $('.jsvignette1zoom').on('click', function (e) {
        e.preventDefault();

        selectionnerImage1Zoom();
        selectionnerImage1();
    });

    $('.photosuivante').on('click', function (e) {
        e.preventDefault();

        selectionnerImage2Zoom();
        selectionnerImage2();
    });

    $('.photoprecedente').on('click', function (e) {
        e.preventDefault();

        selectionnerImage1Zoom();
        selectionnerImage1();
    });

    // pas zoom
    $('.jsvignette2').on('click', function (e) {
        e.preventDefault();

        selectionnerImage2();
        selectionnerImage2Zoom();
    });

    $('.jsvignette1').on('click', function (e) {
        e.preventDefault();

        selectionnerImage1();
        selectionnerImage1Zoom();
    });

    $('.jsmonprix').on('click', function (e) {
        e.preventDefault();

        $('.jseditionprix').show();
    });

    $('.jsannulerprix').on('click', function (e) {
        e.preventDefault();

        $('.jseditionprix').hide();
    });

    $('.jssuivantprix').on('click', function (e) {
        e.preventDefault();

        $('.jseditionprix').hide();
        $('.jsverificationprix').show();
    });

    $('.jsprecedentprix').on('click', function (e) {
        e.preventDefault();

        $('.jsverificationprix').hide();
        $('.jseditionprix').show();
    });

    $('.jsvaliderprix').on('click', function (e) {
        e.preventDefault();

        $('.jsverificationprix').hide();
    });

    document.querySelector('.js-accordionTitle').addEventListener('click', function (e) {
        e.preventDefault();
        var accordionContent = e.target.parentElement.parentElement.querySelector('.js-accordionContent');
        var flecheHaut = e.target.querySelector('.flechehaut');
        var flecheBas = e.target.querySelector('.flechebas');
 
        accordionContent.classList.toggle('hidden');
        flecheHaut.classList.toggle('hidden');
        flecheBas.classList.toggle('hidden');
     });
}

var selectionnerImage1Zoom = function () {
    $('.jsphotozoom').attr('src', 'assets/images/fiche_tv5.png');
    $('.jsvignette1zoom').addClass('estselectionnee');
    $('.jsvignette2zoom').removeClass('estselectionnee');
    $('.photoprecedente').addClass('desactive');
    $('.photosuivante').removeClass('desactive');
};

var selectionnerImage2Zoom = function () {
    $('.jsphotozoom').attr('src', 'assets/images/fiche_tv6.png');
    $('.jsvignette1zoom').removeClass('estselectionnee');
    $('.jsvignette2zoom').addClass('estselectionnee');
    $('.photoprecedente').removeClass('desactive');
    $('.photosuivante').addClass('desactive');
};

var selectionnerImage1 = function () {
    $('.jsphoto').attr('src', 'assets/images/fiche_tv5.png');
    $('.jsvignette1').addClass('estselectionnee');
    $('.jsvignette2').removeClass('estselectionnee');
};

var selectionnerImage2 = function () {
    $('.jsphoto').attr('src', 'assets/images/fiche_tv6.png');
    $('.jsvignette1').removeClass('estselectionnee');
    $('.jsvignette2').addClass('estselectionnee');
};