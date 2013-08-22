/**
 * Clank JS
 */

$(function() {

  /**
   * Make toggles and sliders work on non touch devices
   */

  // Fingerblast!
  if ($('.cl-toggle').length > 0) {
      var fb = new FingerBlast('.cl-toggle');
  }

  if ($('.cl-slider').length > 0) {
      var fb = new FingerBlast('.cl-slider');
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

});

// event handler
$(document).ready(function(){
 $("a").on("click", function(e){
    e.preventDefault();
    loadPage($(this));
  });
});

function loadPage(link){
  var _container = $(".cl-content");
  //create our dummy 
  var href = link.attr("href");
  href.indexOf("index") > -1 ? href = href.replace("index", "indexContent") : null;
  // Fetch the template
  var newContainer = _container.clone().empty();
    newContainer.load(href, function(data){
      var entranceAnim  =   "animated " + $(_container).data("entrance");
      var exitAnim      =   "animated " + $(_container).data("exit");
      _container.addClass(exitAnim);
     setTimeout(function(){
       _container.replaceWith(newContainer);
       newContainer.addClass(entranceAnim);
       $("a").click(function(e){ 
          e.preventDefault();
          loadPage($(this)); 
        })
     },500);
    });     
}


