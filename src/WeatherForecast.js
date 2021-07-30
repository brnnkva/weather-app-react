import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast(){
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