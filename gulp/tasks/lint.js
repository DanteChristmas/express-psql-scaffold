(function() {
  'use strict';
  var gulp = require('gulp'),
    gutil = require('gulp-util'),
    jshint = require('gulp-jshint'),
    cfg = require('../config.json');

  gulp.task('lint', function() {
    if(gutil.env.env == 'qa' || gutil.env.evn == 'prod') {
      return false;
    }
    return gulp.src(cfg.paths.js_lib
        .concat(cfg.paths.js_app).concat(cfg.paths.server))
      .pipe(jshint())
      .pipe(jshint.reporter('default'));
  });
}());
