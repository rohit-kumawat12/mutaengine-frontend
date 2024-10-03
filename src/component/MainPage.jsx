import React from "react";
import Hero from "./Mainpage/Hero";
import Code from "./Mainpage/Code";
import CountSection from "./Mainpage/CountSection";
import TwoColSection from "./CommonSection/TwoColSection";
import YouInnovate from "./Mainpage/YouInnovate";
import ReadyTo from "./Mainpage/ReadyTo";
import Images1 from "../images/image1.png";
import Images2 from "../images/image2.png";

const MainPage = () => {
    return (
        <div className="px-[5%]">
            <Hero />
            <CountSection />
            <Code />
            <TwoColSection Image={Images1} leftHeading={"What is the"}
                colorHeading={"Polymorphic"}
                rightHeading={"Code Engine?"}
                des={"Polymorphic code engine dynamically mutates the software's source code in real-time, preventing reverse engineering and ensuring enhanced security."}
                button={"Learn More"}
                type={1}
                textAlgin={1}
            />
            <div className="noneformobile">
                <TwoColSection Image={Images2} leftHeading={"How It"}
                    colorHeading={"Works"}
                    rightHeading={"?"}
                    des={"By constantly changing the software code during access or execution, the  Polymorphic Code Engine creates a moving target, making it extremely  difficult for hackers to analyze or decompile."}
                    button={"Learn More"}
                    type={0}
                    textAlgin={1}
                />
            </div>
            <div className="nonefordesktab">
                <TwoColSection Image={Images2} leftHeading={"How It"}
                    colorHeading={"Works"}
                    rightHeading={"?"}
                    des={"By constantly changing the software code during access or execution, the  Polymorphic Code Engine creates a moving target, making it extremely  difficult for hackers to analyze or decompile."}
                    button={"Learn More"}
                    type={1}
                    textAlgin={1}
                />
            </div>
            
            <YouInnovate />
            <ReadyTo />
        </div>
    );
}

export default MainPage;