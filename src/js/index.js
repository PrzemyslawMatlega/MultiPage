import '../scss/main.scss';
import $ from "jquery";


$(".menu__link--droplink").click( () =>{
    $(".menu-dropdown").slideToggle("slow");
})

$(".nav__icon").click( () =>{
    $(".nav__icon").toggleClass('open');
    $(".menu").slideToggle("fast");
})