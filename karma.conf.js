module.exports = (config) => {
  config.set({

    singleRun: true,

    files: [
      'node_modules/cumulocity-ui-build/core/main.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'node_modules/sinon/pkg/sinon.js',
      'node_modules/tentacle.js/dist/tentacle.js',
      'plugins/**/*index.js',
      'plugins/**/*.js',
      'plugins/**/*.html'
    ],

    frameworks: ['jasmine'],

    browsers: ['PhantomJS'],

    plugins: [
      'karma-jasmine',
      'karma-phantomjs-launcher',
      'karma-spec-reporter',
      'karma-ng-html2js-preprocessor',
      { 'preprocessor:c8y-pluginpath': ['factory', c8yPluginPathPreprocessor] }
    ],

    preprocessors: {
      '**/plugins/{**/,}*.js': ['c8y-pluginpath']
    },

    reporters: ['spec'],
    specReporter: {
      maxLogLines: 5,         // limit number of lines logged per test
      suppressErrorSummary: true,  // do not print error summary
      suppressFailed: false,  // do not print information about failed tests
      suppressPassed: false,  // do not print information about passed tests
      suppressSkipped: false,  // do not print information about skipped tests
      showSpecTiming: false // print the time elapsed for each spec
    },

    logLevel: config.LOG_ERROR,

    client: {
      captureConsole: true
    }
  });
};

function c8yPluginPathPreprocessor() {
  return (content, file, done) => {
    var APP_CONTEXT_PATH = 'myapplication';
    var pluginName = (/plugins\/(.+?)\/+?/.exec(file.originalPath))[1];
    var pluginPath = APP_CONTEXT_PATH + '_' + pluginName;

    done(content.replace(':::PLUGIN_PATH:::', pluginPath));
  };
}
