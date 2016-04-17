(function() {
  'use strict';
  var gulp = require('gulp'),
    gutil = require('gulp-util'),
    watch = require('gulp-watch'),
    livereload = require('gulp-livereload'),
    jshint = require('gulp-jshint'),
    cfg = require('../config.json'),
    allPaths = cfg.paths.js_lib.concat(cfg.paths.js_app)
      .concat(cfg.paths.css).concat(cfg.paths.server);

  gulp.task('watch', function() {
    if(gutil.env.env == 'qa' || gutil.env.env == 'prod') {
      return false;
    }
    livereload.listen();
    gulp.src(allPaths, {
      read: false
    })
      .pipe(jshint())
      .pipe(jshint.reporter('default'));

    watch(cfg.paths.js_lib.concat(cfg.paths.js_app), ['scripts']);
    watch(cfg.paths.css, ['less']);
    watch(allPaths, livereload.changed);
  });
}());
