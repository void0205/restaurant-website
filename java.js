let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.addEventlistner("click", function (){
    navbar.classlist.toggle("active");
});

window.onscroll = () => {
    navbar.classlist.remove("active");
};