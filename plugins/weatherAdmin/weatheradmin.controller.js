(function wrapper() {
  'use strict';
  /* global angular */

  var app = angular.module('myapplication.weatherAdmin');
  weatherAdminController.$inject = [ '$scope', 'c8yTitle', 'weatherService', 'gettext' ];
  app.controller('weatherAdminController', weatherAdminController);

  function weatherAdminController($scope, c8yTitle, weatherService, gettext) {
    $scope.option = weatherService.option;
    $scope.updateOption = updateOption;

    c8yTitle.changeTitle({
      title: gettext('Weather provider settings')
    });

    function updateOption() {
      weatherService.save($scope.option);
    }
  }
}());
