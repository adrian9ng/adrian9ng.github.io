window.onscroll = function(){
    navStick()
};


let navbar = document.getElementById("navbar");
let offset = navbar.offsetTop;

function navStick(){
    if(window.scrollY >= offset){
        navbar.classList.add("sticky");
    }
    else{
        navbar.classList.remove("sticky");
    }
}