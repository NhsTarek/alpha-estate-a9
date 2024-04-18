import { Helmet } from "react-helmet-async";
import Footer from "../../components/Footer";


const Agents = () => {
    return (
        <div className="container mx-auto my-10">
            <Helmet>
                <title>AlphaEstate | Agents</title>
            </Helmet>
            <div className="text-center my-5 font-bold">
                <h3>Here you can find top our agent details so you can contact them.</h3>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Agent Name</th>
                            <th>Agent Experience</th>
                            <th>Agent Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>1</th>
                            <td>Matt Haig</td>
                            <td>11 years</td>
                            <td>+1 (555) 234-5678</td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                            <th>2</th>
                            <td>Andy Weir</td>
                            <td>9 years</td>
                            <td>+1 (555) 345-6789</td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                            <th>4</th>
                            <td>Erin Morgenstern</td>
                            <td>7 years</td>
                            <td>+1 (555) 901-2345</td>
                        </tr>
                        <tr>
                            <th>5</th>
                            <td>Patrick Rothfuss</td>
                            <td>15 years</td>
                            <td>+1 (555) 456-7890</td>
                        </tr>
                        <tr>
                            <th>6</th>
                            <td>Madeline Miller</td>
                            <td>12 years</td>
                            <td> +1 (555) 123-4567</td>
                        </tr>
                        <tr>
                            <th>7</th>
                            <td>Andy Weir</td>
                            <td> 8 years</td>
                            <td>+1 (555) 567-8901</td>
                        </tr>
                        <tr>
                            <th>8</th>
                            <td>Kristin Hannah</td>
                            <td>10 years</td>
                            <td>+1 (555) 678-9012</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Agents;