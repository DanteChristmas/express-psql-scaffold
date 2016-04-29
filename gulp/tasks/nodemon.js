(function() {
  'use strict';
  var gulp = require('gulp'),
    gutil = require('gulp-util'),
    nodemon = require('gulp-nodemon');


  gulp.task('nodemon', ['revreplace'], function() {
    return nodemon({
      script: 'server/app.js',
      env: {
        'NODE_ENV': gutil.env.env
      }
    }).on('restart');
  });
}());
