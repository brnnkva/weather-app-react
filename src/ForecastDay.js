import React from "react";

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
            <div className="WeatherForecast">
                <div className="row">
                    <div className="col">
                        <div className="forecast-day">
                            {day()}
                        </div>
                        <div className="forecast-img">
                        <img src={props.icon.url} alt={props.icon.description}/>
                        </div>
                        <span className="forecast-temp-max">
                          {maxTemp()}
                        </span>
                        <span className="forecast-temp-min">
                        {minTemp()}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}