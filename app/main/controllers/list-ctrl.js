'use strict';
angular.module('main')
.controller('ListCtrl', function ($log) {

  $log.log('Hello from your Controller: ListCtrol in module main:. This is your controller:', this);

  this.options = {
    loop: false,
    effect: 'fade',
    speed: 500,
  };
  //this.audio = ngAudio.load('http://dradio_mp3_dlf_m.akacast.akamaistream.net/7/249/142684/v1/gnl.akacast.akamaistream.net/dradio_mp3_dlf_m'); // returns NgAudioObject

  //
  // $cordovaNativeAudio
  //   .preloadSimple('click', 'http://stream.dradio.de/7/249/142684/v1/gnl.akacast.akamaistream.net/dradio_mp3_dlf_m')
  //   .then(function (msg) {
  //     console.log(msg);
  //   }, function (error) {
  //     alert(error);
  //   });

  // $cordovaNativeAudio
  //   .preloadComplex('music', 'audio/music.mp3', 1, 1)
  //   .then(function (msg) {
  //     console.log(msg);
  //   }, function (error) {
  //     console.error(error);
  //   });
  //
  // $scope.play = function () {
  //   $cordovaNativeAudio.play('click');
  //   $cordovaNativeAudio.loop('music');
  //
  //   // stop 'music' loop and unload
  //   $timeout(function () {
  //     $cordovaNativeAudio.stop('music');
  //
  //     $cordovaNativeAudio.unload('click');
  //     $cordovaNativeAudio.unload('music');
  //   }, 1000 * 60);
  // };
});
