(function() {
  'use strict';

  angular
    .module('myapp.deviceEventsRealTime')
    .config(configure);

  configure.$inject = [
    'c8yViewsProvider'
  ];

  function configure(c8yViewsProvider) {

    c8yViewsProvider.when('/device/:deviceId', {
      name: 'Real-Time Events',
      icon: 'rss',
      templateUrl: ':::PLUGIN_PATH:::/deviceEventsRealTime.html',
      controller: 'deviceEventsRealTimeCtrl'
    });

  }

}());
