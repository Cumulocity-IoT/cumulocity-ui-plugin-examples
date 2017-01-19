(function () {
  'use strict';

  angular
    .module('helloapp.hello')
    .controller('HelloController', HelloController);

  function HelloController() {
    var vm = this;

    vm.text = 'hello, world';
  }
}());
