function init() {
    // panier
    $('.jsboutonpanier').on('click', function (e) {
        e.preventDefault();
        $('.badgenumero').text('2');
    });

    $('#jsconnexioncaisse').on('click', function (e) {
        e.preventDefault();

        $('#jsconnexioncaisse').hide();
        $('#jscaisseconnectee').show();

        // set icon
        localStorage.setItem("caisseconnectee", "ok");  
        $('.euro').attr('src', 'assets/images/icn_Encaissement_OK.svg');

        // set text
        $('.caisseouverte').attr('src', 'assets/images/check.svg');
        $('.caisseouvertetitre').text('Caisse Evolutel ouverte');
        $('.caisseouvertevaleur').text('La caisse Evolutel est ouverte.');
    }); 

    $('#jscaisseconnectee').on('click', function (e) {
        e.preventDefault();

        window.location.href = './vendeur_index.html';
    }); 

    if (localStorage.getItem("caisseconnectee") === 'ok') {
        $('#jsconnexioncaisse').hide();
        $('#jscaisseconnectee').show();

        // set text
        $('.caisseouverte').attr('src', 'assets/images/check.svg');
        $('.caisseouvertetitre').text('Caisse Evolutel ouverte');
        $('.caisseouvertevaleur').text('La caisse Evolutel est ouverte.');
    }
}