/**
 * Clank JS
 */

$(function() {

  /**
   * Simulate touch
   * Make toggles and sliders work on non touch devices
   * ! The touch context can only be used once per page
   */

  if ($('.simulate-touch').length > 0) {
    var fb = new FingerBlast('.simulate-touch');
  }
  
  /**
   * Radio and checkbox lists
   */
  
  $('.radio-list input[type="radio"]').change(function() {
    // Remove all checked
    $(this).parents('.radio-list').find('label').removeClass('checked');

    // Add class so we can style
    $(this).parent().addClass('checked');
  });

  $('.checkbox-list input[type="checkbox"]').change(function() {
    // Action on check/uncheck checkbox
    if ($(this).is(':checked')) {
      $(this).parent().addClass('checked');
    } else {
      $(this).parent().removeClass('checked');
    }
    
  });
  
  /**
   * Alerts
   */
  
  $('*[data-dismiss]').click(function() {
    var dismissWhat = $(this).attr('data-dismiss')
    $('.' + dismissWhat).addClass('dismissed');
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