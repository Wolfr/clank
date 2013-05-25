var myApp = angular.module('myApp',[]);

function DeviceCtrl($scope) {

    // Devices
    $scope.devices = [
      { name: 'iPhone 4', os: 'iOS'},
      { name: 'iPhone 5', os: 'iOS'},
      { name: 'Nexus 4', os: 'Android'},
      { name: 'Nexus 7', os: 'Android'},
      { name: 'iPad 3', os: 'iOS'}
    ];

    $scope.deviceChoice = $scope.devices[0]; // Set default

    
    $scope.getOS = function() {
      console.log($scope.deviceChoice.os);
      return $scope.deviceChoice.os;
     }

    // Orientations

    $scope.deviceOrientations = [
      'Portrait',
      'Landscape'
    ];

    $scope.deviceOrientation = $scope.deviceOrientations[0]; // Set default

    // Size default

    $scope.deviceSize = 1;

}