var myApp = angular.module('myApp',['ngCookies']);

function DeviceCtrl($scope, $cookieStore) {

    // Devices data
    $scope.devices = [
      { name: 'iPhone 4', os: 'iOS'},
      { name: 'iPhone 5', os: 'iOS'},
      { name: 'Nexus 4', os: 'Android'},
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
      console.log($scope.deviceChoice.name);
      
      console.log('We changed the device');
      $cookieStore.put('savedDevice', $scope.deviceChoice.name);
      console.log('Our cookie now reads ' +  $cookieStore.get('savedDevice'));
    }

    // @otod This code is exactly like save device but breaks?

    // $scope.saveDeviceOrientation = function() {
    //   console.log($scope.deviceOrientations.name);
    // 
    //   console.log('We changed the orientation');
    //   $cookieStore.put('savedOrientation', $scope.deviceOrientations.name);
    //   console.log('Our cookie now reads ' +  $cookieStore.get('savedOrientation'));
    //   
    // }

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
