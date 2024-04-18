import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";
import Footer from "../../components/Footer";


const EstateDetails = () => {
    const { id } = useParams();
    const properties = useLoaderData();
    const idInt = parseInt(id)
    const property = properties.find(property => property.id === idInt);

    const { estate_title, image, description, price, status, area, location, facilities, segment_name } = property;

    return (
        <section className="dark:bg-gray-100 dark:text-gray-800">
            <Helmet>
                <title>AlphaEstate | Estate Details</title>
            </Helmet>
            <div className="container flex flex-col-reverse mx-auto lg:flex-row">
                <div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 dark:bg-violet-600 dark:text-gray-50">
                    <div className="flex space-x-2 sm:space-x-4">
                        <div className="space-y-2">
                            <div className="bg-red-500 p-2 rounded-2xl mx-10">
                                <p className="text-center font-poppins font-semibold">For: {status}</p>
                            </div>
                            <p className="text-lg font-medium leading-snug">{estate_title}</p>
                            <p className="leading-snug font-poppins">{description}</p>
                        </div>
                    </div>
                    <div className="flex space-x-2 sm:space-x-4">
                        <div className="space-y-2">
                            <p className="text-lg font-poppins font-medium leading-snu">Features are:</p>
                            <ul className="font-poppins">
                                {
                                    facilities.map((facility, index) => <li
                                        key={index}
                                    >{facility}</li>)
                                }
                            </ul>
                            <h2 className="font-poppins font-extrabold">Area: {area}</h2>
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="bg-[#FFD7CF] p-2 text-center rounded-md font-poppins font-semibold">
                            {segment_name}
                        </div>
                        <p className="font-poppins text-red-500">{price}</p>

                    </div>
                </div>
                <div className="lg:w-1/2 xl:w-3/5 dark:bg-gray-100">
                    <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
                        <img src={image} alt="" className="rounded-lg shadow-lg dark:bg-gray-500 aspect-video sm:min-h-96" />
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </section>
    );
};

export default EstateDetails;