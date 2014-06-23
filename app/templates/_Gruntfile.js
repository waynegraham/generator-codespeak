'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
    connect: {
      options: {
        middleware: function (connect) {

          return [
            connect.static('_site'),
            connect.directory('_site')
          ];
        }
      },
      server: {
        options: {
          port: 4000
        }
      }
    },
    copy: {
      css: {
        files: [
          { expand: true, cwd: 'css/', src: '*', dest: '_site/css', filter: 'isFile' }
        ]
      },
      js: {
        files: [
          { expand: true, cwd: 'js/', src: '*', dest: '_site/js', filter: 'isFile' }
        ]
      },
      img: {
        files: [
          { expand: true, cwd: 'img/', src: '*', dest: '_site/img', filter: 'isFile' }
        ]
      },
      fonts: {
        files: [
          { expand: true, cwd: 'fonts/', src: '*', dest: '_site/fonts', filter: 'isFile' }
        ]
      }
    },
    exec: {
      build: {
        cmd: 'jekyll build'
      }
    },
    watch: {
      jekyll: {
        files: ['**/*.html', '**/*.md', '!README.md', '!_site/**/*', 'stylesheets/*.scss'],
        tasks: ['exec:build'],
        options: {
          livereload: true
        }
      },
      js: {
        files: ['js/**/*.js'],
        tasks: ['copy:js'],
        options: {
          livereload: true
        }
      },
      images: {
        files: ['images/**/*'],
        tasks: ['copy:img'],
        options: {
          livereload: true
        }
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-exec');

  grunt.registerTask('default', ['connect', 'exec:build', 'watch']);
  grunt.registerTask('anvil', ['exec:build', 'watch']);
  grunt.registerTask('serve', ['default']);

};
