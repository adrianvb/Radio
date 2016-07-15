'use strict';

angular.module('radioApp', [
  'ionic',
  'ngCordova',
  'ui.router',
  'ngAudio',
  'ngMaterial',
  'ngMdIcons',
  'angular.filter',
  'LocalStorageModule'
])
.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/main');

  $stateProvider
    // this state is placed in the <ion-nav-view> in the index.html
    .state('main', {
      url: '/main',
      templateUrl: 'radio/templates/main.html',
      controller: 'MainController as ctrl'
    })
    .state('list', {
      url: '/list',
      templateUrl: 'radio/templates/list.html',
      controller: 'MainController as ctrl'
    });
});
