import React from "react";
import Image from "../../images/code.png";

const Code = () => {
    return (
        <div className="relative w-full flex items-center justify-center">
            <div className="absolute bottom-1 left-[-190px] w-[250px] h-[250px] bg-purple-500 blur-[150px] opacity-60"></div>
            <img
                src={Image}
                width={"90%"}
                alt=''
                className="rounded-lg mobileW100"
            />
        </div>
    );
}

export default Code;
