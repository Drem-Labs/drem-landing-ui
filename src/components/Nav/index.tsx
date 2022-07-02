import React from 'react';
import './index.css';

export default class Nav extends React.Component {    

    render() {
        return (
            <nav className="
                relative
                w-full
                flex flex-wrap
                justify-center
                p-4
                h-32
                bg-gradient-to-b from-[#45315F] to-transparent
                text-gray-500
                hover:text-gray-700
                focus:text-gray-700
                navbar navbar-expand-lg navbar-light
            ">
                <div className="">
                    <img alt="Drem logo" className="h-7" src="../../images/logos/Drem-typeface-blk.png"></img>
                </div>

            </nav>
        )
    }
}