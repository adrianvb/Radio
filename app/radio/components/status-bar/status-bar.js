'use strict';

angular.module('radioApp').component('statusBar', {
  templateUrl: 'radio/components/status-bar/status-bar.html',

  controller: function () {
    this.playStation = function () {
      this.station.playing = false;
      this.audio.stop();
    };

  },
  controllerAs: 'ctrl',
  bindings: {
    station: '=',
    audio: '='
  }
});
