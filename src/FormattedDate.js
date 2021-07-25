import React from "react";
import "./FormattedDate.css";

export default function FormattedDate(props){
    let days = [
        "Sun",
        "Mon",
       "Tue", 
       "Wed", 
       "Thu", 
       "Fri",
       "Sat"
       ];
    let day = days[props.date.getDay()];
    let hours = props.date.getHours(); 
    if  (hours < 10) {
        hours = `0${hours}`;
      }
    let minutes = props.date.getMinutes(); 
    if  (minutes < 10) {
        minutes = `0${minutes}`;
      }
    let months = [
        "Jan", 
        "Feb", 
        "Mar", 
        "Apr", 
        "May", 
        "Jun", 
        "Jul", 
        "Aug", 
        "Sep", 
        "Oct", 
        "Nov", 
        "Dec"
     ];
   let month = months[props.date.getMonth()];
   let dateNumber = props.date.getDate();
   
    return (
    <div className="FormattedDate">
{month} {dateNumber} <hr /> {day} {hours}:{minutes}
    </div>
    );
}
