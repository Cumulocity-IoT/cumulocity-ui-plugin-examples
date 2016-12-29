describe('myapplication.weather: WeatherController', function () {
  var $injector;
  var $rootScope;
  var $q;
  var $controller;
  var $scope;

  beforeEach(function () {

    //////////// must depended-upon modules

    module(function ($provide) { $provide.value('info', {}); });
    module('ngMock');
    module('c8y.core');
    module('c8y.ui');

    //////////// module to be tested

    module('myapplication.weather');

    ////////////

    inject(function (
      _$injector_,
      _$rootScope_,
      _$q_,
      _$controller_
    ) {
      $injector = _$injector_;
      $rootScope = _$rootScope_;
      $q = _$q_;
      $controller = _$controller_;
    });
  });

  describe('What component aspect are you testing?', function () {

    beforeEach(function () {

      //////////// stubbing dependencies

      //getWorldStub = spyOn($injector.get('exampleDependency'), 'getWorld');
    });

    it('What should the feature do?', function () {

      // given

      // when
      var bindings = {
        child: { config: { device: {} } }
      };

      initController(bindings);

      // then
      expect($scope)
        .toBeDefined();
    });
  });

  function initController(scopeBindings) {
    $scope = _.assign($rootScope.$new(), scopeBindings);

    $controller('weatherController', { $scope: $scope });
  }
});
