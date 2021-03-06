var main = angular.module('Game',['Game.Services','UIFilters','GameFlow','Galaxy']).
	config(['$routeProvider', function($routeProvider){
		$routeProvider.
            when('', {templateUrl: 'partials/start.html', controller: SetupCtrl}).
            when('/overview', {templateUrl: 'partials/overview.html', controller: OverviewCtrl}).
			otherwise({redirectTo: ''});
	}]);

function SetupCtrl($scope, GameService){

}

function OverviewCtrl($scope, GameService){
    $scope.game = GameService.getGame();
}