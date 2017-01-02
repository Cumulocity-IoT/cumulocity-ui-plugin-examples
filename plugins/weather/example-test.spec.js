describe('myapplication.weather: WeatherController', function () {
  var $rootScope;
  var $controller;
  var $scope;

  beforeEach(function () {
    //////////// must depended-upon modules

    common.globalBeforeWithUI();

    //////////// module to be tested

    module('myapplication.weather');

    ////////////

    inject(function (
      _$rootScope_,
      _$controller_
    ) {
      $rootScope = _$rootScope_;
      $controller = _$controller_;
    });
  });

  describe('What component aspect are you testing?', function () {
    beforeEach(function () {

      ////////////

      // exampleStub = spyOn($injector.get('exampleService'), 'exampleMethod');
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
