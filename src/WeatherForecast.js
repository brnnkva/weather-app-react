import React from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props){

    function handleResponse(response){
        console.log(response.data);
    }
        let apiKey="a2448133104335b630f878b5541b3167";
        let longitude=props.coords.lon;
        let latitude=props.coords.lat;
       let  apiUrl= `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    
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