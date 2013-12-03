var path = require('path')

module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    gifmin: {
      src: ['src/**/*.gif']
    }
    , inlineImg: {
      src: ['src/**/*.css'],
      ie8: true
    }
  });
  grunt.registerTask('default', ["gifmin", "inlineImg"]);
}
