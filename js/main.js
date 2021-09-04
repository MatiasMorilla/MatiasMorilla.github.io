const header = $(".header");
const header_nav = $(".header__nav");
const btn_menu = $(".btn_menu");
const links_menu = $(".nav__menu__item a");

window.onscroll = function()
{
    let y = window.scrollY;
    if(y >= 60)
    {
        header.addClass("header--fixed");
    }
    else
    {
        header.removeClass("header--fixed");
    }
}

btn_menu.click(function()
{
    header_nav.toggleClass("header--show");
    btn_menu.find("i").toggleClass("fas fa-bars");
    btn_menu.find("i").toggleClass("fas fa-times");
});


links_menu.click(e =>{
    header_nav.toggleClass("header--show");
    btn_menu.find("i").toggleClass("fas fa-bars");
    btn_menu.find("i").toggleClass("fas fa-times");
});