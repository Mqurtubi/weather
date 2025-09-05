import { getImage } from "../api/weather"
import PropTypes from "prop-types"
export default function ItemForecast({hours,idWeather,celcius}){
    const image=getImage(idWeather)
    return(
        <div className="bg-blue-300  min-w-1/6 flex flex-col items-center text-white rounded-xl first:ml-2">
            <p>{hours}</p>
            <img src={image} alt="" width={70}/>
            <p className="font-bold">{celcius}&#176;C</p>
        </div>
    )
}
ItemForecast.propTypes={
    hours:PropTypes.string.isRequired,
    idWeather:PropTypes.number.isRequired,
    celcius:PropTypes.number.isRequired,
}