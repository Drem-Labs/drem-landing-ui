import React from 'react';
import './index.css';

export default class Welcome extends React.Component {    

    render() {
        return (
            <section className="relative bg-hero bg-no-repeat bg-cover bg-center bg-fixed">

                {/* Hero content */}
                <div className="max-w-6xl mx-auto px-4 sm:px-6">

                    {/* Section header */}
                    <div className="text-center pb-12 md:pb-16">
                        <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4 mx-96" data-aos="zoom-y-out">Unleash Your Future</h1>
                        <div className="max-w-3xl mx-auto my-32">
                            <p className="text-xl text-gray-600 mb-8 mx-48" data-aos="zoom-y-out" data-aos-delay="150">Drem is your portal to the new internet economy</p>
                            <div className="sm:max-w-none sm:flex sm:justify-center md:justify-between" data-aos="zoom-y-out" data-aos-delay="300">
                                <div className="w-3/4">
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email"></input>
                                </div>
                                <div className="w-1/4">
                                    <button className="bg-white-500 hover:bg-white-700 text-gray-600 font-bold py-2 px-16 rounded-full focus:outline-none focus:shadow-outline" type="button">
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