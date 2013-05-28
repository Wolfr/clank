/**
 * Remove whitespace filter
 * @Param text
 * @return string
 */
angular.module('myApp').
    filter('removewhitespace', function () {
        return function(text) {

            return String(text).replace(/\s/g, "");
        };
    });
