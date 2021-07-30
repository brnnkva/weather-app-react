import React from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(){

    function handleResponse(response){
        console.log(response.data);
    }
    
        apiKey="a2448133104335b630f878b5541b3167";
        longitude=19;
        latitude=47.4;
        apiUrl= `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
    
        axios.get(apiUrl).then(handleResponse);

    return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                    <div className="forecast-hour">
                        14:00
                    </div>
                    <div className="forecast-img">
                        <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="rain"/>
                    </div>
                    <span className="forecast-temp-max">
                        19
                    </span>
                    <span className="forecast-temp-min">
                        10
                    </span>
                </div>
            </div>
        </div>
    );
}