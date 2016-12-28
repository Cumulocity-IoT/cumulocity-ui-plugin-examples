(function () {
  "use strict";
  /*global angular */

  var app = angular.module('myapplication.weatherService', [ 'dark-sky' ]);

  function configure(darkSkyProvider) {
    darkSkyProvider.setUnits('si');
    app.darkSkyProvider = darkSkyProvider;
  }

  configure.$inject = [ 'darkSkyProvider' ];
  app.config(configure);
  
  function WeatherService(darkSky, c8ySettings) {
    var self = this;
    self.weather = darkSky;
    self.c8ySettings = c8ySettings;
    self.option = { category: 'darksky', key: 'key', value: ''};
    
    self.c8ySettings.detail(self.option).then(function (res) {
      self.option.value = res.data.value;
      app.darkSkyProvider.setApiKey(self.option.value);
    }, function (error) {
      c8ySettings.createOption(self.option);
    });
  }
    
  WeatherService.prototype.save = function (apiKey) {
    var self = this;
    self.option.value = apiKey;
    self.c8ySettings.updateOption(self.option);
    app.darkSkyProvider.setApiKey(apiKey);
  };

  WeatherService.$inject = [ 'darkSky', 'c8ySettings' ];
  app.service('weatherService', WeatherService);
}());
