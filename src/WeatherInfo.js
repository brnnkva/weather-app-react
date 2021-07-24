import React from "react";
import FormattedDate from "./FormattedDate";
export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
            <div className="row mt-5">

<div className="col-8 top-left">
    <div className="city-date">
    <h1>{props.info.city}</h1>
  <ul>
      <li>
         <FormattedDate date={props.info.date}/>
      </li>
  </ul>
    </div>
    <div className="icon-temperature mt-3">
    <img src={props.info.iconUrl} alt={props.info.description} className="weather-icon"/>
    <span className="main-temperature"> {props.info.temperature}</span><span className="unit">°C</span>
    </div>
</div>    

<div className="col-4 top-right">
    <div className="weather-details">
      <ul>
         <li>
            <span className="weather-description">{props.info.description}</span>
         </li>
         <li>
             <span className="humidity">humidity</span> {props.info.humidity}%
         </li>
         <li>
             <span className="wind-speed">wind</span> {props.info.wind} km/h
         </li> 
     </ul>
  </div>
</div>

</div>
        </div>
    );
}