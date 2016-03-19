module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      js: {
        src: [
          //files
          './bower_components/angular/angular.js',
          './bower_components/angular-material/angular-material.js',
          './bower_components/angular-animate/angular-animate.js',
          './bower_components/angular-aria/angular-aria.js',
          './js/**/*.js'
        ], 
        dest: './dist/application.js'
      },
      css: {
        src: [
        //files§
        './css/**/*.css',
        '.bower_components/angular-material/angular-material.css'
        ], 
        dest: './dist/application.css'
      }
    },
    uglify: {
      options: {
        mangle: false
      },
      js: {
        files: {
          './dist/application.min.js': './dist/application.js'
        },
      },
    },
    cssmin: {
      options: {
        shorthandCompacting: true,
        keepSpecialComments : 0,

      },
      target: {
        files: {
          './dist/application.min.css': './dist/application.css'
        }
      }
    },
    watch: {
      js: {
        files: [
          './js/**/*.js',
          './css/**/*.css',
          ],
        tasks: ['concat', 'uglify', 'cssmin']
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['watch']); 
  grunt.registerTask('dist', ['concat', 'uglify', 'cssmin']); 
}