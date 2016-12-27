(function () {
  "use strict";
  /*global angular */

  var app = angular.module('myapplication.weather', [ 'dark-sky' ]);

  function configure(c8yComponentsProvider, darkSkyProvider, gettext) {
    c8yComponentsProvider.add({
      name: 'weather',
      nameDisplay: gettext('Weather'),
      description: gettext('Shows the current weather at the location of a device'),
      templateUrl: ':::PLUGIN_PATH:::/views/weather.main.html'
    });

    darkSkyProvider.setApiKey('ebbbd7c57d23ee68afc974b0ec56e588');
    darkSkyProvider.setUnits('si');
  }

  configure.$inject = [ 'c8yComponentsProvider', 'darkSkyProvider', 'gettext' ];
  app.config(configure);
}());
