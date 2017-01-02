(function wrapper() {
  'use strict';
  /* global angular */

  var app = angular.module('myapplication.weatherAdmin');
  weatherAdminController.$inject = [ '$scope', 'weatherService' ];
  app.controller('weatherAdminController', weatherAdminController);

  function weatherAdminController($scope, weatherService) {
    $scope.option = weatherService.option;
    $scope.updateOption = updateOption;

    function updateOption() {
      weatherService.save($scope.option);
    }
  }
}());
