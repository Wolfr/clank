<!doctype html>
<html ng-app="myApp">
<head>
    <script src="components/angular/angular.js"></script>
    <script src="components/angular-cookies/angular-cookies.min.js"></script>
    
    <script src="components/prefix-free/prefixfree.min.js"></script>
    
    <script src="js/controllers.js"></script>
    <script src="js/filters.js"></script>
    
    <!-- loading spinner -->
    <script src="components/spin.js/spin.js" type="text/javascript" charset="utf-8"></script>
    <script type="text/javascript" charset="utf-8">

    function load() {
      var opts = {
        lines: 13, // The number of lines to draw
        length: 4, // The length of each line
        width: 2, // The line thickness
        radius: 7, // The radius of the inner circle
        corners: 1, // Corner roundness (0..1)
        rotate: 0, // The rotation offset
        direction: 1, // 1: clockwise, -1: counterclockwise
        color: '#000', // #rgb or #rrggbb
        speed: 1, // Rounds per second
        trail: 60, // Afterglow percentage
        shadow: false, // Whether to render a shadow
        hwaccel: true, // Whether to use hardware acceleration
        className: 'spinner', // The CSS class to assign to the spinner
        zIndex: 2e9, // The z-index (defaults to 2000000000)
        top: 'auto', // Top position relative to parent in px
        left: 'auto' // Left position relative to parent in px
      };
      var target = document.getElementById('cl-loading');
      var spinner = new Spinner(opts).spin(target);
  
    }

    </script>
    
    <link href='http://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="css/application.css">
</head>
