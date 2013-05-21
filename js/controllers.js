var myApp = angular.module('myApp',[]);

function PhoneCtrl($scope) {

    $scope.phoneChoice = $scope.phoneChoice[0]; // iPhone4
    $scope.phoneOrientation = $scope.phoneOrientation[0]; // vertical

}
