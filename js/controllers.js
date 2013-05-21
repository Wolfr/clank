var myApp = angular.module('myApp',[]);

function PhoneCtrl($scope) {

    // Devices
    $scope.phones = [
        'iPhone 4',
        'iPhone 5',
        'Nexus 4',
        'iPad 3'
    ];

    $scope.phoneChoice = $scope.phones[0]; // iPhone4

    // Orientations

    $scope.phoneOrientations = [
      'Horizontal',
      'Vertical'
    ];

    $scope.phoneOrientation = $scope.phoneOrientations[0]; // vertical

}
