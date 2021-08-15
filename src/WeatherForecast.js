import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import ForecastDay from "./ForecastDay";
import axios from "axios";

export default function WeatherForecast(props){
 let [loaded, setLoaded] = useState(false);
 let [forecastData, setForecastData] = useState(null);

useEffect(() => {
setLoaded(false);
}, [props.coords]);
 
    function handleResponse(response){
       setForecastData(response.data.daily);
        setLoaded(true);
    };

    if (loaded){
        return (
            <div className="WeatherForecast">
                 <hr />
                <div className="row">
                {forecastData.map(function(dailyForecast, index){
                    if (index > 0 && index < 6) {
                        return  (
                            <div className="col" key={index}>
                              <ForecastDay forecast={dailyForecast}/>
                              </div>
                        );
                    }
                })}
                </div>
            </div> 
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