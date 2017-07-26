 var cargarPagina = function () {
     $(".button-collapse").sideNav();
     $('.button-collapse').sideNav({
         closeOnClick: true
     });
     $('.modal').modal();
     $('.carousel').carousel();
     desplazamientoSuave();
     //muestraFixedBtn();
 };

 var desplazamientoSuave = function () {

     $('a[href^="#"]').click(function (event) {
         var id = $(this).attr("href");
         var offset = 20;
         var target = $(id).offset().top - offset;

         $('html, body').animate({
             scrollTop: target
         }, 750);
         event.preventDefault();
     });
 };
 /*var muestraFixedBtn = function () {
     if (window.scrollY < 125) {
         $("#fixed-btn").hide();
     } if else(window.scrollY >= 126) {
          $("#fixed-btn").show();
     }
 };*/

 $(document).ready(cargarPagina);
