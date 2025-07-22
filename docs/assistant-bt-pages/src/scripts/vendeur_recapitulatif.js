var fRemiseEffectuee = false;

function initRecap() {

    // voir plus / voir moins
    $('.boutonvoirplus').on('click', function (e) {
        e.preventDefault();    

        $('.voirplus').toggleClass('ouvert');

        if ($('.voirplus').hasClass('ouvert')) {
            $('.remise').show();
            // $('.totalremise').show();
            $('.textevoirplus').text('Voir moins');
        } else {
            $('.remise').hide();
            $('.totalremise').hide();
            $('.textevoirplus').text('Voir plus');
        }
    });

    $('.remise').hide();
    $('.totalremise').hide();
    $('.jsmontantremise').hide();

    // application remise
    $('.inputremise').on('click', function (e) {
        e.preventDefault();

        setTimeout(function () {
            $('.jsvaleurinputremise')[0].value = '20';
            document.querySelector('.js-btnValiderRemise').classList.remove('desactive');
            $('.motifremisetexte').html('Remise mod&egrave;le exposition');
        }, 100);        
    });

    // validation remise
    $('.js-btnValiderRemise').on('click', function (e) {
        e.preventDefault();

        $('.boutonvoirplus').css('opacity', '0');
        $('.jsmontantremise').show();
        $('.jsprixtotalremise').text('972,99');
        $('.jsunitestotal').text('972');
        $('.jsquantite').text('972');
        $('.totalremise').show();
        localStorage.setItem("remiseeffectuee", "ok");
        e.currentTarget.classList.add('no-touch');
        document.querySelector('.doubleCol').classList.add('invisible');
        $('.motifremise').hide();
        document.querySelector('.motifremiseconteneur h4').innerHTML = "Motif de remise : Remise mod&egrave;le exposition";
        document.querySelector('.js-btnValiderRemise').innerHTML = "Supprimer la remise";
    });
    
    

    // validation
    $('.jsboutonvalider').on('click', function (e) {
        e.preventDefault();

        $('.messageerreur').show();
    });

    $('.messageerreur').on('click', function (e) {
        e.preventDefault();

        $('.messageerreur').hide();
    });

    // encaissement mobile
    $('.jsboutonpoursuivre').on('click', function (e) {
        e.preventDefault();

        $('.messageerreur').hide();
        window.location.href = './vendeur_paiement.html';
    });

    /**
    $('#jsticketclient').on('click', function (e) {
        e.preventDefault();

        $('.encaissementbackground.ticketclient').hide();
        $('.encaissementbackground.paiementclient').show();
    });

    $('#jsmodepaiement').on('click', function (e) {
        e.preventDefault();

        $('.encaissementbackground.paiementclient').hide();
        $('.encaissementbackground.cbclient').show();
    });   
    
    $('#jsclientpaiement').on('click', function (e) {
        e.preventDefault();

        $('.encaissementbackground.cbclient').hide();
        window.location.href = './vendeur_paiement.html';
    }); */

    $('.jschoixcommentaires').on('click', function (e) {
        e.preventDefault();
        $('.listecommentaires').show();
    });
}