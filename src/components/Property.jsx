import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";


const Property = ({ properties }) => {

    const { estate_title, image, description, id, price, status, area, location, facilities, segment_name } = properties
    return (
        <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800 mx-auto">
            <img src={image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
            <div className="bg-red-700 font-poppins font-extrabold rounded-xl text-center my-4 mx-5 p-2">
                {status}
            </div>
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-2xl font-poppins font-semibold tracking-wide">{estate_title}</h2>

                    {
                        description.length > 100
                            ? <p>{description.slice(0, 80)}</p>
                            : <p>{description}</p>
                    }

                    <div className="flex justify-between items-center">
                        <div className="bg-[#FFD7CF] p-2 text-center rounded-md font-poppins font-semibold">
                            {segment_name}
                        </div>
                        <p className="font-poppins text-red-500">{price}</p>

                    </div>
                    <div className="flex items-center justify-center text-2xl gap-3 py-5 ">
                        <span><FaLocationDot /></span>
                        <h3>{location}</h3>
                    </div>
                    <h2 className="font-poppins font-extrabold">Area: {area}</h2>
                    <h3 className="font-poppins font-medium text-left">Facilities are:</h3>
                    <ul className="font-poppins">
                        {
                            facilities.map((facility,index) => <li 
                                key={index}
                                >{facility}</li>)
                        }
                    </ul>

                </div>
                <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50 btn"><Link to={`/properties/${id}`}>View Property</Link></button>
            </div>
        </div>
    )
};

export default Property;