import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

const RecentReview = () => {
    useEffect(() =>{
         Aos.init({ duration: 2000});
    },[])
    return (
        <div>
            <section className="my-10 text-center">
                <h2 className="text-3xl font-poppins font-bold animate__animated  animate__heartBeat">Recent Review</h2>
            </section>
            <div className="flex gap-5 flex-col md:flex-row lg:flex-row">
                <div className="container flex gap-2 flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md bg-blue-300 ">

                    <div className="flex justify-between p-4" data-aos = "fade-right">
                        <div className="flex space-x-4">
                            <div>
                                <img src="https://i.ibb.co/3CpWJT3/pexels-daniel-xavier-1239291.jpg" alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                            </div>
                            <div>
                                <h4 className="font-bold">Sarah W.</h4>
                                <span className="text-xs dark:text-gray-600">16 hours ago</span>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2 dark:text-yellow-700">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                            </svg>
                            <span className="text-xl font-bold">4.6</span>
                        </div>
                    </div>
                    <div className="p-4 space-y-2 text-sm font-poppins" data-aos = "fade-right">
                        <p>"I couldn't be happier with my experience on this website. The range of residential properties available was exceptional, catering to various needs and preferences. The detailed descriptions and high-quality images made it easy to narrow down my choices. Plus, the customer service was top-notch! They were responsive, helpful, and guided me through every step of the process. Thanks to them, I found my dream home quickly and hassle-free. Highly recommend!"</p>
                    </div>
                </div>
                <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md bg-[#874CCC] ">

                    <div className="flex justify-between p-4" data-aos = "fade-left">
                        <div className="flex space-x-4">
                            <div>
                                <img src="https://i.ibb.co/WfjY2R7/pexels-stefan-stefancik-91227.jpg" alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                            </div>
                            <div>
                                <h4 className="font-bold">Michael R.</h4>
                                <span className="text-xs dark:text-gray-600"> 1 day ago</span>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2 dark:text-yellow-700">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                            </svg>
                            <span className="text-xl font-bold">4.8</span>
                        </div>
                    </div>
                    <div className="p-4 space-y-2 text-sm font-poppins" data-aos = "fade-left">
                        <p>"This website exceeded my expectations in every way. As someone new to the area, I was unsure where to start my search for a new home. Thankfully, this platform provided a comprehensive selection of residential properties in different neighborhoods, allowing me to explore various options within my budget. The user-friendly interface made navigation a breeze, and I appreciated the detailed listings that included everything from price and location to amenities and square footage. Thanks to this website, I found the perfect home that ticks all the boxes for me!"</p>
                    </div>
                </div>
                <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md bg-[#C65BCF] ">

                    <div className="flex justify-between p-4" data-aos = "fade-down">
                        <div className="flex space-x-4">
                            <div>
                                <img src="https://i.ibb.co/99CTtWr/pexels-justin-shaifer-1222271.jpg" alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                            </div>
                            <div>
                                <h4 className="font-bold">Leroy Jenkins</h4>
                                <span className="text-xs dark:text-gray-600">2 days ago</span>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2 dark:text-yellow-700">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                            </svg>
                            <span className="text-xl font-bold">4.5</span>
                        </div>
                    </div>
                    <div className="p-4 space-y-2 text-sm font-poppins " data-aos = "fade-down">
                        <p>"I recently used this website to find a rental property, and I was thoroughly impressed. The process was seamless from start to finish. The website's interface is clean and intuitive, making it easy to browse through available listings. Each property listing provided comprehensive information, allowing me to quickly assess if it met my criteria. When I reached out for more details or to schedule viewings, the team behind the website was prompt and professional in their responses. I appreciated their efficiency and attention to detail throughout the rental process. I would definitely recommend this website to anyone in search of quality residential properties."</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default RecentReview;