function init() {
    if (localStorage.getItem("remiseeffectuee") === 'ok') {
        $('.emprix')[0].innerHTML = '972.99 €';
        $('.emtotalprix')[0].innerText = '972.99 €';
    } else {
        $('.emprix')[0].innerHTML = '992.99 €';
        $('.emtotalprix')[0].innerText = '992.99 €';
    }
    localStorage.setItem("remiseeffectuee", "ko");  

    $('.jsboutonretour').on('click', function (e) {
        e.preventDefault();

        window.location.href = './vendeur_index.html';
    }); 

    $('.emcbconteneur').hide();
    $('.paiementeffectuecontainer').hide();

    $('.emconteneur').on('click', function (e) {
        e.preventDefault();

        $('.emconteneur').hide();
        $('.emcbconteneur').show();
    });

    $('.emcbconteneur').on('click', function (e) {
        e.preventDefault();

        $('.emcbconteneur').hide();
        $('.paiementeffectuecontainer').show();
    });
}