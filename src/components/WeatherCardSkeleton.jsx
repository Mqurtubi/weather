import {Skeleton} from "@mui/material"

export default function WeatherCardSkeleton(){
    return(
        <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg mt-6 p-4 rounded-2xl shadow  m-auto bg-blue-300/50">

        <Skeleton variant="text" width="40%" height={30} className="m-auto"/>
        <Skeleton variant="circular" width="20%" height={100} className="m-auto"/>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4">
    <div className="w-full"><Skeleton variant="rounded" width="100%" height={64} /></div>
    <div className="w-full"><Skeleton variant="rounded" width="100%" height={64} /></div>
    <div className="w-full"><Skeleton variant="rounded" width="100%" height={64} /></div>
  </div>    
        </div>
    )
}