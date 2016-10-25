'use strict';

var app = angular.module('medicationReminderApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'ui.calendar'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });

// /Calendar controller in here for now
  app.controller('CalenderContoller',function($scope){

    console.log(uiCalenderConfig)


  });
