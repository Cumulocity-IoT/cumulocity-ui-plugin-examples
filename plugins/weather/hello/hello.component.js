(function () {
  'use strict';

  angular
    .module('myapplication.weather')
    .component('c8yHello', {
      template: ':::PLUGIN_PATH:::/hello/hello.html',
      bindings: {
        world: '@'
      },
      controller: Controller,
      controllerAs: 'vm'
    });

  /* @ngInject */
  function Controller() {
    var vm = this;

    _.assign(vm, {
      $onInit: activate
    });

    ////////////

    function activate() {
      _.assign(vm, {
        hello: 'hello, ' + vm.world,
      });
    }
  }
}());
