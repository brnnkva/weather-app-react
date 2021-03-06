import React from "react";
import WeatherTemp from "./WeatherTemp";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import "./WeatherInfo.css";



export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
            <div className="row mt-3">
                 <div className="col-7 top-left">
                      <div className="city">
                           <h1 className="text-uppercase">{props.info.city}</h1>
                      </div>
                     <div className="row icon-temperature mt-3">
                         <div className="col-3 temperature-wrapper">
                         <WeatherTemp celsius={props.info.temperature} /> 
                         </div>
                         <div className="col-6 icon-wrapper">
                             <WeatherIcon code={props.info.icon} size={53}/>
                         </div>
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
                             Humidity <span className="humidity">{props.info.humidity}%</span>
                           </li>
                            <li>
                             Wind <span className="wind-speed">{props.info.wind} km/h</span>
                          </li> 
                     </ul>
                 </div>
             </div>
         </div>
        </div>
    );
}