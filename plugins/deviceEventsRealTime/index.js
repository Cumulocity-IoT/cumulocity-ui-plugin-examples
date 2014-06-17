angular.module('myapp.deviceEventsRealTime', [])
  .config(['c8yViewsProvider',
    function (c8yViewsProvider) {
      c8yViewsProvider.when('/device/:deviceId', {
        name: 'Real-Time Events',
        icon: 'rss',
        templateUrl: ':::PLUGIN_PATH:::/views/deviceEventsRealTime.html',
        controller: 'deviceEventsRealTimeCtrl'
      });
    }]);
