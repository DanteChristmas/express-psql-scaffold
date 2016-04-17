(function() {
  'use strict';
  var gulp = require('gulp'),
    gutil = require('gulp-util'),
    nodemon = require('gulp-nodemon');


  gulp.task('nodemon', ['revreplace'], function() {
    if(gutil.env.env != 'qa' || gutil.env.env != 'prod') {
      return nodemon({
        script: 'server/app.js',
        env: {
          'NODE_ENV': gutil.env.env
        }
      });
    }

    return nodemon({
      script: 'server/app.js',
      env: {
        'NODE_ENV': gutil.env.env
      }
    }).on('restart');
  });
}());
