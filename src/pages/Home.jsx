import { useEffect, useState } from "react"
import InputSearch from "../components/InputSearch"
import WeatherCard from "../components/WeatherCard"
import { getWeather,getInfoCity } from "../api/weather"
import WeatherCardSkeleton from "../components/WeatherCardSkeleton"

export default function Home(){
    const [search,setSearch]=useState("")
    const [weather,setWeather]=useState(null)
    const [loading,setLoading]=useState(true)
    const [city,setCity]=useState(null)
    const onSubmitHandler=async (e)=> {
        e.preventDefault()
        try {
            setLoading(true)
            const res=await getWeather(search)
            const resCity =await getInfoCity(search)
            setCity(resCity)
            setWeather(res)
            
        } catch (error) {
            console.log(error)
        }finally{
            setLoading(false)
        }
    }
    const onChangeHandler= (e)=> {
        setSearch(e.target.value)
    }
    useEffect(() => {
        (async () => {
            try {
            setLoading(true)
            const res = await getWeather("Jakarta");
            const resCity =await getInfoCity("jakarta")
            setWeather(res);
            setCity(resCity)
            console.log(res); // log data dari API
            console.log(resCity.name)
        } catch (err) {
            console.log(err.message || "Gagal memuat data awal");
        }finally{
            setLoading(false)
        }
    })();
    }, []);

    const weatherNow=weather?.weather?.[0]?.main?? "-";
    const celcius=weather?.main?.feels_like != null ? Math.round(weather.main.feels_like - 273.15): null;
    const wind=weather?.wind?.speed != null ? `${(weather.wind.speed *3.6).toFixed(1)} km/h`: null
    const visibility=weather?.visibility != null ? `${(weather.visibility/1000).toFixed(1)} km`: null
    const water=weather?.main?.humidity != null ? `${weather.main.humidity}%`: null 
    const idWeather=weather?.weather?.[0]?.id ?? "-"
    return(
        <div className="flex flex-col items-center ">
            <InputSearch handleChange={onChangeHandler} handleSubmit={onSubmitHandler} value={search}/>
             {loading && (
        <WeatherCardSkeleton/>
      )}
      {!loading && (
        <WeatherCard ValueWind={wind} valueVisibilty={visibility} valueWater={water} valueWeather={weatherNow} valueCelcius={celcius} idWeather={idWeather} valueCity={city.name}/>
      )}
        </div>
    )
}