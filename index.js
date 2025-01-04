function getData()
{
    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=mumbai';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '298bc225f6msh9aa52db5098037bp164917jsnabbdc50d2510',
		'x-rapidapi-host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

try {
	//const response = await fetch(url, options);
	//const result = await response.text();
	console.log(result);
} 
catch (error) {
	console.error(error);
}
}
