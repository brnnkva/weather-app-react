import React from "react";
import "./Weather.css";

export default function Weather(){
    return (
        <div className="Weather">
            <div className="row">
                
                <div className="col-6 top-left">
                      <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="sunny>" className="weather-icon"/>
                    <span className="main-temperature"> 29°C</span>
                    <div className="weather-details">
                      <ul>
                         <li>
                             Description: sunny
                         </li>
                         <li>
                             Humidity: 50%
                         </li>
                         <li>
                             Wind: 10 km/h
                         </li> 
                     </ul>
                  </div>
               </div>
                
                <div className="col-6 top-right">
                    <h3>Budapest</h3>
                    <ul>
                        <li>
                            Tuesday, July 13
                        </li>
                        <li>
                            12:30
                        </li>
                    </ul>
                </div>

            </div>

        </div>
    )
}