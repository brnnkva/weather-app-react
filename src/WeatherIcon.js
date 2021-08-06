import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';

export default function WeatherIcon(props){
 const codeMapping = {
     "01d": "CLEAR_DAY",
     "01n": "CLEAR_NIGHT",
     "02d": "PARTLY_CLOUDY_DAY",
     "02n": "PARTLY_CLOUDY_NIGHT",
     "03d": "PARTLY_CLOUDY_DAY",
     "03n": "PARTLY_CLOUDY_NIGHT",
     "04d": "CLOUDY",
     "04n": "CLOUDY",
     "09d": "SLEET",
     "09n": "SLEET",
     "10d": "RAIN",
     "10n": "RAIN",
     "11d": "RAIN",
     "11n": "RAIN",
     "13d": "SNOW",
     "13n": "SNOW",
     "50d": "FOG",
     "50n": "FOG"
 };

    return (
        <div className="WeatherIcon">
            <ReactAnimatedWeather
                icon={codeMapping[props.code]}
                color="#7e7e7e"
                size={53}
                animate={true}
            />
        </div>

    )
}