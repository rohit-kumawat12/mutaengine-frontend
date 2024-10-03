import React from "react";
import Icon1 from "../../images/icon1.png";
import Icon2 from "../../images/icon2.png";
import Icon3 from "../../images/icon3.png";
import Button from "../CommonSection/Button";

const YouInnovate = () => {

    function FeatureCard({ icon, title, description }) {
        return (
            <div className="flex items-start space-x-4">
                <div className="p-2 rounded-lg">
                    <img
                        src={icon}
                        alt="icon"
                        className="w-full max-w-md mx-auto"
                        style={{ height: 64, width: 64 }}
                    />
                </div>
                <div>
                    <h3 className="fs1p2rem font-semibold mb-3">{title}</h3>
                    <p className="text-gray-400 Montserrat">{description}</p>
                </div>
            </div>
        )
    }


    return (
        <div className="relative text-white h-[100vh] m:h-auto md:h-auto lg:h-screen heightauto">
            <div className="absolute bottom-1 right-[-190px] w-[250px] h-[250px] bg-blue-500 blur-[150px] opacity-60"></div>
            <div className="w-full h-full">
                <div className="grid md:grid-cols-2 gap-12 items-center h-full">
                    <div className="space-y-6 youinnovate">
                        <h1 className="aboutHeadingFont md:text-5xl font-bold mobiletextcenter">
                            You Innovate,<br />We <span className="text-teal-400">Secure.</span>
                        </h1>
                        <p className="text-gray-400 Montserrat fs1p2rem mobiletextjustify">With MutaEngine, you can focus on creating cutting-edge software while we ensure it stays protected from threats. Our advanced technology keeps your intellectual property safe, allowing you to concentrate on what you do best.</p>

                        <Button title="Get Start" type={1} />
                    </div>
                    <div className="space-y-10">
                        <FeatureCard
                            icon={Icon1}
                            title="Polymorphic Code"
                            description="MutaEngine constantly mutates your software’s code in real-time, making it nearly impossible for hackers to decompile or reverse-engineer."
                        />
                        <FeatureCard
                            icon={Icon2}
                            title="360° Security"
                            description="Our multi-layered defense mechanisms ensure that every part of your software is protected, from code to data to user transactions."
                        />
                        <FeatureCard
                            icon={Icon3}
                            title="Web3 Integration"
                            description="Fully compatible with decentralized applications, MutaEngine provides robust security for your blockchain projects."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default YouInnovate;