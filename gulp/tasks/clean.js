(function() {
  var gulp = require('gulp'),
    del = require('del');

  gulp.task('clean', function(cb) {
    del(['client/dist', 'server/view/dist'], cb);
  });
}());
