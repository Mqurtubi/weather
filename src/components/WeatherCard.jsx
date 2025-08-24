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
        <div className="bg-blue-400 flex flex-col items-center w-full max-w-sm sm:max-w-md lg:max-w-4xl md:max-w-4xl rounded-3xl mt-8 space-y-4 py-6  max-md:mx-4">
            <div className="flex items-center space-x-3 text-white">
                <FaMapMarkerAlt className="text-xl"/>
                <p className="text-2xl font-bold">{valueCity}</p>
            </div>
            <div className="flex flex-col items-center text-white">
                <img src={imageWeather} alt="" />
                <p className="text-5xl">{valueCelcius}&#176;C</p>
                <p className="text-xl">{valueWeather}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 ">
                <ItemWeather Icon={<FaEye/>} label="Visibilty" value={valueVisibilty} />
                <ItemWeather Icon={<IoMdWater/>} label="Humadity" value={valueWater} />
                <ItemWeather Icon={<FaWind/>} label="Wind" value={ValueWind} />
            </div>
        </div>
    )
}