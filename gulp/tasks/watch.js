(function() {
  'use strict';
  var gulp = require('gulp'),
    gutil = require('gulp-util'),
    watch = require('gulp-watch'),
    livereload = require('gulp-livereload'),
    jshint = require('gulp-jshint'),
    cfg = require('../config.json'),
    allPaths = cfg.paths.js_lib.concat(cfg.paths.js_app)
      .concat(cfg.paths.css).concat(cfg.paths.server)
      .concat(cfg.paths.layout).concat(['./client/js/partials/**/*.html']);

  gulp.task('watch', ['revreplace'], function() {
    if(gutil.env.env == 'qa' || gutil.env.env == 'prod') {
      return false;
    }
    livereload.listen();
    gulp.src(allPaths, {
      read: false
    })
      .pipe(jshint())
      .pipe(jshint.reporter('default'));

    watch(cfg.paths.js_lib.concat(cfg.paths.js_app).concat(['client/js/partials/**/*.html', 'client/js/partials/*.html']), ['templates','scripts']);
    watch(cfg.paths.css, ['less']);
    watch(cfg.paths.layout, ['revReplace']);
    watch(allPaths, livereload.changed);
  });
}());
