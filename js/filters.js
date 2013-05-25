// add the filter to your application module
angular.module('myApp', ['filters']);

/**
 * Remove whitespace filter
 * @Param text
 * @return string
 */
angular.module('filters', []).
    filter('removewhitespace', function () {
        return function(text) {

            return String(text).replace(/\s/g, "");
        };
    });
