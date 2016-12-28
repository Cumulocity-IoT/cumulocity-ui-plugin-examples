(function () {
  "use strict";
  /*global angular */

  var app = angular.module('myapplication.weatherAdmin');

  function weatherAdminController($scope, weatherService) {
    
    function updateOption() {
      weatherService.save($scope.option);
    }
    
    $scope.option = weatherService.option;
    $scope.updateOption = updateOption;
  }
    
  weatherAdminController.$inject = [ '$scope', 'weatherService' ];
  app.controller('weatherAdminController', weatherAdminController);
}());
