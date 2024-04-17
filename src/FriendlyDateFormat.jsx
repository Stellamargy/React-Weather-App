import React from "react";

const FriendlyDateFormat = ({data}) => {

    const weekDays=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const day=weekDays[data.time.getDay()];
    let hours=data.time.getHours();
    let minutes=data.time.getMinutes();
    if(hours<10){
        hours=`0${hours}`
    }
    if(minutes<10)[
        minutes=`0${minutes}`
    ]
  return (
    <div>
      <p className="m-0">
        <span>{day} </span>
        <time dateTime="11:03">{hours}:{minutes}</time>
        <span>, {data.description}</span>
        
      </p>
    </div>
  );
};
export default FriendlyDateFormat;