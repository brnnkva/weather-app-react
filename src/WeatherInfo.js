import React from "react";
import FormattedDate from "./FormattedDate";
export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
            <div className="row mt-5">

<div className="col-7 top-left">
    <div className="city">
    <h1>{props.info.city}</h1>
    </div>
    <div className="icon-temperature mt-3">
    <span className="main-temperature"> {props.info.temperature}</span><span className="unit">°C</span>
    <img src={props.info.iconUrl} alt={props.info.description} className="weather-icon"/>
   
    </div>
</div>    

<div className="col-5 top-right">
<ul className="date">
      <li>
         <FormattedDate date={props.info.date}/>
      </li>
  </ul>
    <div className="weather-details">
      <ul>
         <li>
            <span className="weather-description text-capitalize">{props.info.description}</span>
         </li>
         <li>
             <span className="humidity">Humidity</span> {props.info.humidity}%
         </li>
         <li>
             <span className="wind-speed">Wind</span> {props.info.wind} km/h
         </li> 
     </ul>
  </div>
</div>

</div>
        </div>
    );
}