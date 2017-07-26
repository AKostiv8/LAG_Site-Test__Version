/**
 * Created by Anastasiia on 20.07.2017.
 */

(function($){
  $(function(){
    $('.carousel').carousel();
    $('.button-collapse').sideNav({
        menuWidth: 300, // Default is 300
        edge: 'left', // Choose the horizontal origin
        closeOnClick: false, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        draggable: true // Choose whether you can drag to open on touch screens
      }
    );
    $('.parallax').parallax();
    $('.slider').slider({
      height: 530
    });
    $('.materialboxed').materialbox();
    $('.modal').modal();
    $(".dropdown-button").dropdown();
    $("#map").click(function(){
      $("iframe").slideToggle();
    });
  }); // end of document ready
})(jQuery); // end of jQuery name space

