'use strict';

/* App Module */


(function() {

window.frisbeeModule = angular.module('frisbee', []);

frisbeeModule.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/schedule', {templateUrl: 'schedule.html',   controller: ScheduleListCtrl}).
	      otherwise({redirectTo: '/schedule'});
}]);

})();