import React from "react";
import Button from "./Button";

const TwoColSection = (props) => {
    if (props.type) {
        return (
            <div className="flex items-center justify-centers m:min-h-auto md:min-h-auto lg:min-h-screen minheightauto text-white px-4 py-10 md:py-20">
                <div className="w-full flex flex-col md:flex-row items-center space-y-8 md:space-y-0">
                    <div className="w-full md:w-1/2">
                        <img
                            src={props.Image}
                            alt=''
                            className="rounded-lg w-[90%] md:w-[85%] mx-auto"
                        />
                    </div>
                    <div className="w-full md:w-1/2 space-y-6 md:space-y-8 text-center md:text-left px-4">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                            {props.leftHeading} <span className="text-cyan-400">{props.colorHeading}</span> {props.rightHeading}
                        </h1>
                        <p className="text-gray-300 Montserrat text-base sm:text-lg md:fs1p2rem mobiletextjustify" dangerouslySetInnerHTML={{ __html: props.des }}></p>
                        {props.button && <Button title={props.button} type={0} />}
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="flex items-center justify-center m:min-h-auto md:min-h-auto lg:min-h-screen minheightauto text-white px-4 py-10 md:py-20">
                <div className="w-full flex flex-col md:flex-row items-center space-y-8 md:space-y-0">
                    <div className="flex flex-col items-end w-full md:w-1/2 space-y-4 text-center md:text-end px-4">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                            {props.leftHeading} <span className="text-cyan-400">{props.colorHeading}</span> {props.rightHeading}
                        </h1>
                        <p className={`text-gray-300 Montserrat text-base sm:text-lg md:fs1p2rem mobiletextjustify ${props.textAlgin ? 'text-end' : ''}`} dangerouslySetInnerHTML={{ __html: props.des }}></p>
                        {props.button && <Button title={props.button} type={0} />}
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                        <img
                            src={props.Image}
                            alt=''
                            className="rounded-lg w-[90%] md:w-[85%] mx-auto"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default TwoColSection;
