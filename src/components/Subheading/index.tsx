import React from 'react';
import './index.css';

function Subheading(props: any) {
    return (
        <div>
            <h3 className="General-text" style={{color:"#0029FF"}}>{props.title}</h3>
            <h4 className="General-text">{props.text}</h4>
            <img alt="Subheader Img" src={props.image}></img>

        </div>
    )
}

export default Subheading