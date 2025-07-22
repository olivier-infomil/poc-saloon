function initFiltre() {
    $('#filtreintermediaire').hide();
    $('#apresfiltre').hide();
    $('.jstotalapresfiltre').hide();

    $('.jsfiltrestock').on('click', function (e) {
        e.preventDefault();

        $('#avantfiltre').hide();
        $('#filtreintermediaire').hide();
        $('#apresfiltre').show();

        $('.jsdesignation').removeClass('colonnetriee');
        $('.jsfiltrestock').addClass('colonnetriee');
    });

    $('.jsdesignation').on('click', function (e) {
        e.preventDefault();

        $('#avantfiltre').hide();
        $('#filtreintermediaire').show();
        $('#apresfiltre').hide();

        $('.jsdesignation').addClass('colonnetriee');
        $('.jsfiltrestock').removeClass('colonnetriee');
    });

    $('.jsboutonfiltrer').on('click', function (e) {
        e.preventDefault();

        $('#avantfiltre').hide();
        $('#filtreintermediaire').show();
        $('#apresfiltre').hide();

        $('.jstotalavantfiltre').hide();
        $('.jstotalapresfiltre').show();

        $('.jsdesignation').addClass('colonnetriee');
        $('.jsfiltrestock').removeClass('colonnetriee');
    });
}

function dejaFiltre() {
    $('#avantfiltre').hide();
    $('#filtreintermediaire').show();
    $('#apresfiltre').hide();

    $('.jstotalavantfiltre').hide();
    $('.jstotalapresfiltre').show();

    $('.jsdesignation').addClass('colonnetriee');
    $('.jsfiltrestock').removeClass('colonnetriee');
}