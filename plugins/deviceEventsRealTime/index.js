(function() {
  'use strict';

  angular.module('myapp.deviceEventsRealTime', [])
    .config(config);

  function config(c8yViewsProvider) {

    c8yViewsProvider.when('/device/:deviceId', {
      name: 'Real-Time Events',
      icon: 'rss',
      templateUrl: ':::PLUGIN_PATH:::/deviceEventsRealTime.html',
      controller: 'deviceEventsRealTimeCtrl'
    });

  }

}());
