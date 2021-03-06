import React from "react";
import ArrowDownIcon from "../Resources/icons/down_white.png";
import "../Styles/SlideDownButton.css";


function slide(event, slide_offset)
{
    window.scrollTo({
        top: slide_offset,
        behavior: "smooth"
    });
}

function SlideDownButton(props){    
    
    return(
        <div className="slide-down-button column align-vertical" 
            onClick={(event) => {slide(event, props.slide_offset)} }>
            
            <img className="first-arrow" src={ArrowDownIcon}/>
            <img className="second-arrow" src={ArrowDownIcon}/>
        </div>
    );
}

export default SlideDownButton;