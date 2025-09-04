import { useEffect, useState } from "react"
import InputSearch from "../components/InputSearch"
import WeatherCard from "../components/WeatherCard"
import ItemForecast from "../components/ItemForecast"
import ItemForecastDays from "../components/ItemForecastDays"
import { getWeather,getInfoCity, getForecastWeather, getItemForecastPerHours,getHours,getItemForecastPerDays, getDays } from "../api/weather"
import WeatherCardSkeleton from "../components/WeatherCardSkeleton"

export default function Home(){
    const [search,setSearch]=useState("")
    const [weather,setWeather]=useState(null)
    const [loading,setLoading]=useState(true)
    const [city,setCity]=useState(null)
    const [forecastHours,setForecastHours]=useState(null)
    const [forecastDays,setForecastDays]=useState(null)
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
            const resForecast=await getForecastWeather("jakarta");
            const resCity =await getInfoCity("jakarta");
            const resForecastHours= getItemForecastPerHours(resForecast);
            const resForecastDays= getItemForecastPerDays(resForecast)
            setWeather(res);
            setCity(resCity);
            setForecastHours(resForecastHours)
            setForecastDays(resForecastDays)
            console.log(resForecastDays)
            console.log(getDays(resForecastDays[0].dt_txt))
        } catch (err) {
            console.log(err.message || "Gagal memuat data awal");
        }finally{
            setLoading(false)
        }
    })();
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
      
      <div className="m-auto w-11/12 lg:w-1/2 mb-5">
            <p className="text-xl font-semibold mb-3 text-white  ">Hourly Forecast</p>
            <div className=" bg-blue-400 rounded-xl py-3 flex space-x-3 px-2 lg:space-x-5">
                
                {loading && (
                    <WeatherCardSkeleton/>
                )}
                {!loading &&
                    forecastHours.map((item,index)=>(
                        <ItemForecast idWeather={item.weather[0].id} celcius={Math.round(item.main.temp)} hours={getHours(item.dt_txt)} key={index}/>
                    ))
                }
            </div>
      </div>
      <div>
        <div className="m-auto w-11/12 lg:w-1/2">
            <p className="text-xl font-semibold mb-3 text-white  ">5-Day Forecast</p>
            <div className=" bg-blue-400 rounded-xl py-3 flex flex-col px-2 ">
                
                {loading && (
                    <WeatherCardSkeleton/>
                )}
                {!loading &&
                    forecastDays.map((item,index)=>(
                        <ItemForecastDays idWeather={item.weather[0].id} weather={item.weather[0].description} tempMax={Math.round(item.main.temp_max)} tempMin={Math.round(item.main.temp_min)} key={index} date={getDays(item.dt_txt)}/>
                    ))
                }
            </div>
      </div>
      </div>
    </div>
    )
}