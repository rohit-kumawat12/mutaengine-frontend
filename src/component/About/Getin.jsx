import React from "react";
import Button from "../CommonSection/Button";

const Getin = () => {
    return(
        <div className="flex items-center justify-center mt-[6rem] mb-[6rem]">
      <div className="w-full flex justify-between p-10 rounded-3xl readyto" style={{background: "linear-gradient(155deg, rgb(109, 109, 109) 10%, rgb(17, 16, 29) 100%)"}}>
        <div className="w-full sm:w-full lg:w-[50%] width100at1024" style={{background:"none"}}>
        <h2 className="text-5xl font-bold text-white mb-[2rem]" style={{background:"none"}}>
        Get In Touch <span className="text-cyan-400" style={{background:"none"}}>Secure</span> Your Software?
        </h2>
        <p className="text-gray-300 mb-6" style={{background:"none",fontSize:"1.3rem"}}>
        Have questions or want to learn more about how MutaEngine can protect your software? We’d love to hear from you. [Provide contact information, social media links, and a contact form.]
        </p>
        </div>
        <div className="flex items-center mr-[10%] justify-center md:justify-start" style={{background:"none"}}>
        <Button title="Contact Us" type={1}/>
        </div>
        
      </div>
    </div>
    );
}

export default Getin;