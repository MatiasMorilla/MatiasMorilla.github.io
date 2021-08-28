const header = $(".header");
const header_nav = $(".header__nav");
const btn_menu = $(".btn_menu");

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
});