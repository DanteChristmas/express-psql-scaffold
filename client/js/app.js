'use strict';
angular.module('templates', []);
angular.module('reddit-clone', ['templates'])
  .run(function($http, $log) {
    $http.jsonp('http://ksu-oas-web-int.slabs-cloud.com/v3/sports')
    .then(function (data) {
      $log.info(data.data);
    });
  });
