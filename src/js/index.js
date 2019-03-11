import '../scss/main.scss';
import $ from "jquery";


$(".menu__link--droplink").click( () =>{
    $(".menu-dropdown").slideToggle("slow");
})

$(".nav__toggler").click( () =>{
    $(".menu").slideToggle("fast");
})