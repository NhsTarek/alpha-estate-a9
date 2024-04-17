import { useLoaderData } from "react-router-dom";
import Slider from "../../components/Slider";


const Home = () => {

    const properties = useLoaderData();
    console.log(properties)
    return (
        <div>
            <Slider></Slider>
            <section>
                <h2 className="text-3xl">Residential properties</h2>
            </section>
        </div>
    );
};

export default Home;