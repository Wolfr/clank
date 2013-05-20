// add the filter to your application module
angular.module('myApp', ['filters']);

/**
 * Truncate Filter
 * @Param text
 * @return string
 */
angular.module('filters', []).
    filter('removespaces', function () {
        return function(text) {

            return String(text).replace(" ","");
        };
    });
