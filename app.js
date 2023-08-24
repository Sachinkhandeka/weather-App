
//fetching api
let apiKey = '2bcb842e134937aa26e32d2d50e918dd';
let apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

//selecting html elmnt to manipulate content
let temp  = document.querySelector(".temp");
let humidity = document.querySelector(".humidity");
let windSpeed = document.querySelector(".wind");
let weatherIcon = document.querySelector(".weather-icon");


//search(input) &  btn 
let searchBox = document.querySelector(".search input");
let searchBtn = document.querySelector(".search button");


//async function to fetch data in the form of- resolve or reject.

async function checkWeather(city) {

    try {
        const res = await axios.get(apiUrl+ city +`&appid=${apiKey}`);
        console.log(res);
        


        //updting content according to input
         document.querySelector(".city").innerHTML = res.data.name;
         temp.innerHTML = Math.round(res.data.main.temp) + "°c";
         humidity.innerHTML = res.data.main.humidity + "%"; 
         windSpeed.innerHTML = res.data.wind.speed + " km/h";

         //updating images
         if(res.data.weather[0].main === 'Clouds'){
            weatherIcon.setAttribute("src" , 'images/clouds.png');
         }
         else if(res.data.weather[0].main === "Clear") {
            weatherIcon.setAttribute("src" , 'images/clear.png');
         }
         else if(res.data.weather[0].main === "Rain") {
            weatherIcon.setAttribute("src" , 'images/rain.png');
         }
         else if(res.data.weather[0].main === "Drizzle") {
            weatherIcon.setAttribute("src" , 'images/drizzle.png');
         }
         else if(res.data.weather[0].main === "Mist") {
            weatherIcon.setAttribute("src" , 'images/mist.png');
         }
    }

    catch(err) {
        return "ERROR occured while calling API",err ;
    }
    

}

//eventlistener to get city name from -(input) & click to -search weather

searchBtn.addEventListener("click" , ()=> {

    checkWeather(searchBox.value);
    searchBox.value = "";

});





