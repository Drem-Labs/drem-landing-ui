import React from 'react';
import './index.css';

function Subheading(props: any) {
    return (
        <div className="font-semibold not-italic -tracking-[1px] text-clip">
            <div className={props.layout}>
              <div className={props.text_pos}>
                  <div className = {props.title_pos}>
                      <h3 className="text-4xl sm:text-3xl md:text-4xl lg:text-6xl 2xl:text-8xl
                                     pb-2 md:pb-3 xl:pb-4 pr-2 text-transparent bg-clip-text bg-gradient-to-r from-[#A814AB] to-[#0029FF]">
                          {/* displays title of subheading */}
                          {props.title}
                      </h3>
                  </div>
                  <h4 className="font-medium text-sm sm:text-base md:text-lg lg:text-3xl 2xl:text-5xl text-[#06080F]">
                    {/* displays description of subheading */}
                    {props.text}
                  </h4>
              </div>
              <img alt="Subheader Img" className={props.img_pos} src={props.image}></img>
            </div>
            <div className={props.line_pos}>
                <div className="w-[225px] sm:w-1/2 lg:w-[639px] border-t-[1px] border-[#7A7A7A] mx-auto"></div>
            </div>
            {/* creates the line/border to separate subheadings */}
            {/* each subheading has different sizes so use line_pos to make each subheading section the same size */}

        </div>
    )
}

export default Subheading
