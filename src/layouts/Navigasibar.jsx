import { Navbar, NavbarBrand} from "flowbite-react";
import { FaCloudSun } from "react-icons/fa";
import { useLocation } from "react-router";

export default function NavigasiBar(){
    const link=[
      {
        href:"/home",
        value:"Home"
      },
      {
        href:"/map",
        value:"Map"
      }
    ]
    // const currentPath=useLocation().pathname
    // console.log(currentPath)
    return(
        <Navbar fluid rounded className="bg-blue-400 text-white border-b-1 border-blue-300">
      <NavbarBrand  href="https://flowbite-react.com" className="flex items-center ml-14 max-sm:ml-2">
        <FaCloudSun className="text-4xl text-yellow-300 max-sm:text-2xl"/>
        <span className="self-center whitespace-nowrap text-xl font-extrabold dark:text-white ml-3 max-sm:text-lg">WeatherPro</span>
      </NavbarBrand>
      <div className="mr-14 list-none flex space-x-10 max-sm:mr-2 max-sm:space-x-5">
        {
          link.map((item,index)=>(
            <a href={item.href} key={index} className="text-white text-lg" >{item.value}</a>
          ))
        }
      </div>
    </Navbar>
    )
}