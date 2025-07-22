function init() {
    // panier
    $('.jsboutonpanier').on('click', function (e) {
        e.preventDefault();
        $('.badgenumero').text('2');
    });

    $('.jscomparer3').on('click', function (e) {
        e.preventDefault();

        $('.jsproduit3').show();
        $('.jscomparer3').text('Retirer du comparatif');
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