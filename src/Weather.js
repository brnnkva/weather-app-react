import React, { useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";

export default function Weather(props){
    let [weatherData, setWeatherData] = useState({loaded: false});
    let [city, setCity] = useState(props.defaultCity);
    function handleResponse(response){
       setWeatherData({
           loaded: true,
           date: new Date (response.data.dt * 1000),
           temperature: Math.round(response.data.main.temp),
           city: response.data.name,
           description: response.data.weather[0].description,
           humidity: response.data.main.humidity,
           wind: response.data.wind.speed,
           iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
       });
    }

function search(){
    let apiKey = "a2448133104335b630f878b5541b3167";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
}

 function handleSubmit(event){
  event.preventDefault();
  search();
 }

 function handleCityChange(event){
     setCity(event.target.value);
 }

    if (weatherData.loaded) {
        return (
            <div className="Weather">
                <div className="search-form">
                   <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col">
                         <input 
                          type="search" 
                          placeholder="Enter a city" 
                          className="form-control"
                          autoFocus="off" 
                          autoComplete="off"
                          onChange={handleCityChange}
                          />
                      </div>
                      <div className="col-2">
                          <input 
                          type="submit" 
                          value="" 
                          className="btn btn-primary" />
                      </div>
                   </div>
                  </form>
                </div>
                <WeatherInfo info={weatherData}/>
                <WeatherForecast />
          </div>
        ) 
    } else {
       search();
        return (
            <Loader
              type="Grid"
              color="#00BFFF"
              height={100}
              width={680}
              timeout={3000} 
            />
          );;
    }
}