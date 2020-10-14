import React from "react";
import {LoginBg} from "../../../assets";
import "./blogitem.scss";
export default function BlogItem(){
    return(
        <div className="blog-item">
            <img className="image-thumb" src={LoginBg} alt="post"/>
            <div className="content-detail">
                <p className="title">Title Blog</p>
                <p className="author">Author - Date Post</p>
                <p className="body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium blanditiis commodi ducimus
                    eveniet molestias nulla tenetur.
                    Ad corporis dolorum hic maiores obcaecati
                    officiis optio porro possimus quo, quos repellat voluptates?
                </p>
            </div>
        </div>
    );
}