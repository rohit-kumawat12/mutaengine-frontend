import React from "react";

const Button = (props) => {
    if(props.type){
        // Blue
        return(
            <button className="px-6 py-2 primaryButtonBlack">{props.title}</button>
        );
    }else{
        // Black
        return(
            <button className="px-6 py-2 primaryButtonBlue">{props.title}</button>
        );
    }
}

export default Button;