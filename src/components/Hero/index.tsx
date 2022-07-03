import React from 'react';
import './index.css';

export default class Hero extends React.Component {    

    render() {
        return (
            <section className="flex relative bg-hero bg-no-repeat bg-cover bg-center bg-fixed text-white">

                {/* Hero content */}
                <div className="max-w-6xl mx-auto px-4 sm:px-6 items-center justify-center">

                    {/* Section header */}
                    <div className="text-center py-16 md:py-20  drop-shadow-md">
                        <h1 className="text-9xl md:text-6xl font-extrabold mb-4 mx-96" data-aos="zoom-y-out">Unleash Your Future</h1>
                        <div className="max-w-3xl mx-auto my-32">
                            <p className="text-2xl font-bold mb-8 mx-48" data-aos="zoom-y-out" data-aos-delay="150">Drem is your portal to the new internet economy</p>
                            <div className="sm:max-w-none sm:flex sm:justify-center md:justify-between" data-aos="zoom-y-out" data-aos-delay="300">
                                <div className="w-3/4 mr-2">
                                    <input className="bg-[#9498a4] opacity-25 appearance-none rounded w-full py-2 px-3text-gray-700 focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email"></input>
                                </div>
                                <div className="w-1/4 ml-2">
                                    <button className="bg-white hover:bg-white-700 text-black font-bold py-2 px-16 rounded-full focus:outline-none focus:shadow-outline" type="button">
                                        Join Us
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </section>

        )
    }
}