import React from "react";
import "./Weather.css";

export default function Weather(){
    return (
        <div className="Weather">
            <form>
            <div className="row w-100">
                <div className="col-8">
                <input 
                type="search" 
                placeholder="enter city" 
                className="form-control"
                autoFocus="on" />
                </div>
              <div className="col-3">
                  <input t
                  ype="submit" 
                  value="Search" 
                  className="btn btn-primary w-100" />
              </div>

            </div>
            </form>

            <div className="row mt-4">
                <div className="col-6 top-left">
                     <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="sunny>" className="weather-icon"/>
                    <span className="main-temperature"> 29</span><span className="unit">°C</span>
       
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
                    <h1>Budapest</h1>
                    <ul className="current-day-time">
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