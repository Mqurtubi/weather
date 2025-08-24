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
                appid:API_KEY
            }
        })
        return res.data
    }catch(err){
        throw new Error(err.response?.data?.message || "gagal ambil data cuaca")
    }
}

const getForecastWeather=async ()=>{
    const url="https://api.openweathermap.org/data/2.5/forecast"
    const city=await getInfoCity()
    try{
        const res=await axios.get(url,{
            params:{
                lat:city.lat,
                lon:city.lon,
                appid:API_KEY
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

export {getWeather,getForecastWeather, getInfoCity}
