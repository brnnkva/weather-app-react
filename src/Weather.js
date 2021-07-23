import axios from "axios";
import Loader from "react-loader-spinner";
import React, { useState } from "react";
import "./Weather.css";

export default function Weather(props){
    let [weatherData, setWeatherData] = useState({loaded: false});

    function handleResponse(response){
        console.log(response.data);
       setWeatherData({
           loaded: true,
           temperature: Math.round(response.data.main.temp),
           city: response.data.name,
           description: response.data.weather[0].description,
           humidity: response.data.main.humidity,
           wind: response.data.wind.speed,
           iconUrl: `https://ssl.gstatic.com/onebox/weather/64/sunny.png`
       });
    }

    if (weatherData.loaded) {
        return (
            <div className="Weather">
                <div className="row header">
                    <div className="col-8">
                    <div className="search-form">
                  <form>
                    <div className="row">
                        <div className="col-6">
                         <input 
                          type="search" 
                          placeholder="enter city" 
                          className="form-control"
                          autoFocus="on" />
                      </div>
                      <div className="col-2">
                          <input 
                          type="submit" 
                          value="search" 
                          className="btn btn-primary" />
                      </div>
                   </div>
                  </form>
                </div>
                    </div>
                    <div className="col-4">
                    <ul className="current-day-time">
                            <li>
                                tuesday, july 13
                            </li>
                            <li>
                                12:30
                            </li>
                        </ul>
                    </div>
                </div>
    
                
                
                <div className="row mt-4">
                    <div className="col-8 top-left">
                         <img src={weatherData.iconUrl} alt={weatherData.description} className="weather-icon"/>
                        <span className="main-temperature"> {weatherData.temperature}</span><span className="unit">°C</span>
                        <h1>{weatherData.city}</h1>
                  </div>    
                   
                    
                    <div className="col-4 top-right">
                      
                    
                        <div className="weather-details">
                          <ul>
                             <li>
                                 description: {weatherData.description}
                             </li>
                             <li>
                                 humidity: {weatherData.humidity}%
                             </li>
                             <li>
                                 wind: {weatherData.wind} km/h
                             </li> 
                         </ul>
                      </div>
                    </div>
    
                </div>
    
            </div>
        ) 
    } else {
        let apiKey = "a2448133104335b630f878b5541b3167";
        let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
        return (
            <Loader
              type="Grid"
              color="#00BFFF"
              height={100}
              width={150}
              timeout={3000} 
            />
          );;
    }
}