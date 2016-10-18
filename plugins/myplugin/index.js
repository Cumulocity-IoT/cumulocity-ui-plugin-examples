(function() {
  'use strict';

  //Main module name must be defined in ngModules of the plugin manifest
  //so that they can be loaded at application bootstrap
  angular.module('myapp.helloworld', [])
    .config(config)
    .controller('mh_MainCtrl', MainController);

  function config(c8yNavigatorProvider, c8yViewsProvider) {
    c8yNavigatorProvider.addNavigation({
      name: 'New plugin',
      icon: 'cube',
      priority: 100000,
      path: 'hello'
    });

    c8yViewsProvider.when('/hello', {
      // Please use this string placeholder where you want to refer you plugin path.
      templateUrl: ':::PLUGIN_PATH:::/index.html',
      controller: 'mh_MainCtrl'
    });

    c8yViewsProvider.when('/', {
      redirectTo: '/hello'
    });
  }

  function MainController($scope) {
    $scope.hello = 'Hello world!';
  }

}());
