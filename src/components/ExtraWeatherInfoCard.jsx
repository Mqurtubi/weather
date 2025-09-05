import { FaTemperatureHalf } from "react-icons/fa6";
import PropTypes from "prop-types";
import WeatherCardSkeleton from "./WeatherCardSkeleton";
export default function ExtraWeatherInfoCard({weather,loading}){
    
    return(
        <div className="w-11/12 bg-blue-400 m-auto p-6 rounded-2xl flex flex-col space-y-2 font-semibold text-white mb-5 md:mb-0 md:w-2/5 md:mr-5 md:m-0">
            {
                loading &&(
                    <WeatherCardSkeleton/>
                )
            }
            {!loading &&
            <>
            <div className="flex items-center text-xl  ">
                <FaTemperatureHalf/>
                <p>Temperature Details</p>
            </div>
            <div className="flex justify-between">
                <p className="text-slate-200/90">Feels Like</p>
                <p>{Math.round(weather.main.feels_like)}&#176;C</p>
            </div>
            <div className="flex justify-between">
                <p className="text-slate-200/90">High</p>
                <p>{Math.round(weather.main.temp_max)}&#176;C</p>
            </div>
            <div className="flex justify-between">
                <p className="text-slate-200/90">Low</p>
                <p>{Math.round(weather.main.temp_min)}&#176;C</p>
            </div>
            </>
            }
        </div>
    )
}
ExtraWeatherInfoCard.propTypes={
    weather:PropTypes.object.isRequired,
    loading:PropTypes.bool.isRequired
}
