(function() {
  'use strict';
  var gulp = require('gulp'),
    gutil = require('gulp-util'),
    concat = require('gulp-concat'),
    ngmin = require('gulp-ngmin'),
    uglify = require('gulp-uglify'),
    cfg = require('../config.json');

  var shouldUglify = function () {
    return gutil.env.env == 'qa' || gutil.env.env == 'prod'
      ? uglify()
      : gutil.noop()
  };

  gulp.task('scripts', ['templates'], function() {
    //lib scripts
    return gulp.src(cfg.paths.js_lib.concat(cfg.paths.js_app))
      .pipe(concat('app.js'))
      // .pipe(ngmin())
      .pipe(shouldUglify())
      .pipe(gulp.dest('./client/dist'));
  });
}());
