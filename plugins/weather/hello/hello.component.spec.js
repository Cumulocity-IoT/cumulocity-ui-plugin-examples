describe('myapplication.weather: c8yHello component', function () {
  var $injector;
  var $rootScope;
  var $compile;
  var $componentController;

  beforeEach(function () {
    common.globalBeforeWithUI();
    module('myapplication.weather');

    inject(function (
      _$injector_,
      _$rootScope_,
      _$q_,
      _$compile_,
      _$componentController_
    ) {
      $injector = _$injector_;
      $rootScope = _$rootScope_;
      $compile = _$compile_;
      $componentController = _$componentController_;
    });
  });

  it('component should exist', function () {
    expect($injector.has('c8yHelloDirective'))
      .toEqual(true);
  });

  describe('rendering c8yHello component', function () {
    var element;

    beforeEach(function () {

      //////////// stubbing dependencies

      // exampleStub = spyOn($injector.get('exampleService'), 'exampleMethod');
    });

    it('should correctly display text based on the "world" binding', function () {
      // given
      var bindings = { world: 'world' };
      var template = '<c8y-hello world="world"></c8y-hello>';

      // when
      initComponent(template, bindings);

      // then
      expect(element.html())
        .toContain('hello');

      expect(element.controller('c8yHello').hello)
        .toEqual('hello, world');

      //////

      // given
      bindings = { world: 'dunia' };

      // when
      var controller = $componentController('c8yHello', undefined, bindings);
      controller.$onInit();

      // then
      expect(controller.hello)
        .toEqual('hello, dunia');
    });

    function initComponent(template, bindings) {
      var $scope = _.assign($rootScope.$new(), bindings);

      element = $compile(template)($scope);
      $scope.$digest();
    }
  });
});
