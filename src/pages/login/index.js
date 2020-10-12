import React from "react";
import {LoginBg, RegisterBg} from "../../assets";
import {Button, Gap, Input, Link} from "../../components";
export default function Login(){
    return (
        <div className="main-page">
            <div className="left">
                <img src={LoginBg} className="bg-image" alt=""/>
            </div>
            <div className="right">
                <p>Login</p>
                <Input label="Email" type="email" placeholder="Email.." />
                <Gap height={18}/>
                <Input label="Password" type="password" placeholder="Password.." />
                <Gap height={50}/>
                <Button title="login"  />
                <Gap height={60} />
                <Link title="Belum punya akun? silahkan kembali ke register"/>
            </div>
        </div>
    )
}