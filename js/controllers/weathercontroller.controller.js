rooftopweather.controller('WeatherController', ['$scope', 'OpenWeatherInterface', function($scope, OpenWeatherInterface){

		$scope.city = null;
		$scope.cards = [];
		
		$scope.getWeatherByCity = function(){

			OpenWeatherInterface.getByCity($scope.city).then(function(response){
			console.log(response)

			$scope.city = null;

			$scope.cards.push(response.data)

		},
			function(error){
			console.error(error)
		}
		)
	};

	$scope.$on('REMOVE_CARD', function(e, index) {
		$scope.cards.splice(index, 1);

	})

}]);