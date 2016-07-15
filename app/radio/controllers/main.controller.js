'use strict';

angular.module('radioApp').controller('MainController', function ($log, $filter, $scope, Stations, ngAudio, localStorageService) {
  var ctrl = this;

  this.audio = null;
  this.stations = [];

  this.currentStation = {};
  this.likedStations = [];
  this.logStack = [];

  Stations.get().then(function (stations) {
    ctrl.stations = stations;
    //$log.log(stations);

    angular.forEach(ctrl.stations, function (station) {
      var isLiked = localStorageService.get('fav-' + station.title);
      if (isLiked) {
        station.liked = true;
        ctrl.likedStations.push(station);
      }
    });

    ctrl.filteredStations = stations.slice(0, 100);

  });

  $scope.$watch('search', function (term) {
    ctrl.filteredStations = $filter('filter')(ctrl.stations, term);
  });


  this.like = function (station) {
    if (station.liked) {
      localStorageService.remove('fav-' + station.title);
    } else {
      localStorageService.set('fav-' + station.title, true);
      ctrl.likedStations.push(station);
    }
    station.liked = !station.liked;
  };

  this.log = function () {
    var buf = [];

    angular.forEach(arguments, function (arg) {
      buf.push(arg);
    });
    this.logStack.push(buf.join(' '));

    $log.log(arguments);
  };

  this.playStation = function (station) {
    if (station.playing) {
      // wenn die Station abgespielt wird, sollte wohl gestoppt werden
      this.audio.stop();
      station.playing = false;
      this.currentStation = null;
    }
    else {


      // die Station spielt nicht
      // zuerst die Anzeige anpassen
      angular.forEach(ctrl.stations, function (station) {
        station.playing = false;
      });

      // Audio stoppen wenn es schon läuft
      if (this.audio !== null && !this.audio.canPlay) {
        this.audio.stop();
      }

      // Stream laden
      try {
        this.log('loading ', station.stream_url);
        this.audio = ngAudio.load(station.stream_url);
      } catch(error) {
        this.log(error);
      }
      // und abspielen
      this.audio.volume = 0;
      this.audio.play();

      // die Anzeige auf Play setzen
      station.playing = true;

      this.currentStation = station;
    }
  };


});
