(function () {
  "use strict";
  /*global angular */

  var app = angular.module('myapplication.weather', [ 'myapplication.weatherService' ]);
  configure.$inject = [ 'c8yComponentsProvider', 'gettext' ];
  app.config(configure);

  function configure(c8yComponentsProvider, gettext) {
    c8yComponentsProvider.add({
      name: 'weather',
      nameDisplay: gettext('Weather'),
      description: gettext('Shows the current weather at the location of a device'),
      templateUrl: ':::PLUGIN_PATH:::/views/weather.main.html'
    });
  }
}());
