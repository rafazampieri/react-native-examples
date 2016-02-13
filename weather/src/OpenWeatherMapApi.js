module.exports = function(latitude, longitude){
	var rootUrl = 'http://api.openweathermap.org/data/2.5/weather?appid=5a55bcb309dbbb113b9b8a7108694437'

	var url = `${rootUrl}&lat=${latitude}&lon=${longitude}`;
	console.log(url);

	return fetch(url).then(function(response){ return response.json() })
		.then(function(json){
			console.log(json);

			var temperature = Math.round(json.main.temp - 273);
			temperature = `${temperature} °C`;

			return {
				city: json.name
				, description: json.weather[0].description
				, temperature: temperature
			}
		})
		.catch(function(error){
			console.log(error);
			return '';
		});
}