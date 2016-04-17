(function() {
  var gulp = require('gulp'),
    gutil = require('gulp-util'),
    less = require('gulp-less'),
    cfg = require('../config.json');

  var shouldCompress = function () {
    return gutil.env.env != 'qa' && gutil.env.env != 'prod'
      ? less()
      : less({compress: true});
  };

  gulp.task('less', function () {
    return gulp.src(cfg.paths.css)
      .pipe(shouldCompress())
      .pipe(gulp.dest('./client/dist'));
  });
}());
