(function wrapper() {
  'use strict';
  /* global angular */

  var app = angular.module('myapplication.iconmap', []);

  configure.$inject = [ 'c8yComponentsProvider', 'gettext' ];
  app.config(configure);

  function configure(c8yComponentsProvider, gettext) {
    c8yComponentsProvider.add({
      name: 'Icon Map',
      nameDisplay: gettext('Icon Map'),
      description: gettext('Displays a map with icons for devices instead of markers'),
      templateUrl: ':::PLUGIN_PATH:::/views/iconmap.main.html',
      options: { noDeviceTarget: true }
    });
  }
})();
