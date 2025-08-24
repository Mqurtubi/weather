import { IoSearch } from "react-icons/io5";

export default function InputSearch({handleSubmit,handleChange,value}){
    return(
        <form className="w-1/3 m-auto relative text-neutral-200 max-md:w-11/12 mt-8" onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter city name..." className="bg-blue-400  pl-14 py-3 rounded-xl w-full focus:outline-1 outline-neutral-300" onChange={handleChange} value={value}/>
            <IoSearch className="absolute top-3 text-2xl left-4" />
            <button type="submit" className="border px-5 py-2 rounded-lg mt-3 hover:cursor-pointer hover:bg-blue-400">Search</button>
        </form>
    )
}