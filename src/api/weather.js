import axios from "axios";

const API_KEY=import.meta.env.VITE_OMW_KEY;

const getWeather=async (kota)=> {
    const url="https://api.openweathermap.org/data/2.5/weather"
    const city=await getInfoCity(kota)
    try{
        const res=await axios.get(url,{
            params:{
                lat:city.lat,
                lon:city.lon,
                units:"metric",
                appid:API_KEY
            }
        })
        return res.data
    }catch(err){
        throw new Error(err.response?.data?.message || "gagal ambil data cuaca")
    }
}

const getForecastWeather=async (kota)=>{
    const url="https://api.openweathermap.org/data/2.5/forecast"
    const city=await getInfoCity(kota)
    try{
        const res=await axios.get(url,{
            params:{
                lat:city.lat,
                lon:city.lon,
                units:"metric",
                appid:API_KEY,
            }
        })
        return res.data
    }catch(err){
        throw new Error(err.response?.data?.message || "gagal get data forecast")
    }
}

const getInfoCity= async (kota)=>{
    const url="http://api.openweathermap.org/geo/1.0/direct"
    try{
        const res=await axios.get(url,{
        params:{
                q:kota,
                limit:1,
                appid:API_KEY
            }
        })
        return res.data[0]
    }catch(err){
        throw new Error(err.response?.data?.message || "gagal ambil data kota")
    }
}

const getItemForecastPerHours=(forecast)=>{
        const dateNow=new Date()
        const timeZone=forecast.city.timezone
        const unixSec=Math.floor((dateNow.getTime() / 1000) + timeZone)
        const item=forecast.list.filter(item => unixSec < item.dt ).slice(0,5)
        return item
}

const getItemForecastPerDays=(forecast)=>{
    const dateNow= new Date()
    const yy=dateNow.getFullYear()
    const mm=String(dateNow.getMonth()+1).padStart(2,'0')
    const dd=String(dateNow.getDay()).padStart(2,'0')
    const date=`${yy}-${mm}-${dd}`
    const item= forecast.list.filter(item=>date !== item.dt_txt.split(" ")[0] && item.dt_txt.split(" ")[1] === "12:00:00")
    return item 
}

const getHours= (item) =>{
    const date=new Date(item)
    const hh= String(date.getHours()).padStart(2,"0")
    const mm= String(date.getMinutes()).padStart(2,"0")

    return `${hh}:${mm}`
}

const getDays=(item)=>{
    const day= new Date(item)
    return new Intl.DateTimeFormat("en-EN",{weekday:"short"}).format(day)
}
export {getWeather,getForecastWeather, getInfoCity, getItemForecastPerHours, getHours, getItemForecastPerDays, getDays}
