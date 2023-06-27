import React from "react";


export default function TrafficLight(props) {
    const {trafficLightColor , activeColor , setActiveColor } = props;
     
    const isActive = activeColor === trafficLightColor ? 'active-traffic-light':'';

    function colorClicked(){
        setActiveColor (trafficLightColor)
    }
    return(
        <div className={`traffic-light ${trafficLightColor} ${isActive} `} onClick={colorClicked} >
    </div>
    );
}