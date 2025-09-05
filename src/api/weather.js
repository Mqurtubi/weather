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
    const url="https://api.openweathermap.org/geo/1.0/direct"
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

const getSunrise= (item) => {
    const unix=item.sys.sunrise
    
    const date=new Date(unix*1000)
    const hh=String(date.getHours()).padStart(2,"0")
    const mm=String(date.getMinutes()).padStart(2,"0")
    return `${hh}:${mm}`
}

const getSunset= (item) => {
    const unix=item.sys.sunset
    
    const date=new Date(unix*1000)
    const hh=String(date.getHours()).padStart(2,"0")
    const mm=String(date.getMinutes()).padStart(2,"0")
    return `${hh}:${mm}`
}

const getDays=(item)=>{
    const day= new Date(item)
    return new Intl.DateTimeFormat("en-EN",{weekday:"short"}).format(day)
}

const getDayLength=(item)=>{
    const duration = item.sys.sunset - item.sys.sunrise
    const hh=Math.floor(duration/3600)
    const mm=Math.floor((duration%3600) / 60)
    return `${hh}:${String(mm).padStart(2,'0')}`
}

const getImage=(idWeather)=>{
    if(idWeather >= 200 && idWeather <= 232 ) return "11d.png"
        if(idWeather >= 300 && idWeather <= 321 ) return "09d.png"
        if(idWeather >= 500 && idWeather <= 504 ) return "10d.png"
        if(idWeather == 511) return "13d.png"
        if(idWeather >= 520 && idWeather <= 531 ) return "09d.png"
        if(idWeather >= 600 && idWeather <= 622 ) return "13d.png"
        if(idWeather >= 701 && idWeather <= 781 ) return "50d.png"
        if(idWeather == 800) return "01d.png"
        if(idWeather == 801) return "02d.png"
        if(idWeather == 802) return "03d.png"
        if(idWeather == 803 || idWeather == 804) return "04d.png"
        return undefined
}
export {getWeather,getForecastWeather, getInfoCity, getItemForecastPerHours, getHours, getItemForecastPerDays, getDays,getImage, getSunrise, getSunset, getDayLength}
