import { Spinner } from "flowbite-react";

export default function ItemWeather({Icon,label,value,loading}){
    return(
        <div className="flex flex-col items-center  bg-blue-300 py-4 text-white  rounded-2xl">
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