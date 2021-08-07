import React from "react";
import WeatherIcon from "./WeatherIcon";


export default function ForecastDay(props){

  function day(){
      let date = new Date(props.forecast.dt * 1000);
      let day = date.getDay();
      let days =  [
        "Sun",
        "Mon",
       "Tue", 
       "Wed", 
       "Thu", 
       "Fri",
       "Sat"
       ];
       return days[day];
  }  

  function maxTemp(){
      let temperature= Math.round(props.forecast.temp.max);
      return `${temperature}°`;
  }

  function minTemp(){
    let temperature= Math.round(props.forecast.temp.min);
    return  `${temperature}°`;
}

    return (
        <div className="ForecastDay">    
                        <div className="forecast-day">
                            {day()}
                        </div>
                        <div className="forecast-img">
                      <WeatherIcon code={props.forecast.weather[0].icon} size={45}/>
                        </div>
                        <span className="forecast-temp-max">
                          {maxTemp()}
                        </span>
                        <span className="forecast-temp-min">
                        {minTemp()}
                        </span>
        </div>
    )
}