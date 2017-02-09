(function() {
  'use strict';

  angular.module('myapp.deviceContact', [])
    .config(config);

  function config(c8yViewsProvider) {
    c8yViewsProvider.when('/device/:deviceId', {
      name: 'Contact',
      icon: 'envelope-o',
      priority: 1000,
      templateUrl: ':::PLUGIN_PATH:::/deviceContact.html',
      controller: 'deviceContactCtrl'
    });
  }

}());
