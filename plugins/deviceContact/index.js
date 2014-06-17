angular.module('myapp.deviceContact', [])
  .config(['c8yViewsProvider', function (c8yViewsProvider) {
    c8yViewsProvider.when('/device/:deviceId', {
      name: 'Contact',
      icon: 'envelope-o',
      priority: 1000,
      templateUrl: ':::PLUGIN_PATH:::/views/deviceContact.html',
      controller: 'deviceContactCtrl'
    });
  }]);