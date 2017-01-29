(function wrapper() {
  'use strict';
  /* global angular */

  var app = angular.module('myapplication.weatherAdmin');
  weatherAdminController.$inject = [ '$scope', 'c8yTitle', 'weatherService', 'gettext' ];
  app.controller('weatherAdminController', weatherAdminController);

  function weatherAdminController($scope, c8yTitle, weatherService, gettext) {
    $scope.updateKey = updateKey;
    weatherService.load().then(function setOpt(key) {
      $scope.key = key;
    });

    c8yTitle.changeTitle({
      title: gettext('Weather provider settings')
    });

    function updateKey() {
      weatherService.save($scope.key);
    }
  }
}());
