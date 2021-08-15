import React, { useState } from "react";
import "./WeatherTemp.css";

export default function WeatherTemp(props){
let [unit, setUnit] = useState("celsius");

    function showFahrenheit(event){
        event.preventDefault();
        setUnit("fahrenheit");
    }

    function showCelsius(event){
        event.preventDefault();
        setUnit("celsius");
    }

    if (unit === "celsius"){
        return (
            <div className="WeatherTemp">
                <span className="main-temperature">{props.celsius}</span>
                <span className="unit">°C</span>
                <span className="unit-fa"><a href="/" onClick={showFahrenheit}>F</a></span>
            </div>
        );
    } else {
        let fahrenheit = (props.celsius * 9/5) + 32;
        return  (
            <div className="WeatherTemp">
                <span className="main-temperature">{Math.round(fahrenheit)}</span>
                <span className="unit"><a href="/" onClick={showCelsius}>°C</a></span>
                <span  className="unit-fa">F</span>
            </div>
        );
    }

}