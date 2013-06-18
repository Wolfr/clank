var myApp = angular.module('myApp',['ngCookies']);

myApp.config(function($interpolateProvider) {
  $interpolateProvider.startSymbol('{[{');
  $interpolateProvider.endSymbol('}]}');
});

function DeviceCtrl($scope, $cookieStore) {

    // Devices data
    $scope.devices = [
      { name: 'iPhone 4', os: 'iOS'},
      { name: 'iPhone 5', os: 'iOS'},
      { name: 'Galaxy Nexus', os: 'Android'},
      { name: 'Nexus 7', os: 'Android'},
      { name: 'iPad 3', os: 'iOS'}
    ];

    // Orientations data
    $scope.deviceOrientations = [
      { name: 'Portrait' },
      { name: 'Landscape' }
    ];
    
    // When you set a device, also set a cookie
    $scope.saveDeviceChoice = function() {
      $cookieStore.put('savedDevice', $scope.deviceChoice.name);
    }

    // When you set an orientation, also set a cookie
    $scope.saveDeviceOrientation = function() {
      $cookieStore.put('savedOrientation', $scope.deviceOrientation.name);
    }

    // If a cookie with saved device data exists apply it
    if ($cookieStore.get('savedDevice')) {
      angular.forEach($scope.devices, function (device) {
        if (device.name == $cookieStore.get('savedDevice')) {
          $scope.deviceChoice = device;
        }
      });
    } else {
      // Apply device default
      $scope.deviceChoice = $scope.devices[0]; 
    }

    // If a cookie with saved orientation data exists apply it
    if ($cookieStore.get('savedOrientation')) {
      angular.forEach($scope.deviceOrientations, function (deviceOrientation) {
        if (deviceOrientation.name == $cookieStore.get('savedOrientation')) {
          $scope.deviceOrientation = deviceOrientation;
        }
      });
    } else {
      // Apply orientation default
      $scope.deviceOrientation = $scope.deviceOrientations[0];
    }

    // Size default
    $scope.deviceSize = 1;

}