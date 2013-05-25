var myApp = angular.module('myApp',[]);

function DeviceCtrl($scope) {

    // Devices
    $scope.devices = [
        'iPhone 4',
        'iPhone 5',
        'Nexus 4',
        'Nexus 7',
        'iPad 3'
    ];

    $scope.deviceChoice = $scope.devices[0]; // Set default

    // Orientations

    $scope.deviceOrientations = [
      'Portrait',
      'Landscape'
    ];

    $scope.deviceOrientation = $scope.deviceOrientations[0]; // Set default

    // Size default

    $scope.deviceSize = 1;

}
