/*
  All app specific scripts
*/


$(function() {

  /*
    Init bootstrap tabs
  */

  $('.nav-tabs a').click(function(e) {
    e.preventDefault();
    $(this).tab('show');
  });
  
  /*
    Invoke extended input plugin with default options exposed
  */

  $('body').extendedInput({
    hideClass: 'hide'
  });
  
  /*
    Prevent body scrolling when popover context is open
  */

  $('[data-toggle-element="popover-context"]').click(function(e) {
      if ($('.cl-popover').is(':visible')) {
          $('.cl-content').css('overflow', 'hidden');
      } else {
          $('.cl-content').css('overflow', 'scroll');
      }
  });

  /*
    Prevent body scrolling when popover context is open
  */

  if ($('.cl-modal').is(':visible')) {
    $('.cl-content').css('overflow', 'hidden');
  } else {
    $('.cl-content').css('overflow', 'scroll');
  }

});

/* ==========================================================================
  Dirty hack to make pages transition into each other
   ========================================================================== */

$(document).on(
  "click",
  "a",
  function (e) {
    e.preventDefault();
    location.href = $( e.target ).attr( "href" );
  }
);