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
        <div className="relative text-white h-auto md:h-screen">
            <div className="absolute bottom-1 right-[-190px] w-[250px] h-[250px] bg-blue-500 blur-[150px] opacity-60"></div>
            <div className="w-full h-full">
                <div className="grid md:grid-cols-2 gap-12 items-center h-full">
                    <div className="space-y-6 youinnovate">
                        <h1 className="aboutHeadingFont md:text-5xl font-bold mobiletextcenter">
                        Our Values
                        </h1>
                        <p className="text-gray-400 Montserrat fs1p2rem mobiletextjustify">We are driven by innovation, integrity, excellence, and a customer-centric approach to deliver unparalleled software security solutions.</p>
                        
                        <Button title="Get Start" type={1}/>
                    </div>
                    <div className="space-y-10">
                        <FeatureCard
                            icon={Icon1}
                            title="Innovation"
                            description="We are committed to pushing the boundaries of what’s possible in software security. Our team constantly explores new technologies and methodologies to keep our solutions at the forefront of the industry."
                        />
                        <FeatureCard
                            icon={Icon2}
                            title="Integrity"
                            description="Trust is at the core of everything we do. We are dedicated to providing transparent, reliable, and effective security solutions that our clients can depend on."
                        />
                        <FeatureCard
                            icon={Icon3}
                            title="Excellence"
                            description="We strive for excellence in every aspect of our work, from the quality of our products to the level of service we provide to our clients."
                        />
                        <FeatureCard
                            icon={Icon1}
                            title="Customer-Centric"
                            description="Our clients are our top priority. We work closely with them to understand their unique needs and tailor our solutions to meet those needs."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default YouInnovate;