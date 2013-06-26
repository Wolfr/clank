var myApp = angular.module('myApp',['ngCookies']);

/**
 *  Change interpolation since it clashes with Jekyll
 */

myApp.config(function($interpolateProvider) {
  $interpolateProvider.startSymbol('{[{');
  $interpolateProvider.endSymbol('}]}');
});

function DeviceCtrl($scope, $cookieStore) {
  
  /**
   *  Data
   */

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
  
  $scope.deviceSize = 1;

  /**
   *  Save cookies when you change settings and apply them by default
   */

  // Cookie for device choice
  $scope.saveDeviceChoice = function() {
    $cookieStore.put('savedDevice', $scope.deviceChoice.name);
  }
  
  if ($cookieStore.get('savedDevice')) {
    angular.forEach($scope.devices, function (device) {
      if (device.name == $cookieStore.get('savedDevice')) {
        $scope.deviceChoice = device;
      }
    });
  } else {
    $scope.deviceChoice = $scope.devices[0];
  }

  // Cookie for device orientation
  $scope.saveDeviceOrientation = function() {
    $cookieStore.put('savedOrientation', $scope.deviceOrientation.name);
  }
  
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

  // Cookie for docs visibility
  $scope.saveDocsVisibility = function() {
    $cookieStore.put('docsVisible', $scope.docsVisible);
  }
  
  // If a cookie with saved docs visibility exists apply it
  if ($cookieStore.get('docsVisible')) {
    $scope.docsVisible = $cookieStore.get('docsVisible');
  } else {
    $scope.docsVisible = true;
  }

  // Cookie for size
  $scope.saveDeviceSize = function() {
    $cookieStore.put('deviceSize', $scope.deviceSize);
  }

  // If a cookie with device size exists apply it
  if ($cookieStore.get('deviceSize')) {
    $scope.deviceSize = $cookieStore.get('deviceSize', $scope.deviceSize);
  } else {
    // Size default (this doesn't get saved)
    $scope.deviceSize = 1;
  }

}