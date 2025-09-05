import { useEffect, useState } from "react"
import InputSearch from "../components/InputSearch"
import WeatherCard from "../components/WeatherCard"
import DayWeatherCard from "../components/DayWeatherCard"
import HourlyWeatherCard from "../components/HourlyWeatherCard"
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

    const weatherNow=weather?.weather?.[0]?.main?? "-";
    const celcius=Math.round(weather?.main?.temp)
    const wind=weather?.wind?.speed != null ? `${(weather.wind.speed *3.6).toFixed(1)} km/h`: null
    const visibility=weather?.visibility != null ? `${(weather.visibility/1000).toFixed(1)} km`: null
    const water=weather?.main?.humidity != null ? `${weather.main.humidity}%`: null 
    const idWeather=weather?.weather?.[0]?.id ?? "-"


    return(
        <div className="">
            <InputSearch handleChange={onChangeHandler} handleSubmit={onSubmitHandler} value={search}/>
             {loading && (
        <WeatherCardSkeleton/>
      )}
      {!loading && (
            <WeatherCard ValueWind={wind} valueVisibilty={visibility} valueWater={water} valueWeather={weatherNow} valueCelcius={celcius} idWeather={idWeather} valueCity={city.name}/>
      )}
      <HourlyWeatherCard forecast={forecastHours} loading={loading}/>
      <DayWeatherCard forecast={forecastDays} loading={loading}/>
      
    </div>
    )
}