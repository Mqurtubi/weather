export default function ItemForecast({hours,idWeather,celcius}){
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
        <div className="bg-blue-300  min-w-1/6 flex flex-col items-center text-white rounded-xl first:ml-2">
            <p>{hours}</p>
            <img src={image} alt="" width={70}/>
            <p className="font-bold">{celcius}&#176;C</p>
        </div>
    )
}