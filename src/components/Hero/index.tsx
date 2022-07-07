import React from 'react';
import './index.css';
import Subheading from '../Subheading'

export default class Hero extends React.Component {    

    render() {
        return (
            <div>
            <section className="flex relative text-white text-center z-10">

                {/* Hero content */}

                {/* Back layer */}
                <div className="bg-hero bg-no-repeat bg-cover bg-center bg-fixed w-full h-160 z-20">

                    <div className="flex flex-col items-center justify-end mx-auto fixed inset-x-0 top-0">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl text-center font-extrabold drop-shadow-lg my-36 mx-32 md:mx-48" data-aos="zoom-y-out">Unleash Your Future</h1>
                    </div>

                </div>

                {/* Second Layer */}
                <div className="absolute inset-x-0 bottom-0 z-30">
                    <div className="bg-hero-toplayer bg-no-repeat bg-cover bg-center bottom-0 h-144">
                        {/* <div className="flex flex-col max-w-3xl h-144 items-center justify-end mx-auto">
                            <div className="mb-16 drop-shadow-lg">
                                <div className="my-8">
                                    <p className="text-lg sm:text-xl md:text-2xl font-bold mx-32 md:mx-48" data-aos="zoom-y-out" data-aos-delay="150">Drem is your portal to the new internet economy</p>
                                </div>
                                <div className="flex flex-col items-center justify-center md:flex-row my-8">
                                    <div className="w-3/4 my-2 md:mr-2">
                                        <input className="bg-[#9498a4] opacity-25 appearance-none rounded w-full py-2 px-3 text-white focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email"></input>
                                    </div>
                                    <div className="w-1/4 my-2 md:ml-2">
                                        <button className="bg-white hover:bg-white-700 text-black font-bold py-2 px-16 rounded-full focus:outline-none focus:shadow-outline" type="button">
                                            Join Us
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>

                
                {/* Experimenting with fixed subtext and input */}
                <div className="mb-16 mt-96 drop-shadow-lg fixed inset-x-0 top-0 z-40">
                    <div className="my-8">
                        <p className="text-lg sm:text-xl md:text-2xl font-bold mx-32 md:mx-48" data-aos="zoom-y-out" data-aos-delay="150">Drem is your portal to the new internet economy</p>
                    </div>
                    <div className="flex flex-col items-center justify-center md:flex-row my-8 mx-8">
                        <div className="w-3/4 my-2 md:mr-2">
                            <input className="bg-[#9498a4] opacity-25 appearance-none rounded w-full py-2 px-3 text-white focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email"></input>
                        </div>
                        <div className="w-1/4 my-2 md:ml-2">
                            <button className="bg-white hover:bg-white-700 text-black font-bold py-2 px-16 rounded-full focus:outline-none focus:shadow-outline" type="button">
                                Join Us
                            </button>
                        </div>
                    </div>
                </div>

            </section>


            </div>
        )
    }
}