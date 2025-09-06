import WeatherCardSkeleton from "./WeatherCardSkeleton"
import { getDays } from "../api/weather"
import ItemForecastDays from "./ItemForecastDays"
import PropTypes from "prop-types"
export default function DayWeatherCard({forecast,loading}){
    return(
        <div className="m-auto w-11/12 lg:w-1/2 mb-5">
            <p className="text-xl font-semibold mb-3 text-white  ">{forecast.length}-Day Forecast</p>
            <div className=" bg-blue-400 rounded-xl pt-3 flex flex-col px-2">
                
                {loading && (
                    <WeatherCardSkeleton/>
                )}
                {!loading &&
                    forecast.map((item,index)=>(
                        <ItemForecastDays idWeather={item.weather[0].id} weather={item.weather[0].description} tempMax={Math.round(item.main.temp_max)} tempMin={Math.round(item.main.temp_min)} key={index} date={getDays(item.dt_txt)}/>
                    ))
                }
            </div>
      </div>
    )
}

DayWeatherCard.propTypes = {
    forecast: PropTypes.array.isRequired,
    loading:PropTypes.bool.isRequired
}