import { getImage } from "../api/weather"
import PropTypes from "prop-types"
export default function ItemForecastDays({idWeather,date,weather,tempMax,tempMin}){
    const image=getImage(idWeather)
    return(
        <div className="flex items-center justify-between bg-blue-300 rounded-xl min-w-11/12 m-auto px-5 font-semibold mb-3">
            <div className="flex items-center space-x-3">
            <p className=" text-white">{date}</p>
            <div className="flex items-center ">
                <img src={image} alt="" width={70}/>
                <p className="text-blue-100">{weather}</p>
            </div>
            </div>
            <div className="flex space-x-5 ">
                <p className="text-white">{tempMax}&#176;C</p>
                <p className="text-blue-500">{tempMin}&#176;C</p>
            </div>
        </div>
    )
}
ItemForecastDays.propTypes={
    idWeather:PropTypes.number.isRequired,
    tempMax:PropTypes.number.isRequired,
    tempMin:PropTypes.number.isRequired,
    date:PropTypes.string.isRequired,
    weather:PropTypes.string.isRequired,
}