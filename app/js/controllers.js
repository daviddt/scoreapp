'use strict';

/* Controllers */

FRISBEE.controller('ScheduleListCtrl', function ($scope, $http)) {
  $http.get('data/schedule.json').

  success(function(data) {
    $scope.schedule = data;
  }).

  error(function(data, status, headers, config) {
  	console.log('ScheduleListCtrl http get error')
  });
 
}
