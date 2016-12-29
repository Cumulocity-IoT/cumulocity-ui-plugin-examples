(function () {
  'use strict';
  /*global describe, beforeEach, tentacle, it, sinon, expect, async */

  describe('weather controller', function () {
    var mocks;
    var id = 42;
    var config = { config: { device: { id: id } } };
    var lat = 51.2674861, lng = 6.76976378327068;
    var deviceWithLocation = { data : { c8y_Position: { lat: lat, lng: lng } } };
    var deviceNoLocation = { data: {} };
    var weather = { currently: {
      icon: 'clear-day', temperature: 30, pressure: 1040, humidity: 5, windSpeed: 5, windBearing: 200
    }};
    
    beforeEach(function () {
      mocks = tentacle.controller('myapplication.weather', 'weatherController');
      mocks.$scope.child = config;
      mocks.gettext = function(arg) { return arg; }
    });

    it('gets the weather at a device location', function () {
      mocks.c8yInventory.detail = sinon.stub().returns(async(deviceWithLocation));
      mocks.weatherService.weather.getCurrent = sinon.stub().returns(async(weather));
      
      tentacle.controller.run();
      
      expect(mocks.c8yInventory.detail.calledOnce).toBe(true);
      expect(mocks.c8yInventory.detail.calledWith(id)).toBe(true);
      
      expect(mocks.weatherService.weather.calledOnce).toBe(true);
      expect(mocks.weatherService.weather.calledWith(lat, lng)).toBe(true);
      
      expect(mocks.$scope.weather).toEqual(weather);
      expect(mocks.$scope.status).toEqual('ready');
    });
    
    it('updates the weather when the device is changed', function () {
      // how to do that?
    });

    it('reports an error if the selected device has no location', function () {
      mocks.c8yInventory.detail = sinon.stub().returns(async(deviceNoLocation));

      tentacle.controller.run();
      
      expect(mocks.c8yInventory.detail.calledOnce).toBe(true);
      expect(mocks.$scope.$status).toMatch('has not reported a location');
      // how to check that weather service has not been called.
    });

    it('reports an error if the device cannot be retrieved', function () {
    });

    it('reports an error if the API key is not set', function () {
    });

    it('reports an error if the weather information cannot be retrieved', function () {
    });    
  });

}());
