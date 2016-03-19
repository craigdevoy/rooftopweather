rooftopweather.directive('rtWeatherCard', ['$rootScope', function($rootScope) {
	return {
		restrict: 'E',
		scope: {
			data: '=data',
			index: '=index'

		},
		templateUrl: 'weather-card.html',
		link: function (scope) {
			scope.derp = "blah whatever";
			scope.remove = function(){
				$rootScope.$broadcast('REMOVE_CARD', scope.index)
			}
		}
	};

}]);