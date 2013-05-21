var myApp = angular.module('myApp',[]);

function PhoneCtrl($scope) {
    $scope.phones = [
        'iPhone 4',
        'iPhone 5',
        'Nexus 4',
        'iPad 3'
    ];

    $scope.phoneChoice = $scope.phones[0]; // iPhone4
    //$scope.phoneOrientation = $scope.phoneOrientation[0]; // vertical

}
