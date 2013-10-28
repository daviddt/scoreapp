(function() {

	'use strict';

	/* Controllers */

	console.log('> controller.js');

	var frisbeeControllers = angular.module('frisbeeControllers', []);

	var access_token = "82996312dc";
	var tournamentID = "19389";

	frisbeeControllers.controller('MainCtrl', function ($scope, $location) {
		$scope.isActive = function(route) {
        	return $location.path().indexOf(route) !== -1;
    	}
	  
	});

	/*frisbeeControllers.controller('FetchCtrl', function ($scope, $http, $templateCache) {
		$scope.method = 'GET';
		$scope.url = 'https://api.leaguevine.com/v1/games/?tournament_id=19389'
		$scope.headers = { 
			'Content-Type': 'application/x-www-form-urlencoded',
			'Accept': 'application/json',
			'Authorization': 'bearer 82996312dc' 
		};
	 
	  $scope.fetch = function() {
	 
	    $http({method: $scope.method, url: $scope.url, headers: $scope.headers, cache: false}).
	      success(function(data, status) {
	      	console.log(data);
	        $scope.status = status;
	        $scope.data = data;
	      }).
	      error(function(data, status) {
	        $scope.data = data || "Request failed";
	        $scope.status = status;
	    });
	  };

	});*/

	frisbeeControllers.controller('updateCtrl', function ($scope, $http, $routeParams) {
		console.log('> updateCtrl');
		$scope.game = {};

		$scope.update = function(game) {
			$scope.game = angular.copy(game);
			console.log($scope.game);

			$scope.method = 'POST';
			$scope.url = 'https://api.leaguevine.com/v1/game_scores/';
			$scope.headers = {
				'Content-Type': 'application/json',
				'Accept': 'application/json',
				'Authorization': 'bearer 82996312dc'
			};
			//82996312dc
			$scope.gameID;
			$scope.start = new Date();
			$scope.end;			

			$scope.postData = {
				'game_id': $routeParams.gameId,
				'team_1_score': $scope.game.scoreTeam1,
				'team_2_score': $scope.game.scoreTeam2,
				'isFinal': $scope.game.isFinal || false
			};

			console.log($scope.postData);

			$http({
				method: $scope.method,
				url: $scope.url,
				data: $scope.postData,
				headers: $scope.headers,
				cache: false
			}).
		      success(function(data, status) {
		      	$scope.end = new Date();
		      	console.log("Operation took " + ($scope.end.getTime() - $scope.start.getTime()) + " msec. Status " + status);
		      	console.log(data);
		        $scope.status = status;
		        $scope.data = data;
		      })
		      .error(function(data, status) {
		        $scope.data = data || "Request failed";
		        $scope.status = status;
		        console.log(data + ' ' + status);
		    });
		};
	});

	frisbeeControllers.controller('GameDetailCtrl', function ($scope, $http, $routeParams) {
		console.log('> GameDetailCtrl');
		//$scope.gameId = $routeParams.gameId;
		$scope.method = 'GET';
		$scope.url = 'https://api.leaguevine.com/v1/game_scores/?game_id=' + $routeParams.gameId + '&limit=' + 1;
		$scope.headers = { 
			'Content-Type': 'application/x-www-form-urlencoded',
			'Accept': 'application/json',
			'Authorization': 'bearer 82996312dc' 
		};
		$scope.gameID;
		$scope.postData = {
			'game_id': $routeParams.gameId,
			'limit': 1
		};
		$scope.start = new Date();
		$scope.end;

			
		$http({method: $scope.method, url: $scope.url, headers: $scope.headers, cache: false}).
	      success(function(data, status) {
	      	$scope.end = new Date();
	      	console.log("Operation took " + ($scope.end.getTime() - $scope.start.getTime()) + " msec. Status " + status);
	      	console.log(data.objects[0]);
	        $scope.status = status;
	        $scope.data = data.objects[0];
	      })
	      .error(function(data, status) {
	        $scope.data = data || "Request failed";
	        $scope.status = status;
	    });
	});

	frisbeeControllers.controller('GameCtrl', function ($scope, $http) {
		console.log('> GameCtrl');
		$scope.loading = true;
		$scope.method = 'GET';
		$scope.url = 'https://api.leaguevine.com/v1/games/?tournament_id=19389';
		$scope.headers = { 
			'Content-Type': 'application/x-www-form-urlencoded',
			'Accept': 'application/json',
			'Authorization': 'bearer 82996312dc' 
		};
		$scope.gameID;
		$scope.start = new Date();
		$scope.end;

			
		$http({method: $scope.method, url: $scope.url, headers: $scope.headers, cache: false}).
	      success(function(data, status) {
	      	$scope.loading = false;
	      	$scope.end = new Date();
	      	console.log("Operation took " + ($scope.end.getTime() - $scope.start.getTime()) + " msec. Status " + status);
	      	console.log(data);
	        $scope.status = status;
	        $scope.data = data.objects;
	      })
	      .error(function(data, status) {
	        $scope.data = data || "Request failed";
	        $scope.status = status;
	    });

	});

	frisbeeControllers.controller('RankingCtrl', function ($scope, $http) {
		console.log('> RankingCtrl');
		$scope.loading = true;
		$scope.method = 'GET';
		$scope.url = 'https://api.leaguevine.com/v1/pools/?tournament_id=19389';
		$scope.headers = { 
			'Content-Type': 'application/x-www-form-urlencoded',
			'Accept': 'application/json',
			'Authorization': 'bearer 82996312dc' 
		};
		$scope.gameID;
		$scope.start = new Date();
		$scope.end;

			
		$http({method: $scope.method, url: $scope.url, headers: $scope.headers, cache: false})
	      .success(function(data, status) {
	      	$scope.loading = false;
	      	$scope.end = new Date();
	      	console.log("Operation took " + ($scope.end.getTime() - $scope.start.getTime()) + " msec. Status " + status);
	      	console.log(data.objects[0].standings);
	        $scope.status = status;
	        $scope.data = data.objects[0].standings;
	      })
	      .error(function(data, status) {
	        $scope.data = data || "Request failed";
	        $scope.status = status;
	    });

	});

})();
