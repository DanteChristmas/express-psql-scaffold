(function() {
  'use strict';
  var gulp = require('gulp'),
    gutil = require('gulp-util'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    cfg = require('../config.json');

  var shouldUglify = function () {
    return gutil.env.env == 'qa' || gutil.env.env == 'prod'
      ? uglify()
      : gutil.noop()
  };

  gulp.task('scripts', function() {
    //lib scripts
    gulp.src(cfg.paths.js_lib)
      .pipe(concat('lib.js'))
      .pipe(shouldUglify())
      .pipe(gulp.dest('./client/dist'));

    //app scripts
    return gulp.src(cfg.paths.js_app)
      .pipe(concat('app.js'))
      .pipe(shouldUglify())
      .pipe(gulp.dest('./client/dist'))
  });
}());
