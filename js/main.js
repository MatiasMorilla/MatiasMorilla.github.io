const header = document.querySelector(".header");

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