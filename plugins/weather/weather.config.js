(function () {
  'use strict';

  angular
    .module('myapp.weather', [ 'myapp.weatherService' ])
    .config(configure);

  configure.$inject = [
    'c8yComponentsProvider',
    'gettext'
  ];

  function configure(
    c8yComponentsProvider,
    gettext
  ) {
    c8yComponentsProvider.add({ // adds a menu item to the widget menu list with ...
      name: 'weather', // ... the name *"weather"*
      nameDisplay: gettext('Weather'), // ... the displayed name *"weather"*
      description: gettext('Shows the current weather at the location of a device'), // ... a description
      templateUrl: ':::PLUGIN_PATH:::/views/weather.main.html' // ... displaying *"iconmap.main.html"* when added to the dashboard
    });
  }
}());
