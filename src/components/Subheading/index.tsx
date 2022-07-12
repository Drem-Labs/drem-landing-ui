import React from 'react';
import './index.css';

function Subheading(props: any) {
    return (
        <div className="General-text font-semibold not-italic -tracking-[1px] text-clip">  

            <img alt="Subheader Img" className={props.img_pos} width={props.width} height={props.height} src={props.image}></img>           
                
                <div className={props.text_pos}> 

                    <div className = {props.title_pos}>

                        <h3 className="text-8xl leading-[96px] pb-2 pr-2 text-transparent bg-clip-text bg-gradient-to-r from-[#A814AB] to-[#0029FF]">
                            {props.title}
                            {/* displays title of subheading */}
                        </h3>

                    </div>

                    <h4 className="text-[32px] leading-[48px] text-[#06080F]">{props.text}</h4>
                    {/* displays description of subheading */}

                </div>

            
            <div className={props.line_pos}>
                <div className="w-[639px] border-t-[1px] border-[#7A7A7A] mx-auto"></div> 
            </div>
            {/* creates the line/boarder to separate subheadings */}
            {/* each subheading has different sizes so use line_pos to make each subheading section the same size */}
        
        </div>
    )
}

export default Subheading
