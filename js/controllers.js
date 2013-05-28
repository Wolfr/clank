var myApp = angular.module('myApp',['ngCookies']);

function DeviceCtrl($scope, $cookieStore) {

    // Devices
    $scope.devices = [
      { name: 'iPhone 4', os: 'iOS'},
      { name: 'iPhone 5', os: 'iOS'},
      { name: 'Nexus 4', os: 'Android'},
      { name: 'Nexus 7', os: 'Android'},
      { name: 'iPad 3', os: 'iOS'}
    ];

    if ($cookieStore.get('savedDevice')) {
      angular.forEach($scope.devices, function (device) {
        if (device.name == $cookieStore.get('savedDevice')) {
          $scope.deviceChoice = device;
        }
      });
    } else {
      $scope.deviceChoice = $scope.devices[0]; // Set default
    }
    
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
