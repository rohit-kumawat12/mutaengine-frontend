import React from "react";
import Background from "../../images/Vector.png";
import Image1 from "../../images/image4.png";
import Image2 from "../../images/image3.png";

const Whatwedo = () => {
    return (
        <div className="min-h-auto lg:min-h-screen flex items-center justify-center text-white minheightauto">
            {/* <div className="absolute top-1/4 right-[-190px] w-[250px] h-[250px] bg-white blur-[150px] opacity-60"></div> */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4 max-w-6xl w-full">
                {/* First Card */}
                <div className="border-4 border-cyan-400 rounded-lg p-8 flex flex-col justify-between bg-cover bg-center" style={{ backgroundImage: `url(${Background})`, boxShadow: "#3ED5DD 0px 0px 5px"}}>
                    <p className="text-lg leading-relaxed text-center Montserrat fs1p2rem mobiletextjustify">
                        We specialize in advanced software protection through our innovative
                        Polymorphic Code Engine. By constantly mutating the code at runtime,
                        MutaEngine makes it extremely difficult for hackers to decompile or
                        reverse-engineer software, providing an impenetrable barrier against
                        unauthorized access and piracy.
                    </p>
                    <div className="flex justify-center mt-[8%]">

                        <img
                            src={Image1}
                            alt="Software Protection"
                            className="w-[80%] object-cover"
                        />
                    </div>
                </div>

                {/* Second Card */}
                <div className="border-4 border-cyan-400 rounded-lg p-8 flex flex-col justify-between bg-cover bg-center" style={{ backgroundImage: `url(${Background})`, boxShadow: "#3ED5DD 0px 0px 5px"}}>
                    <p className="text-lg leading-relaxed text-center Montserrat fs1p2rem mobiletextjustify">
                        Our solutions are designed to integrate seamlessly with your
                        existing development workflows, whether you're building traditional
                        applications or pioneering new blockchain-based projects in the
                        Web3 space. MutaEngine offers a range of tools and services to
                        ensure your software is secure from every angle.
                    </p>
                    <div className="flex justify-center mt-[8%]">

                        <img
                            src={Image2}
                            alt="Web3 Security"
                            className="w-[80%] object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Whatwedo;