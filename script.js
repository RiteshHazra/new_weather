
async function checkWeather(city){
	const api_key="1794c4c70adb944c81852b6ea4b1859a";
	const url=`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${api_key}`;
	const response = await fetch(`${url}`);
	
	if(response.status==404){
		document.querySelector(".error").style.display= "block";
		document.querySelector(".weather").style.display= "none";
	}
	var data= await response.json();
	document.querySelector(".city").innerHTML=data.name;
	document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+ "°C";
	document.querySelector(".humidity").innerHTML=data.main.humidity+ " %";
	document.querySelector(".wind-speed").innerHTML=data.wind.speed+ " Km/hr";

	if(data.weather[0].main=="Clear"){
		document.querySelector(".weather-icon").src="images/clear.png";
	}
	else if(data.weather[0].main=="Clouds"){
		document.querySelector(".weather-icon").src="images/drizzle.png";
	}
	else if(data.weather[0].main=="Drizzle"){
		document.querySelector(".weather-icon").src="images/clouds.png";
	}
	else if(data.weather[0].main=="Humidity"){
		document.querySelector(".weather-icon").src="images/humidity.png";
	}
	else if(data.weather[0].main=="Mist"){
		document.querySelector(".weather-icon").src="images/mist.png";
	}
	else if(data.weather[0].main=="Rain"){
		document.querySelector(".weather-icon").src="images/rain.png";
	}
	else if(data.weather[0].main=="Snow"){
		document.querySelector(".weather-icon").src="images/snow.png";
	}
	else if(data.weather[0].main=="Wind"){
		document.querySelector(".weather-icon").src="images/wind.png";
	}
	document.querySelector(".weather").style.display="block";

}

document.querySelector(".btn").addEventListener('click',()=>{
	checkWeather(document.querySelector(".input-box").value);
});
