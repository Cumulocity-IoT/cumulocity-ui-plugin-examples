(function () {
  'use strict';

  angular
    .module('myapp.weatherAdmin')
    .controller('weatherAdminController', weatherAdminController);

  weatherAdminController.$inject = [
    '$scope',
    'c8yTitle',
    'weatherService',
    'gettext'
  ];

  function weatherAdminController(
    $scope, c8yTitle,
    weatherService,
    gettext
  ) {
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
