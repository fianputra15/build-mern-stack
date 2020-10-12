import React from "react";
import "./link.scss";
export default function Link({title, onClick}){
    return (
        <div>
            <p className="link">{title}</p>
        </div>
    )
}