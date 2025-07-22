function initVendeur() {
    // passage mode vendeur
    $('.menuidentification').hide();

    $('.identification').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('menuouvert');
        
        if ($(this).hasClass('menuouvert')) {
            $('.menuidentification').show();
        } else {
            $('.menuidentification').hide();
        }
    });

    if (localStorage.getItem("caisseconnectee") === 'ok') {
        $('.euro').attr('src', 'assets/images/icn_Encaissement_OK.svg');
    } else {
        $('.euro').attr('src', 'assets/images/icn_Encaissement_KO.svg');
    }

    $('.selectionvendeur').on('click', function (e) {
        e.preventDefault();

        localStorage.setItem("caisseconnectee", "ko");  
    }); 
}