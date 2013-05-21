var myApp = angular.module('myApp',[]);

function DeviceCtrl($scope) {

    // Devices
    $scope.devices = [
        'my device with',
        'iPhone 4',
        'iPhone 5',
        'Nexus 4',
        'iPad 3'
    ];

    $scope.deviceChoice = $scope.devices[0]; // iPhone4

    // Orientations

    $scope.deviceOrientations = [
      'Horizontal',
      'Vertical'
    ];

    $scope.deviceOrientation = $scope.deviceOrientations[0]; // vertical

}
