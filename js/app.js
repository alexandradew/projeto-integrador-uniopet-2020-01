$(function () {
    $(document).scroll(function () {
        $('#nav').css("border-bottom", "1px solid #9b59b6");
        $('#nav').removeClass("navbar-dark");
        $('#nav a').css("color", "#9b59b6");
        $('#nav').css("background-color", "#FFF");
        $('#nav button').addClass("btn-default");
        $('#dropdown-menu').removeClass("bg-transparent")
        $('#dropdown-menu a').removeClass("text-light")
        $('#dropdown-menu a').css("color", "#9b59b6")
        $('#dropdown-menu').css("background-color", "#FFF")
    });
});