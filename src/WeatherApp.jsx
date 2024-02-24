import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"

export default function WeatherApp(){
    const [weatherInfo,setweatherInfo]=useState({
         
            city: "Delhi",
            feelsLike: 24.84,
            temp: 25.85,
            tempMin: 25.85,
            tempMax: 25.85,
            humidity: 47,
            weather: "haze",
          
    });

    let updateInfo=(newinfo)=>{
        setweatherInfo(newinfo);
    };

    return (
        <div>
            <h2 style={{textAlign:"center"}}>
                Weather App
            </h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}