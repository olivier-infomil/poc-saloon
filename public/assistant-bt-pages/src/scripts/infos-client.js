var fChampsRemplis = false;
var fRedevance = false;

function initInfosClient() {
    $('.redevanceconteneur').hide();

    // boutons radio
    $('.jscivilite').on('click', function (e) {
        e.preventDefault();

        $('.jscivilite').removeClass('estcochee');
        $(this).addClass('estcochee');

        if (!fChampsRemplis) {
            remplirChamps();
        }
    });

    $('.jsutilisation').on('click', function (e) {
        e.preventDefault();

        $('.jsutilisation').removeClass('estcochee');
        $(this).addClass('estcochee');
    });

    $('.jsnaissance').on('click', function (e) {
        e.preventDefault();

        $('.jsnaissance').removeClass('estcochee');
        $(this).addClass('estcochee');

        if (!fChampsRemplis) {
            remplirChamps();
        }
    });

    // choix mode recherche ou formulaire
    $('.typeclient .partieopacite').on('click', function (e) {
        e.preventDefault();

        $('.typeclient .partieopacite').addClass('masque');
        $(this).removeClass('masque');
    });

    // bouton suivant
    $('.jsboutonsuivant').on('click', function (e) {
        e.preventDefault();

        // if (!fRedevance) {
        //     $(this).addClass('desactive');
        //     $('.typeclientconteneur').hide();
        //     $('.redevanceconteneur').show();

        //     fRedevance = true;
        //     fChampsRemplis = false;
        // } else {
        //     window.location.href = './vendeur_livraison_creneaux.html';
        // }
        window.location.href = './vendeur_livraison_creneaux.html';
    });

    $('#searchClient').on('click', function (e) {
        e.preventDefault();

        setTimeout(function () {
            animerTexte($('#searchClient')[0], "Dubois");
        }, 300);

        setTimeout(function () {
            $('.jsnombreresultats').show();
            $('.jsresultats').show();
        }, 1000);
    });

    $('.jsclientselection').on('click', function (e) {
        e.preventDefault();

        $('.jsclientselection').addClass('selectionne');
        $('.jsformulaire.existant').show();
        $('.jsboutonsuivant').removeClass('desactive');
    });

    $('.jstitrenouveau').on('click', function (e) {
        e.preventDefault();

        $('.numero1 .titretypeonglet').removeClass('actif');
        $('.numero2 .titretypeonglet').addClass('actif');

        $('.jsboutonsuivant').addClass('desactive');

        $('.jschamprecherche').hide();
        $('.jsnombreresultats').hide();
        $('.jsresultats').hide();
        $('.jsformulaire.existant').hide();
        $('.jsformulaire.nouveau').show();
    });

    $('.creneau.libre').on('click', function (e) {
        $('.creneau.libre').removeClass('selectionne');
        $(this).addClass('selectionne');
        $('.jsboutonsuivantCrenau').removeClass('desactive');
    });
}

var remplirChamps = function () {
    if (!fRedevance) {
        setTimeout(function () {
            animerTexte($('#champ_prenom')[0], "Dominique");
        }, 100);

        setTimeout(function () {
            animerTexte($('#champ_nom')[0], "Martin");
        }, 1000);

        setTimeout(function () {
            animerTexte($('#champ_adresse')[0], "17 rue du bois fleuri, 31300 Toulouse");
            $('.jsboutonsuivant').removeClass('desactive');
        }, 2000);

        setTimeout(function () {
            animerTexte($('#champ_mail')[0], "dominique.martin@mail.com");
        }, 5000);

        setTimeout(function () {
            $('.jscheckboxemail').addClass('estcochee');
        }, 7500);

        fChampsRemplis = true;
    }  else {
        setTimeout(function () {
            animerTexte($('#champ_commune_naissance')[0], "Portet-sur-Garonne");
        }, 100);

        setTimeout(function () {
            animerTexte($('#champ_date_naissance')[0], "17/07/1985");
            $('.jsboutonsuivant').removeClass('desactive');
        }, 2000);

        fChampsRemplis = true;
    }
}

var animerTexte = function (elt, sTexte) {
    if (sTexte.length > 0) {
        elt.value = !!elt.value ? elt.value + sTexte[0] : sTexte[0];

        setTimeout(function () {
            animerTexte(elt, sTexte.substring(1));
        }, 80);
    }
};