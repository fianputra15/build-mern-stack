import React from "react";
import "./register.scss";
import {RegisterBg} from "../../assets";
import {Button, Gap, Input, Link} from "../../components";
export default function Register(){
    return (
        <div className="main-page">
            <div className="left">
                <img src={RegisterBg} className="bg-image" alt=""/>
            </div>
            <div className="right">
                <p>Register</p>
                <Input label="Full Name" type="text" placeholder="Full Name.." />
                <Gap height={18}/>
                <Input label="Email" type="email" placeholder="Email.." />
                <Gap height={18}/>
                <Input label="Password" type="password" placeholder="Password.." />
                <Gap height={50}/>
                <Button title="register"  />
                <Gap height={60} />
                <Link title="kembali ke login"/>
            </div>
        </div>
    )
}