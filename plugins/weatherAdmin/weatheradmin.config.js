(function () {
  "use strict";
  /*global angular */

  var app = angular.module('myapplication.weatherAdmin', [ 'myapplication.weatherService' ]);
  configure.$inject = [ 'c8yNavigatorProvider', 'c8yViewsProvider', 'gettext' ];
  app.config(configure);

  function configure(c8yNavigatorProvider, c8yViewsProvider, gettext) {
    c8yNavigatorProvider.addNavigation({
      parent: gettext('Settings'),
      name: gettext('Weather'),
      path: 'weather',
      icon: 'cloud'
    });

    c8yViewsProvider.when('/weather', {
      templateUrl: ':::PLUGIN_PATH:::/views/weatherAdmin.html'
    });
  }
}());