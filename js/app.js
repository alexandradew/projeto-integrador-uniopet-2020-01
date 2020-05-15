$(function () {
    $(document).scroll(function () {
        changeColor();
    });

    $('.navbar-toggler').click(function () {
        changeColor();
    });
});

function changeColor() {
    $('#nav').css("border-bottom", "1px solid #9b59b6").addClass("menu-white");
    $('#nav').css("background-color", "#FFF");
    $('#nav .btn').addClass("btn-default");
    $('.navbar-brand').addClass("brand");
    $('.active').addClass("active-white");

    $('#dropdown-menu').removeClass("bg-transparent").addClass("dropdown-menu-white").css("background-color", "#FFF")
    $('#dropdown-menu a').removeClass("text-light").css("color", "#9b59b6")

    $('.navbar-toggler').removeClass("bg-transparent")
    $('.navbar-toggler').css("background-color", "#9b59b6")
    $('.navbar-toggler').css("color", "#FFF")
}