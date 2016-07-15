'use strict';
angular.module('radioApp')
.service('Stations', function ($log, $http, $q) {

  var deferred = $q.defer();

  // some initial data
  this.someData = {
    binding: 'Yes! Got that databinding working'
  };

  this.get = function () {
    $http.get('radio/assets/stations.json').then(function (stations) {
      deferred.resolve(stations.data);
    });

    return deferred.promise;
  };

});
