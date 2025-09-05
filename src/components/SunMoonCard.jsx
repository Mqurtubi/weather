import { FaSun } from "react-icons/fa";
import PropTypes from "prop-types";
import WeatherCardSkeleton from "./WeatherCardSkeleton";
import { getSunrise, getSunset, getDayLength } from "../api/weather";
export default function SunMoonCard({weather,loading}){
    // const sunrise=getSunrise(weather)
    // const sunset=getSunset(weather)
    return(
        <div className="w-11/12 bg-blue-400 m-auto p-6 rounded-2xl flex flex-col space-y-2 font-semibold text-white md:w-2/5 md:m-0">
            {
                loading &&(
                    <WeatherCardSkeleton/>
                )
            }
            
            {!loading &&
            <>
            <div className="flex items-center text-xl  ">
                <FaSun/>
                <p>Sun & Moon</p>
            </div>
            <div className="flex justify-between">
                <p className="text-slate-200/90">Sunrise</p>
                <p>{getSunrise(weather)} AM</p>
            </div>
            <div className="flex justify-between">
                <p className="text-slate-200/90">Sunset</p>
                <p>{getSunset(weather)} PM</p>
            </div>
            <div className="flex justify-between">
                <p className="text-slate-200/90">Day Length</p>
                <p>{getDayLength(weather)}</p>
            </div>
            </>
            }
        </div>
    )
}
SunMoonCard.propTypes={
    weather:PropTypes.object.isRequired,
    loading:PropTypes.bool.isRequired
}
