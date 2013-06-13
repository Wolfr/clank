/**
 * Remove whitespace filter
 * @Param text
 * @return string
 */

myApp.filter('removewhitespace', function () {
  return function(text) {
    return String(text).replace(/\s/g, "");
  };
});