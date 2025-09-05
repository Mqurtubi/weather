import { FaMapMarkerAlt} from "react-icons/fa";
import ItemWeather from "./ItemWeather";
import { IoMdWater } from "react-icons/io";
import { FaEye, FaWind } from "react-icons/fa";
import { getImage } from "../api/weather";
import PropTypes from "prop-types";
export default function WeatherCard({weather,valueCity}){
    const weatherNow=weather?.weather?.[0]?.main?? "-";
    const celcius=Math.round(weather?.main?.temp)
    const wind=weather?.wind?.speed != null ? `${(weather.wind.speed *3.6).toFixed(1)} km/h`: null
    const visibility=weather?.visibility != null ? `${(weather.visibility/1000).toFixed(1)} km`: null
    const water=weather?.main?.humidity != null ? `${weather.main.humidity}%`: null 
    const idWeather=weather?.weather?.[0]?.id ?? "-"
    const imageWeather=getImage(idWeather)

    return(
        <div className="bg-blue-400 flex flex-col w-11/12 p-5 items-center space-y-5 rounded-2xl my-5 mx-auto lg:w-2xl">
            <div className="flex items-center space-x-2 text-white text-lg lg:text-2xl">
                <FaMapMarkerAlt />
                <p className="font-bold">{valueCity}</p>
            </div>
            <div className="flex flex-col items-center text-white">
                <img src={imageWeather} alt=""/>
                <p className="text-2xl lg:text-3xl">{celcius}&#176;C</p>
                <p className="text-xl lg:text-2xl">{weatherNow}</p>
            </div>
            <div className="grid grid-cols-3 gap-3 w-full ">
                <ItemWeather Icon={<FaEye/>} label="Visibilty" value={visibility} />
                <ItemWeather Icon={<IoMdWater/>} label="Humadity" value={water} />
                <ItemWeather Icon={<FaWind/>} label="Wind" value={wind} />
            </div>
        </div>
    )
}
WeatherCard.propTypes={
    valueCity:PropTypes.string.isRequired,
    weather:PropTypes.object.isRequired
}