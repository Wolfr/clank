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
    checkURL($(this).attr("href"), e);
  });
});

function checkURL(href, e){
  var test = new RegExp();
    // check to see if target shares origin
    if(href.indexOf("http") === -1 && href.indexOf("www") === -1){
        e.preventDefault();
        loadPage(href);
    }
    else{
      var urlFragment = href.match(/http?(s|)\:\/\/[(www.)a-zA-Z0-9]{1,}[\.\:]{1}/)[0].split("."),
          originTarget  = urlFragment[originTarget.length - 1]; 
      if( window.location.origin.indexOf(originTarget) === -1 ){
        e.preventDefault();
        loadPage(href);
      }
    }
}

function loadPage(href){
  var _container = $(".cl-content"),
      newContainer = _container.clone().empty();;
  href.indexOf("index") > -1 ? href = href.replace("index", "index-content") : null;
  // Fetch the template
    newContainer.load(href, function(data){
      var entranceAnim  =   "animated " + $(_container).data("entrance"),
          exitAnim      =   "animated " + $(_container).data("exit");
      _container.addClass(exitAnim);
     setTimeout(function(){
       _container.replaceWith(newContainer);
       newContainer.addClass(entranceAnim);
       $("a").click(function(e){ 
          checkURL($(this).attr("href"), e);
        })
     },500);
    });     
}


