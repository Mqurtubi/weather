import { Navbar, NavbarBrand} from "flowbite-react";
import { FaCloudSun } from "react-icons/fa";

export default function NavigasiBar(){
    return(
        <Navbar fluid rounded className="bg-blue-400 text-white border-b-1 border-blue-300 m-auto">
      <NavbarBrand  href="https://flowbite-react.com" className="flex items-center ml-14 max-sm:ml-2">
        <FaCloudSun className="text-4xl text-yellow-300 max-sm:text-2xl"/>
        <span className="self-center whitespace-nowrap text-xl font-extrabold dark:text-white ml-3 max-sm:text-lg">WeatherPro</span>
      </NavbarBrand>
      
    </Navbar>
    )
}