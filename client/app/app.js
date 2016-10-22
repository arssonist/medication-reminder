'use strict';

angular.module('medicationReminderApp', [
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


  medicationReminderApp.controller('CalenderContoller',function($scope){
    {

   var date = new Date();
   var d = date.getDate();
   var m = date.getMonth();
   var y = date.getFullYear();
   var currentView = "month";


   //event source that pulls from google.com
   $scope.eventSource = {
           url: "http://www.google.com/calendar/feeds/usa__en%40holiday.calendar.google.com/public/basic",
           className: 'gcal-event',           // an option!
           currentTimezone: 'America/Chicago' // an option!
   };

     };
  })();
