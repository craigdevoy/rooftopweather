rooftopweather.factory('OpenWeatherInterface', ['$http', function ($http){

		return {

			getByCity : function(city){

				return $http({
					method: 'GET',
					url: 'http://api.openweathermap.org/data/2.5/weather',
					params: {'q':city, 'appid':'f27bd4ce01d2b96c600356807e31a194'}
				})
			}
		}

}]);