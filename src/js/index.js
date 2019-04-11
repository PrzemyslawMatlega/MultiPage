import '../scss/main.scss';
import './aboutUs__carousel';
import $ from "jquery";


$(".menu__link--droplink").click( () =>{
    $(".menu-dropdown").toggleClass('openNav')
})

$(".nav__icon").click( () =>{
    $(".nav__icon").toggleClass('open');
    $(".menu").toggleClass('openNav');
})

