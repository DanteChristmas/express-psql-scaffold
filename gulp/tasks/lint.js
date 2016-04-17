(function() {
  'use strict';
  var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    _paths = ['server/**/*.js', 'client/js/*.js'];

  gulp.task('lint', function() {
    gulp.src(_paths)
      .pipe(jshint())
      .pipe(jshint.reporter('default'));
  });
}());
