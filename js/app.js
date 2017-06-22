 var cargarPagina = function () {
     $(".button-collapse").sideNav();
    $('.button-collapse').sideNav({
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true, // Choose whether you can drag to open on touch screens,
    }
  );
     $('.modal').modal();
     $('.carousel').carousel();
     desplazamientoSuave();
 };

 var desplazamientoSuave = function () {

     $('a[href^="#"]').click(function (event) {
         var id = $(this).attr("href");
         var offset = 20;
         var target = $(id).offset().top-offset;

         $('html, body').animate({
             scrollTop: target
         }, 750);
         event.preventDefault();
     });
 };

 $(document).ready(cargarPagina);
