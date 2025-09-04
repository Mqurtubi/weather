export default function ItemForecastDays({idWeather,date,weather,tempMax,tempMin}){
    const imgWeather= () =>{
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
    const image=imgWeather()
    return(
        <div className="flex items-center justify-between bg-blue-300 rounded-xl min-w-11/12 m-auto px-5 font-semibold mb-3">
            <div className="flex items-center space-x-3">
            <p className=" text-white">{date}</p>
            <div className="flex items-center ">
                <img src={image} alt="" width={70}/>
                <p className="text-blue-100">{weather}</p>
            </div>
            </div>
            <div className="flex space-x-5 ">
                <p className="text-white">{tempMax}&#176;C</p>
                <p className="text-blue-500">{tempMin}&#176;C</p>
            </div>
        </div>
    )
}