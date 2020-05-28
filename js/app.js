$(function () {
    $(document).scroll(function () {
        changeColor();
    });

    $('.navbar-toggler').click(function () {
        changeColor();
    });

    $('#logged').hover(function () {
        changeColor();
    });
});

// changes menu colors when scrolled or clicked

function changeColor() {
    $('#nav').css("border-bottom", "1px solid #9b59b6").addClass("menu-white");
    $('#nav').css("background-color", "#FFF");
    $('#nav .btn').addClass("btn-default");
    $('.navbar-brand').addClass("brand");
    $('.active').addClass("active-white");
    $('#logged').css("color", "#9b59b6");
    $('.user-options').css("background", "#FFF");
    $('.user-options ul li a').css("color", "#9b59b6");

    $('#dropdown-menu').removeClass("bg-transparent").addClass("dropdown-menu-white").css("background-color", "#FFF")
    $('#dropdown-menu a').removeClass("text-light").css("color", "#9b59b6")

    $('.navbar-toggler').removeClass("bg-transparent")
    $('.navbar-toggler').css("background-color", "#9b59b6")
    $('.navbar-toggler').css("color", "#FFF")
}

// check login

function logOff() {
    isLogged = false;

    if (isLogged) {
        $('#login').addClass("hide");
        $('#logged').addClass("show");
    } else {
        $('#login').addClass("show");
        $('#logged').addClass("hide");
    }
}

function logIn() {
    isLogged = true;

    if (isLogged) {
        $('#login').addClass("hide");
        $('#logged').addClass("show");
        $('#cadastro').addClass("hide");
    } else {
        $('#login').addClass("show");
        $('#logged').addClass("hide");
    }
}

function redirect() {
    window.location.href = 'index-logado.html';
}

function redirectAnunciante() {
    window.location.href = 'index-logado-anunciante.html';
}

function redirectAdmin() {
    window.location.href = 'painel.html';
}

$('#logged').hover(function () {
    $('.user-options').toggle();
});


function btnActive(e) {
    $(e).addClass("btn-music-active");
}

function newAnuncio() {
    $('#novo-anuncio').toggle(1000);
}

function editAnuncio() {
    $('#editar-anuncio').toggle(1000);
}
