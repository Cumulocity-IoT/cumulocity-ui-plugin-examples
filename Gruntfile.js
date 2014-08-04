module.exports = function (grunt) {
  'use strict';

  grunt.config('cumulocity.host', 'developer.cumulocity.com');
  grunt.config('cumulocity.protocol', 'http');

  grunt.config('paths.root', './');
  grunt.config('paths.temp', '.tmp');
  grunt.config('paths.build', 'build');
  grunt.config('paths.plugins', 'plugins');
  grunt.config('paths.bower', 'bower_components');

  //Load cumulocity grunt tasks
  grunt.loadNpmTasks('grunt-cumulocity-ui-tasks');

  grunt.registerTask('server', [
    'readApplication',
    // 'readPlugins',
    'pluginPreAll',
    'connect:plugin',
    'watch'
  ]);

  grunt.registerTask('build', [
    'pluginBuildAll'
  ]);

};