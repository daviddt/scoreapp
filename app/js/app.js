var frisbeeModule = angular.module('frisbee', ['frisbeeControllers']);

(function() {

	'use strict';

	/* App Module */

	console.log('> app.js');

	frisbeeModule.config(['$routeProvider', function($routeProvider) {

		$routeProvider
			.when('/schedule', {
				templateUrl: 'partials/schedule.html',
				controller: 'GameCtrl'
			})
			.when('/game', {
				templateUrl: 'partials/game.html',
				controller: 'GameCtrl'
			})
			.when('/ranking', {
				templateUrl: 'partials/ranking.html',
				controller: 'RankingCtrl'
			})
			.when('/game/:gameId', {
				templateUrl: 'partials/game-detail.html',
				controller: 'GameDetailCtrl'
			})
			.otherwise({redirectTo: '/schedule'});

	}]);

})();