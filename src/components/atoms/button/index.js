import React from "react";
import  "./button.scss";

export default function Button({title, ...rest}){
    return(
            <button className="btn" {...rest}>{title}</button>
    )
}