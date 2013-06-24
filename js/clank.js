Zepto(function($){

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
  
  $('.radio-list input').change(function() {

    // Remove all checked
    $(this).parents('.radio-list').find('label').removeClass('checked');

    // Add class so we can style
    $(this).parent().addClass('checked');

  });

  $('.checkbox-list input').change(function() {

    // Add class so we can style
    $(this).parent().addClass('checked');

  });

})
