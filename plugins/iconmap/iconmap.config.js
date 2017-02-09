(function () {
  'use strict';

  angular
    .module('myapp.iconmap')
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
      name: 'Icon Map', // ... the name *"Icon Map"*
      nameDisplay: gettext('Icon Map'), // ... the displayed name *"Icon Map"*
      description: gettext('Displays a map with icons for devices instead of markers'), // ... a description
      templateUrl: ':::PLUGIN_PATH:::/views/iconmap.main.html', // ... displaying *"iconmap.main.html"* when added to the dashboard
      options: { noDeviceTarget: true }
    });
  }
}());
