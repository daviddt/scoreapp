'use strict';

/* App Module */

console.log("> app.js");

var frisbeeModule = angular.module('frisbee', []);

(function() {

	frisbeeModule.config(['$routeProvider', function($routeProvider) {

		$routeProvider
			.when('/schedule', {
				templateUrl: 'partials/schedule.html',
				controller: 'ScheduleCtrl'
			})
			.when('/game', {
				templateUrl: 'partials/game.html',
				controller: 'GameCtrl'
			})
			.when('/ranking', {
				templateUrl: 'partials/ranking.html',
				controller: 'RankingCtrl'
			})
			.otherwise({redirectTo: '/schedule'});

	}]);

})();