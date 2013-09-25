'use strict';

/* Controllers */

console.log('> controller.js');

(function() {

	frisbeeModule.controller('MainCtrl', function ($scope, $http) {
	  
	});

	frisbeeModule.controller('ScheduleCtrl', function ($scope, $http) {

		console.log('> ScheduleCtrl');

		$http.get('data/schedule.json')
		  .success(function(data) {
		    $scope.schedule = data;
		  })
		  .error(function(data, status, headers, config) {
		  	console.log('ScheduleCtrl http get error')
		  });
	 
	});

	frisbeeModule.controller('GameCtrl', function ($scope, $http) {

		console.log('> GameCtrl');

		$http.get('data/game.json')
		  .success(function(data) {
		    $scope.game = data;
		  })
		  .error(function(data, status, headers, config) {
		  	console.log('GameCtrl http get error')
		  });

		  $scope.orderScore = 'score';
	 
	});

	frisbeeModule.controller('RankingCtrl', function ($scope, $http) {

		console.log('> RankingCtrl')
	  
		$http.get('data/ranking.json')
		  .success(function(data) {
		    $scope.ranking = data;
		  })
		  .error(function(data, status, headers, config) {
		  	console.log('RankingCtrl http get error')
		  });

		$scope.orderPointsWin = 'pointsWin';
	 
	});

})();
