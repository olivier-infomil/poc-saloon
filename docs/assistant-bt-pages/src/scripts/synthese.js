function init() {
    // Menu
    $('.jsvolettv').hide();
    $('.jschevronmicroinfo').hide();
    $('.jsvoletmicroinfo').hide();
    $('.jschevrontv').hide();
    $('.voletconteneur').hide();

    $('.jsmenutv').on('click', function (e) {
        e.preventDefault();
        ouvrirMenuTV();
    });

    $('.jsmenumicroinfo').on('click', function (e) {
        e.preventDefault();
        ouvrirMenuMicroInfo();
    });

    $('.burgerconteneur').on('click', function (e) {
        e.preventDefault();
        $('.js-headerMenu').toggleClass('is-open');

        if ($('.js-headerMenu').hasClass('is-open')) {
            $('.voletconteneur').show();
        } else {
            $('.voletconteneur').hide();
        }
    });

    // champ recherche
    $('.voilenoirrecherche').hide();

    $('.rechercheconteneur').on('click', function (e) {
        e.preventDefault();
        $(this).addClass('estSelectionne');
        $('.voilenoirrecherche').show();
        $('.rechercheicone').hide();
    });

    $('.voilenoirrecherche').on('click', function (e) {
        e.preventDefault();
        $('.rechercheconteneur').removeClass('estSelectionne');
        $(this).hide();
        $('.rechercheicone').show();
    });
	
	$('.logoassistant').on('click', function (e) {
		openFullscreen();
    });
	
    if(document.querySelector('.js-yesterday')){
        setYesterdayDate();
    }
}

function setYesterdayDate() {
    var today = new Date();

    var yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
  
    var day = yesterday.getDate();
    var month = yesterday.getMonth() + 1;
    var year = yesterday.getFullYear() % 100;
  
    var formattedDay = (day < 10 ? '0' : '') + day;
    var formattedMonth = (month < 10 ? '0' : '') + month;
    var formattedYear = (year < 10 ? '0' : '') + year;
  
    var formattedDate = formattedDay + '/' + formattedMonth + '/' + formattedYear;

    document.querySelector('.js-yesterday').innerHTML = formattedDate;
}

var elem = document.documentElement;

var openFullscreen = function () {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
};

var ouvrirMenuTV = function () {
    $('.jsmenutv').addClass('itemcourant');
    $('.jschevrontv').show();
    $('.jsvolettv').show();

    $('.jsmenumicroinfo').removeClass('itemcourant');
    $('.jschevronmicroinfo').hide();
    $('.jsvoletmicroinfo').hide();
};

var ouvrirMenuMicroInfo = function () {
    $('.jsmenutv').removeClass('itemcourant');
    $('.jschevrontv').hide();
    $('.jsvolettv').hide();

    $('.jsmenumicroinfo').addClass('itemcourant');
    $('.jschevronmicroinfo').show();
    $('.jsvoletmicroinfo').show();
};