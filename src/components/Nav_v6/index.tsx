import React from 'react';
import './index.css';

export default class Nav_v6 extends React.Component {    

    render() {
        return (
            <nav className="
                relative
                w-full
                flex flex-wrap
                items-center
                justify-between
                p-4
                mx-1
                bg-gray-100
                text-gray-500
                hover:text-gray-700
                focus:text-gray-700
                shadow-lg
                navbar navbar-expand-lg navbar-light
            ">
                <div className="ml-32">
                    <img alt="Drem logo" className="h-7" src="../../images/logos/Drem-typeface-blk.png"></img>
                </div>

                <div className="mr-32">
                    <a className="mx-4" href="/product">
                        Product
                    </a>
                    <a className="mx-4" href="/about">
                        About Us
                    </a>
                    <a className="mx-4" href="/contact">
                        Contact
                    </a>
                    <button className="mx-4 bg-gradient-to-r from-[#A814AB] to-blue-500 hover:from-blue-500 hover:to-[#A814AB] text-white py-2 px-4 rounded-full">
                        Enter App
                    </button>
                </div>
            </nav>
        )
    }
}