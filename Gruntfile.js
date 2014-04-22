module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    bookmarklet: {
      generate: {
        body: 'hulucastable.js',
        out: 'bookmarklet.js',
        amdify: false,
        jshint: true,
        timestamp: true
      }
    }
  });

  grunt.loadNpmTasks('grunt-bookmarklet-thingy');

  // Default task.
  grunt.registerTask('default', ['bookmarklet']);

};
