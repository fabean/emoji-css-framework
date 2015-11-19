'use strict';
module.exports = function (grunt) {
  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt);
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    src: 'src',
    dist: 'dist',
    postcss: {
      options: {
        map: false,
        processors: [
          require('postcss-import')(),
          require('postcss-simple-vars')(),
          require('postcss-simple-extend')(),
          require('postcss-nested')(),
          require('postcss-media-minmax')(),
          require('postcss-merge-rules')(),
          require('postcss-discard-comments')({removeAll: true}),
          require('autoprefixer')({browsers: 'last 2 version'})
        ]
      },
      dist: {
        files: {
          '<%= dist %>/css/style.css': '<%= src %>/css/all.css'
        }
      }
    },
    jade: {
      'compile': {
        'options': {
          'pretty': true,
          'data': { 'debug': false }
        },
        'files': [{
          'expand': true,
          'cwd': '<%= src %>/',
          'src': [
            '*.jade',
            '!_*.jade'
          ],
          'ext': '.html',
          'dest': ''
        }]
      }
    },
    babel: {
      options: {
        sourceMap: true
      },
      dist: {
        'files': { '<%= dist %>/js/scripts.js': '<%= src %>/js/scripts.js' }
      }
    },
    jshint: {
      'options': { 'jshintrc': '.jshintrc' },
      'all': [
        'Gruntfile.js',
        '<%= src %>/js/**/*.js'
      ]
    },
    uglify: {
      options: {
        mangle: false
      },
      my_target: {
        files: {
          '<%= dist %>/js/scripts.min.js': ['<%= dist %>/js/scripts.js']
        }
      }
    },
    watch: {
      'grunt': {
        'files': ['Gruntfile.js'],
        'tasks': [
          'postcss',
          'jade',
          'babel',
          'livereload'
        ]
      },
      'postcss': {
        files: '<%= src %>/css/*.css',
        tasks: ['postcss']
      },
      'babel': {
        'files': '<%= src %>/js/*.js',
        'tasks': ['babel', 'jshint']
      },
      'jade': {
        'files': '<%= src %>/**/*.jade',
        'tasks': ['jade']
      },
      'livereload': {
        'files': [
          '<%= src %>/**/*.jade',
          '<%= src %>/js/**/*.js',
          '<%= src %>/scss/**/*.css'
        ],
        'options': { 'livereload': true }
      }
    },
    connect: {
      'dist': {
        'options': {
          'port': 9001,
          'base': '',
          'open': true,
          'keepalive': false,
          'livereload': true,
          'hostname': '127.0.0.1'
        }
      }
    }
  });
  grunt.registerTask('default', [
    'jade',
    'postcss',
    //'jshint',
    'babel',
    'connect',
    'watch'
  ]);
  grunt.registerTask('build', [
    'jade',
    'postcss',
    //'jshint',
    'babel',
    'uglify',
    'connect'
  ]);
};
