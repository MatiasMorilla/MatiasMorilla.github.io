const header = document.querySelector(".header");
const header_nav = document.querySelector(".header__nav");
const btn_menu = document.querySelector(".btn_menu");

window.onscroll = function()
{
    let y = window.scrollY;
    if(y >= 60)
    {
        header.classList.add("header--fixed");
    }
    else
    {
        header.classList.remove("header--fixed");
    }
}

btn_menu.addEventListener("click", function()
{
    /* header.classList.toggle("header--fixed"); */
    header_nav.classList.toggle("header--show");
})