(function() {
  'use strict';
  var gulp = require('gulp');
  var nodemon = require('gulp-nodemon');


  gulp.task('nodemon', function() {
    nodemon({
      script: 'server/app.js',
      env: {
        'NODE_ENV': 'development'
      }
    }).on('restart');
  });
}());
