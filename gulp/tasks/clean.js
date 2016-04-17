(function() {
  var gulp = require('gulp'),
    del = require('del');

  gulp.task('clean', function(cb) {
    return del(['client/dist', 'server/views/dist'], cb);
  });
}());
