import React from 'react';
import './index.css';

export default class Nav extends React.Component {    

    render() {
        return (
            <nav className="
                w-full
                flex flex-wrap
                justify-center
                p-4
                h-32
                bg-gradient-to-b from-[#45315F] to-transparent
                navbar navbar-expand-lg navbar-light
            ">
                <div className="">
                    <h4 className="text-2xl font-damion text-gray1">Drem</h4>
                </div>

            </nav>
        )
    }
}