import React from "react";
import Background from "../../images/background.png";
import Button from "../CommonSection/Button";

const Hero = () => {
  return (
    <div className="relative bg-dark-blue text-white h-[75vh] flex items-center justify-between px-[5%] lg:px-24 bg-cover bg-center bg-no-repeat heroHeight" style={{ backgroundImage: `url(${Background})` }}>
      <div className="relative z-10 w-full lg:w-[60%]">
        <h1 className="font-bold mb-6 aboutHeadingFont">Our Mission</h1>
        <p className="mb-8 leading-relaxed Montserrat fs1p2rem">
          At MutaEngine, our mission is to revolutionize software security by providing cutting-edge solutions that protect your software from piracy, reverse engineering, and unauthorized modifications. We believe in empowering developers and companies to focus on innovation while we ensure their intellectual property remains secure.
        </p>
        <Button title="Learn More" type={0}/>
      </div>
    </div>
  );
};

export default Hero;
