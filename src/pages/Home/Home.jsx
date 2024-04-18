import { useLoaderData } from "react-router-dom";
import Slider from "../../components/Slider";
import 'animate.css';
import Property from "../../components/Property";
import RecentReview from "../../components/RecentReview";
import { Helmet } from "react-helmet-async";
import Footer from "../../components/Footer";




const Home = () => {

    const properties = useLoaderData();
    console.log(properties)
    return (
        <div>
            <Helmet>
                <title>AlphaEstate | Home</title>
            </Helmet>
            <Slider></Slider>
            <section className="my-10 text-center">
                <h2 className="text-3xl font-bold font-poppins animate__animated animate__jackInTheBox">Residential properties</h2>
            </section>
            <div className="container mx-auto grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {
                    properties.map(property => <Property
                        key={property.id}
                        properties={property}

                    ></Property>)
                }
            </div>
            <RecentReview></RecentReview>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;