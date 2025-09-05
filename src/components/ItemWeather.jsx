import PropTypes from "prop-types";
export default function ItemWeather({Icon,label,value}){
    return(
        <div className="flex flex-col items-center  bg-blue-300 py-4 text-white  rounded-2xl">
            {Icon}
            <p>{label}</p>
            <p>{value}</p>
        </div>
    )
}
ItemWeather.propTypes={
    Icon:PropTypes.element.isRequired,
    label:PropTypes.string.isRequired,
    value:PropTypes.string.isRequired,
}