import React,{useState} from "react";
import TrafficLight from "./TrafficLight.jsx";

//include images into your bundle


//create your first component
const Home = () => {

	const[activeColor, setActiveColor] = useState ("red");

	return (
		<div className="">
			<div className="trafficTop"></div>
			<div className="container">
			<TrafficLight activeColor={activeColor} trafficLightColor="red" setActiveColor={setActiveColor} />
			<TrafficLight activeColor={activeColor} trafficLightColor="yellow" setActiveColor={setActiveColor}/>
			<TrafficLight activeColor={activeColor} trafficLightColor="green"setActiveColor={setActiveColor}/>
			
				</div>
				</div>

	);
};

export default Home;
