/*
   Gruntfile for Clank
  Tasks: run grunt -h to see available tasks or read source.
*/

'use strict';

module.exports = function(grunt) {

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
          },
          {
              expand:true,
              cwd:'',
              dest:'build/',
              src:['config-build.rb'],
              rename: function(dest, src) {
                return dest + src.substring(0, src.indexOf('-')) + '.rb';
              }
          }
          
        ]
      }
    },

    uglify: {
      options: {
        mangle: false
      },
      files: {
        src : [
               'components/jquery/jquery.js',
               'components/angular/angular.js',
               'components/angular-cookies/angular-cookies.js',
               'components/prefix-free/prefixfree.js',
               'js/docs/**.js',
               'js/clank/**.js'
               ],
        dest : 'js/all.min.js'
      }
    },
    
    shell: {
        buildLive: {
            command: 'jekyll build -w --config _config-live.yml --no-auto',
            options: {
                stdout: true
            }
        }
    }
    
  });

  // Load contrib tasks...
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-shell');

  // Register task aliases
  grunt.registerTask('default', 'Make a build of Clank based on the documentation site', ['copy']);
  grunt.registerTask('build-docs', 'Generate minified JS for docs site and build with Jekyll', ['uglify','shell:buildLive']);

};