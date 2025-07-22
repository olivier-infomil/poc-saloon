function initComparatif() {
    // panier
    $('.jsboutonpanier').on('click', function (e) {
        e.preventDefault();
        $('.badgenumero').text('2');
    });

    $('.jsswitch').on('click', function (e) {
        e.preventDefault();

        var fChecked = $('.jsswitch input')[0].checked;

        if (fChecked) {
            $('.jsswitch input')[0].checked = false;

            setTimeout(function () {
                $('.jsavantfiltre').show();
                $('.jsapresfiltre').hide();
            }, 300);
        } else {
            $('.jsswitch input')[0].checked = true;

            setTimeout(function () {
                $('.jsavantfiltre').hide();
                $('.jsapresfiltre').show();
            }, 300);
        }
        
    });
}