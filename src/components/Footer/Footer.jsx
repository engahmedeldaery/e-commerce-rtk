import React from "react";
import logo from '../../assets/images/logo.png'

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <>
            <div className=" flex items-center justify-center">
                <hr className="h-px w-4/5 bg-gray-400 opaacity-50 outline-none border-none"></hr>
            </div>
            <div className="flex items-center justify-around pt-4">
                <div>
                    <img src={logo} alt="logo"></img>
                </div>
                <div>
                    <p className="text-black text-xl font-inter no-underline normal-case">
                        Copyright{year} page by Ahmed
                    </p>
                </div>

            </div>
        </>
    )


}
export default Footer;