(function () {
  "use strict";
  /*global angular */

  var app = angular.module('myapplication.weatherAdmin', [ 'dark-sky' ]);

  function configure(c8yNavigatorProvider, c8yViewsProvider, gettext) {
    c8yNavigatorProvider.addNavigation({
      parent: gettext('Settings'),
      name: gettext('Dark Sky'),
      path: 'darksky',
      icon: 'cloud'
    });

    c8yViewsProvider.when('/darksky', {
      templateUrl: ':::PLUGIN_PATH:::/views/weatherAdmin.html'
    });
  }

  configure.$inject = [ 'c8yNavigatorProvider', 'c8yViewsProvider', 'gettext' ];
  app.config(configure);
}());