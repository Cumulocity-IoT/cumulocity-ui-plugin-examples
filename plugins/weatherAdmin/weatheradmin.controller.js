(function () {
  "use strict";
  /*global angular */

  var app = angular.module('myapplication.weatherAdmin');

  function weatherAdminController($scope, darkSky, c8ySettings) {
    
    function updateKey() {
      c8ySettings.updateOption($scope.option);
      darkSky.setApiKey($scope.option.value);
    }
    
    $scope.option = { category: 'darksky', key: 'key', value: ''};
    $scope.updateKey = updateKey;
    
    c8ySettings.detail($scope.option).then(function (res) {
      $scope.option = res.data;
    }, function (error) {
      c8ySettings.createOption($scope.option);
    });
  }
    
  app.controller('weatherAdminController', [ '$scope', 'darkSky', 'c8ySettings', weatherAdminController ]);
}());
