(function () {
  'use strict';

  var gulp = require('gulp'),
    templateCache = require('gulp-angular-templatecache');

  gulp.task('templates', [], function() {
    return gulp.src('client/js/partials/**/*.html')
      .pipe(templateCache())
      .pipe(gulp.dest('client/dist'));
  });
}());
