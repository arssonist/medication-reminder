'use strict';

angular.module('medicationReminderApp').controller('MainCtrl', function ($scope, $http, $window,$compile,uiCalendarConfig) {

    var start = moment().format('MM/DD/YYYY'),
        end = moment().add(1, 'day').format('MM/DD/YYYY');

// loop through all meds and try to change properties so that they might display on the page as like preloaded ones did
        $http.get('/api/medications?start=' + start + '&end=' + end).then(function (meds) {
          for ( var i = 0, x = meds.data.length; i < x; i++ ) {
          var med = meds.data[i];

                med.start = med.time;
                med.title = med.name;
          }

                $scope.meds = meds.data;
                console.log(meds.data)
            });

        // console.log(meds.data)
        // $scope.


    $window.setInterval(function () {
        $scope.currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
        $scope.$apply();
    }, 1000);

// calender controller moved here
// *------------------------------------------------------------------*

  // console.log(uiCalendarConfig)

    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();
    var currentView = "month";

// preloaded events from calendar
    //event source that pulls from google.com
    $scope.eventSource = [
      {title: 'All Day Event',start: new Date(y, m, 1)},
      {title: 'Long Event',start: new Date(y, m, d - 5),end: new Date(y, m, d - 2)},
      {id: 999,title: 'Repeating Event',start: new Date(y, m, d - 3, 16, 0),allDay: false},
      {id: 999,title: 'Repeating Event',start: new Date(y, m, d + 4, 16, 0),allDay: false},
      {title: 'Birthday Party',start: new Date(y, m, d + 1, 19, 0),end: new Date(y, m, d + 1, 22, 30),allDay: false},
      {title: 'Click for Google',start: new Date(y, m, 28),end: new Date(y, m, 29),url: 'http://google.com/'}
    ];

// empty array maybe possibly necessary?
    $scope.eventSources = [];

// create a function to use for events
    $scope.myFunction = function(){
      console.log('test');
    }

    /* config object */
    $scope.uiConfig = {
      calendar:{
        height: 450,
        editable: true,
        header:{
          left: 'title',
          center: '',
          right: 'today prev,next'
        },
        eventClick: $scope.myFunction
        // eventDrop: $scope.alertOnDrop,
        // eventResize: $scope.alertOnResize,
        // eventRender: $scope.eventRender
      }
    };




});
