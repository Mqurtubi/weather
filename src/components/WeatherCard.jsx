import { FaMapMarkerAlt} from "react-icons/fa";
import ItemWeather from "./ItemWeather";
import { IoMdWater } from "react-icons/io";
import { FaEye, FaWind } from "react-icons/fa";
import { getImage } from "../api/weather";
import PropTypes from "prop-types";
export default function WeatherCard({valueCity,valueVisibilty,valueWater,ValueWind, valueWeather, valueCelcius,idWeather}){
    const imageWeather=getImage(idWeather)
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
WeatherCard.propTypes={
    valueCity:PropTypes.string.isRequired,
    valueVisibilty:PropTypes.string.isRequired,
    valueWater:PropTypes.string.isRequired,
    ValueWind:PropTypes.string.isRequired,
    valueWeather:PropTypes.string.isRequired,
    valueCelcius:PropTypes.number.isRequired,
    idWeather:PropTypes.number.isRequired,
}