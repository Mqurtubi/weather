import { FaMapMarkerAlt, FaSun } from "react-icons/fa";
import ItemWeather from "./ItemWeather";

import { IoMdWater } from "react-icons/io";
import { FaEye, FaWind } from "react-icons/fa";

export default function WeatherCard({valueCity,valueVisibilty,valueWater,ValueWind, valueWeather, valueCelcius,idWeather}){
    const imgWeather= () =>{
        if(idWeather >= 200 && idWeather <= 232 ) return "11d.png"
        if(idWeather >= 300 && idWeather <= 321 ) return "09d.png"
        if(idWeather >= 500 && idWeather <= 504 ) return "10d.png"
        if(idWeather == 511) return "13d.png"
        if(idWeather >= 520 && idWeather <= 531 ) return "09d.png"
        if(idWeather >= 600 && idWeather <= 622 ) return "13d.png"
        if(idWeather >= 701 && idWeather <= 781 ) return "50d.png"
        if(idWeather == 800) return "01d.png"
        if(idWeather == 801) return "02d.png"
        if(idWeather == 802) return "03d.png"
        if(idWeather == 803 || idWeather == 804) return "04d.png"
        return undefined
    }
    const imageWeather=imgWeather()
    return(
        <div className="bg-blue-400 flex flex-col w-11/12 p-5 items-center space-y-5 rounded-2xl my-5 mx-auto lg:w-2xl">
            <div className="flex items-center space-x-2 text-white text-lg lg:text-2xl">
                <FaMapMarkerAlt />
                <p className="font-bold">{valueCity}</p>
            </div>
            <div className="flex flex-col items-center text-white">
                <img src={imageWeather} alt=""/>
                <p className="text-2xl lg:text-3xl">{valueCelcius}&#176;C</p>
                <p className="text-xl lg:text-2xl">{valueWeather}</p>
            </div>
            <div className="grid grid-cols-3 gap-3 w-full ">
                <ItemWeather Icon={<FaEye/>} label="Visibilty" value={valueVisibilty} />
                <ItemWeather Icon={<IoMdWater/>} label="Humadity" value={valueWater} />
                <ItemWeather Icon={<FaWind/>} label="Wind" value={ValueWind} />
            </div>
        </div>
    )
}