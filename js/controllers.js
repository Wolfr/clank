var myApp = angular.module('myApp',[]);

function PhoneCtrl($scope) {

    $scope.filterPhoneChoice = function() {
        return true;
    };

    $scope.orientations = [
        { "value": "h", "text": "Horizontal" },
        { "value": "v", "text": "Vertical" }
    ];

}
