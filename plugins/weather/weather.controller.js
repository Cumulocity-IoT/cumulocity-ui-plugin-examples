(function () {
  "use strict";
  /*global angular */

  var app = angular.module('demowidgets.weather');

  function weatherController($scope, $q, darkSky, gettext, c8yInventory) {

    function locationAvailable(device) {
      return device && device.c8y_Position.lat && device.c8y_Position.lng;
    }

    function getWeather(coordinate) {
      return darkSky.getCurrent(coordinate.lat, coordinate.lng);
    }
        
    function getDevice() {
      var deviceId = $scope.child.config.device.id;
      $scope.status = gettext('Retrieving device ...');
      return c8yInventory.detail(deviceId);
    }
        
    function tryGetWeather(res) {
      $scope.device = res.data;
            
      if (locationAvailable($scope.device)) {
        $scope.status = gettext('Retrieving weather ...');
        return getWeather($scope.device.c8y_Position);
      } else {
        $scope.status = gettext('Device has not reported a location, cannot retrieve weather.');
        return $q.reject();
      }
    }
        
    function showWeather(weather) {
      $scope.weather = weather;
      $scope.status = 'ready';
      // alerts, flags, ...?
    }
    
    getDevice().then(tryGetWeather).then(showWeather);
  }
    
  app.controller('weatherController', [ '$scope', '$q', 'darkSky', 'gettext', 'c8yInventory', weatherController ]);
}());