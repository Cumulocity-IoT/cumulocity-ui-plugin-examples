(function () {
  "use strict";
  /*global angular */

  var app = angular.module('myapplication.weather');

  function weatherController($scope, $q, weatherService, gettext, c8yInventory) {

    function locationAvailable(device) {
      return device && device.c8y_Position.lat && device.c8y_Position.lng;
    }

    function getWeather(coordinate) {
      return weatherService.weather.getCurrent(coordinate.lat, coordinate.lng);
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
    
    function rotate(weather) {
      var direction = (weather.currently.windBearing + 180) % 360;
      return 'rotate(' + direction + 'deg)';
    }
        
    function showWeather(weather) {
      $scope.weather = weather;
      $scope.windDirection = {
        'display': 'inline-block',
        '-ms-transform' : rotate(weather),
        '-webkit-transform': rotate(weather),
        'transform': rotate(weather)
      };
      $scope.status = 'ready';
    }
    
    getDevice().then(tryGetWeather).then(showWeather);
  }
    
  weatherController.$inject = [ '$scope', '$q', 'weatherService', 'gettext', 'c8yInventory' ];
  app.controller('weatherController', weatherController);
}());