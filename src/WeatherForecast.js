import React, { useState } from "react";
import "./WeatherForecast.css";
import ForecastDay from "./ForecastDay";
import axios from "axios";

export default function WeatherForecast(props){
 let [loaded, setLoaded] = useState(false);
 let [forecastData, setForecastData] = useState(null);
 let [icon, setIcon] =useState(" ");
 
    function handleResponse(response){
       setForecastData(response.data.daily);
       setIcon({
            url: `http://openweathermap.org/img/wn/${response.data.daily[0].weather[0].icon}@2x.png`,
            description: response.data.daily[0].weather[0].icon
        });
        setLoaded(true);
    };

    if (loaded){
        return (
            <ForecastDay forecast={forecastData[0]} icon={icon}/>
        );
    } else {
        let apiKey="a2448133104335b630f878b5541b3167";
        let longitude=props.coords.lon;
        let latitude=props.coords.lat;
        let  apiUrl= `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    
     axios.get(apiUrl).then(handleResponse);
     return null;
    }
   
}