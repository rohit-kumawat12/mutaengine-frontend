import React from "react";
import Hero from "./About/Hero";
import TwoColSection from "./CommonSection/TwoColSection";
import Images1 from "../images/image1.png";
import Images2 from "../images/image2.png";
import Whatwedo from "./About/Whatwedo";
import YouInnovate from "./About/YouInnovate";
import WhyChoose from "./About/WhyChoose";
import Getin from "./About/Getin";

const About = () => {
    return (
        <>
            <Hero />
            <div className="relative px-[5%]">
            {/* <div className="absolute top-1 left-[-190px] w-[250px] h-[250px] bg-white blur-[150px] opacity-60"></div> */}
            <div className="absolute top-1 left-[-190px] w-[250px] h-[250px] bg-purple-500 blur-[150px] opacity-60"></div>
                <div className="w-full flex items-center justify-center pt-[5%]">
                    <h1 className="text-white font-bold aboutHeadingFont">Who We Are</h1>
                </div>
                <TwoColSection Image={Images1} leftHeading={""}
                    colorHeading={""}
                    rightHeading={""}
                    des={"MutaEngine is a team of passionate cybersecurity experts, software engineers, and innovators united by a common vision: to create a world where software developers can innovate without fear of their work being compromised. Our founders, driven by decades of combined experience in cybersecurity, software development, and artificial intelligence, recognized the growing threats in the digital landscape and set out to build a company that could offer robust, future-proof security solutions. We are deeply committed to staying ahead of these threats, constantly evolving our approach to ensure that our clients' software remains secure against the most sophisticated attacks."}
                    button={""}
                    type={1}
                    textAlgin={1}
                />
                <div className="noneformobile">
                <TwoColSection Image={Images2} leftHeading={""}
                    colorHeading={""}
                    rightHeading={""}
                    des={"At MutaEngine, we believe that every developer, from startups to global enterprises, deserves the freedom to innovate without the risk of piracy or unauthorized modifications. Our team's diverse expertise allows us to develop cutting-edge technologies, like our Polymorphic Code Engine, which continuously adapts to defend against evolving threats. By partnering closely with our clients, we tailor our solutions to meet their unique security needs, providing peace of mind so they can focus on what they do best—creating transformative software."}
                    button={""}
                    type={0}
                    textAlgin={0}
                />
                </div>
                <div className="nonefordesktab">
                <TwoColSection Image={Images2} leftHeading={""}
                    colorHeading={""}
                    rightHeading={""}
                    des={"At MutaEngine, we believe that every developer, from startups to global enterprises, deserves the freedom to innovate without the risk of piracy or unauthorized modifications. Our team's diverse expertise allows us to develop cutting-edge technologies, like our Polymorphic Code Engine, which continuously adapts to defend against evolving threats. By partnering closely with our clients, we tailor our solutions to meet their unique security needs, providing peace of mind so they can focus on what they do best—creating transformative software."}
                    button={""}
                    type={1}
                    textAlgin={0}
                />
                </div>
                

                <div className="w-full flex flex-col items-center justify-center ">
                    <h1 className="text-white font-bold aboutHeadingFont">What We Do ?</h1>
                    <h3 className="text-white Montserrat text-center w-[70%] fs1p2rem">We provide advanced software protection with our Polymorphic Code Engine, ensuring your applications stay secure from piracy, reverse engineering, and unauthorized modifications.</h3>
                </div>

                <Whatwedo />
                <YouInnovate />

                <div className="w-full flex items-center justify-center pt-[5%]">
                    <h1 className="text-white font-bold aboutHeadingFont">Why Choose MutaEngine ?</h1>
                </div>

                <WhyChoose />

                <TwoColSection Image={Images2} leftHeading={"Our Story"}
                    colorHeading={""}
                    rightHeading={""}
                    des={"MutaEngine was born out of a simple realization: traditional methods of software protection were no longer sufficient in an age where hackers are constantly finding new ways to bypass security measures. Our founders set out to create a solution that could adapt and evolve in real-time, providing a level of protection that static methods simply couldn’t match.<br /> <br /> What started as a small project has grown into a leading solution trusted by developers and companies around the world. Today, MutaEngine continues to innovate, constantly improving our technology to meet the challenges of tomorrow."}
                    button={"Learn More"}
                    type={1}
                    textAlgin={1}
                />

                <Getin />

            </div>
        </>
    );
}

export default About;