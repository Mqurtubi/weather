import { useEffect, useState } from "react"
import InputSearch from "../components/InputSearch"
import WeatherCard from "../components/WeatherCard"
import DayWeatherCard from "../components/DayWeatherCard"
import HourlyWeatherCard from "../components/HourlyWeatherCard"
import ExtraWeatherInfoCard from "../components/ExtraWeatherInfoCard"
import SunMoonCard from "../components/SunMoonCard"
import { getWeather,getInfoCity, getForecastWeather, getItemForecastPerHours,getItemForecastPerDays} from "../api/weather"
import WeatherCardSkeleton from "../components/WeatherCardSkeleton"

export default function Home(){
    const [search,setSearch]=useState("")
    const [weather,setWeather]=useState(null)
    const [loading,setLoading]=useState(true)
    const [city,setCity]=useState({})
    const [forecastHours,setForecastHours]=useState([])
    const [forecastDays,setForecastDays]=useState([])

    const loadData = async (cityName)=> {
        try {
            setLoading(true)
            const [res,resForecast,resCity]= await Promise.all([
                getWeather(cityName),
                getForecastWeather(cityName),
                getInfoCity(cityName)
            ])
            setWeather(res)
            setCity(resCity)
            setForecastHours(getItemForecastPerHours(resForecast))
            setForecastDays(getItemForecastPerDays(resForecast))
            console.log(res)
        } catch (error) {
            console.log(error.message || "Gagal memuat data awal");
        } finally{
            setLoading(false)
        }
    }

    const onSubmitHandler=async (e)=> {
        e.preventDefault()
        if(search.trim()) loadData(search.trim())
    }

    const onChangeHandler= (e)=> {
        setSearch(e.target.value)
    }
    
    useEffect(() => {
        loadData("jakarta");
    }, []);

    return(
        <div className="mt-8 mb-15">
            <InputSearch handleChange={onChangeHandler} handleSubmit={onSubmitHandler} value={search}/>
             {loading && (
        <WeatherCardSkeleton/>
      )}
      {!loading && (
            <WeatherCard weather={weather} valueCity={city.name}/>
      )}
      <HourlyWeatherCard forecast={forecastHours} loading={loading}/>
      <DayWeatherCard forecast={forecastDays} loading={loading}/>
      <div className="flex flex-col md:flex-row justify-center md:w-11/12 lg:w-8/12 m-auto">
      <ExtraWeatherInfoCard weather={weather} loading={loading}/>
      <SunMoonCard weather={weather} loading={loading}/>
      </div>
      
    </div>
    )
}