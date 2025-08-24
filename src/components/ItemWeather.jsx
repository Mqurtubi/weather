import { Spinner } from "flowbite-react";

export default function ItemWeather({Icon,label,value,loading}){
    return(
        <div className="flex flex-col items-center w-full px-20 bg-blue-300 py-4 text-white text-xl rounded-2xl">
            {Icon}
            <p>{label}</p>
            {loading && (
                <Spinner/>
            )}
            {!loading && (
                <p>{value}</p>
            )}
            
        </div>
    )
}