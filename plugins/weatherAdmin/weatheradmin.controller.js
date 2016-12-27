(function () {
  "use strict";
  /*global angular */

  var app = angular.module('myapplication.weatherAdmin');
  var option = { category: 'darksky', key: 'key', value: ''};

  function weatherAdminController($scope, darkSkyProvider, c8ySettings) {
    
    function updateKey(key) {
      darkSkyProvider.setApiKey(key);
      option.value = key;
      c8ySettings.updateOption(option);
    }
    
    c8ySettings.detailValue(option).then(function (value) {
      $scope.key = value;
    }, function(error) {
      c8ySettings.createOption(option);
    });
  }
    
  app.controller('weatherAdminController', [ '$scope', 'darkSkyProvider', 'c8ySettings', weatherAdminController ]);
}());
