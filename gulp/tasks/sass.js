(function() {
  var gulp = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    cfg = require('../config.json');

  var shouldCompress = function () {
    return gutil.env.env != 'qa' && gutil.env.env != 'prod'
      ? sass().on('error', sass.logError)
      : sass({outputStyle: 'comperessed'}).on('error', sass.logError);
  };

  gulp.task('sass', function () {
    return gulp.src(cfg.paths.css)
      .pipe(concat('app.scss'))
      .pipe(shouldCompress())
      .pipe(gulp.dest('./client/dist'));
  });
}());
