$(function() {

  /**
   * Temp code to try and implement anims/page transitions
   */

  // Fingerblast!
  if ($('.cl-toggle').length > 0) {
      var fb = new FingerBlast('.cl-toggle');
  }

  if ($('.cl-slider').length > 0) {
      var fb = new FingerBlast('.cl-slider');
  }

  // Add data ignore push to links unrelated to demo
  // $('#header a, .cl-demo-list a').attr('data-ignore', 'push');
  
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

});
