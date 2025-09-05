import { FaCloudSun,FaLinkedin, FaInstagramSquare,FaGithubSquare } from "react-icons/fa";

export default function Footer(){

    return(
        <div className="flex flex-col items-center bg-blue-400 border-blue-300 border-t-1 py-5 space-y-2">
                <div className="flex">    
                    <FaCloudSun className="text-4xl text-yellow-300 max-sm:text-2xl"/>
                    <span className="self-center whitespace-nowrap text-xl font-extrabold text-white ml-3 max-sm:text-lg">WeatherPro</span>
                </div>
                <p className="font-semibold text-white">Your trusted weather companion</p>
                <div className="flex space-x-3">
                    <a href="https://www.linkedin.com/in/muhammad-qurtubi-1b9117368/" className="text-2xl"><FaLinkedin className="text-white"/></a>
                    <a href="https://www.instagram.com/qurtubi11/" className="text-2xl"><FaInstagramSquare className="text-white"/></a>
                    <a href="https://github.com/Mqurtubi" className="text-2xl"><FaGithubSquare className="text-white"/></a>
                </div>
        </div>
    )
}