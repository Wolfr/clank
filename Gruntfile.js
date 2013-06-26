// Gruntfile to make a build of Clank based on the documentation site

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: {
      main: {
        files: [
          { expand: true, src: ['js/clank/**'], dest: 'build/'}, // includes files in path and its subdirs
          { expand: true, src: ['scss/clank/**'], dest: 'build/'},
          { expand: true, src: ['scss/clank.scss'], dest: 'build/'},
          { expand: true, src: ['README.md'], dest: 'build/'},
          { expand: true, src: ['css/clank.css'], dest: 'build/'},
          { expand: true, src: ['components/jquery/**'], dest: 'build/'},
          { expand: true, src: ['components/prefix-free/**'], dest: 'build/'},
          {
              expand:true,
              cwd:'',
              dest:'build/',
              src:['index-build.html'],
              rename: function(dest, src) {
                return dest + src.substring(0, src.indexOf('-')) + '.html';
              }
          }
        ]
      }
    }
  });

  // Load contrib tasks...
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Register task aliases
  grunt.registerTask('default', 'make a build of Clank based on the documentation site', ['copy']);

};