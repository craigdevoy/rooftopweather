rooftopweather.directive('rtWeatherCard', ['$rootScope', function($rootScope) {
	return {
		restrict: 'E',
		scope: {
			data: '=data',
			index: '=index'

		},
		templateUrl: 'weather-card.html',
		link: function (scope) {
			scope.remove = function(){
				$rootScope.$broadcast('REMOVE_CARD', scope.index)
			}
		}
	};

}]);
