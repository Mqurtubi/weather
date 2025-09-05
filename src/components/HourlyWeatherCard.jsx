import WeatherCardSkeleton from "./WeatherCardSkeleton"
import ItemForecast from "./ItemForecast"
import { getHours } from "../api/weather"
export default function HourlyWeatherCard({forecast,loading}){
    return(
        <div className="m-auto w-11/12 lg:w-1/2 mb-5">
            <p className="text-xl font-semibold mb-3 text-white  ">Hourly Forecast</p>
            <div className=" bg-blue-400 rounded-xl py-3 flex space-x-3 px-2 lg:space-x-5">
                
                {loading && (
                    <WeatherCardSkeleton/>
                )}
                {!loading &&
                    forecast.map((item,index)=>(
                        <ItemForecast idWeather={item.weather[0].id} celcius={Math.round(item.main.temp)} hours={getHours(item.dt_txt)} key={index}/>
                    ))
                }
            </div>
      </div>
    )
}