import React from 'react';
import './index.css';
import MailchimpForm from '../Form/MailchimpForm';

export default class Hero extends React.Component {

    // styling for the subscription form in Hero
    styling = {
        div: "mx-15",
        form: "flex flex-row my-8",
        input: "w-3/5 mr-2 bg-[#9498a4]/25 appearance-none rounded w-full py-2 px-3 text-center text-white placeholder-white focus:outline-none focus:shadow-outline",
        button: "bg-white hover:bg-white-700 font-bold py-2 px-16 rounded-full focus:outline-none focus:shadow-outline",
        header: "bg-clip-text bg-gradient-to-r from-[#A814AB] to-[#0029FF] text-transparent"
    }

    render() {
        return (
            <section className="flex relative h-screen text-white text-center">

                {/* Hero content */}
                <div className="bg-hero min-w-full bg-cover bg-center bg-no-repeat bg-fixed z-10">

                    {/* Section header */}
                    <div className="mt-28 2xl:mt-64 mb-96 h-full flex justify-center">
                        <h1 className="text-5xl sm:text-7xl 2xl:text-9xl font-extrabold drop-shadow-lg mb-4 fixed" data-aos="zoom-y-out">Unleash Your Future</h1>
                    </div>
                </div>


                {/* Second Layer */}
                <div className="bg-hero-toplayer bg-no-repeat bg-cover bg-center absolute inset-x-0 bottom-0 top-0 z-20">
                    <div className="flex flex-col max-w-3xl h-full mt-32 items-center justify-center mx-auto">
                        <div className="mb-16 drop-shadow-lg">
                              <div className="my-8">
                                  <p className="text-lg sm:text-2xl font-bold mx-48" data-aos="zoom-y-out" data-aos-delay="150">Drem is your portal to the new internet economy</p>
                              </div>
                              <MailchimpForm styling={this.styling} />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}