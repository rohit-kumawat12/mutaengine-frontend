import React from "react";
import Whychoose from "../../images/Whychoose.png";

const WhyChoose = () => {

    const features = [
        {
            title: 'State-of-the-Art Technology',
            description:
                'Our Polymorphic Code Engine is a game-changer in the field of software security, offering unparalleled protection against reverse engineering and unauthorized modifications.',
        },
        {
            title: 'Expert Team',
            description:
                'Our team of cybersecurity professionals and software engineers brings a wealth of knowledge and experience to the table, ensuring that your software is protected by the best in the business.',
        },
        {
            title: 'Proven Track Record',
            description:
                'We have a history of successful partnerships with companies of all sizes, from startups to enterprises, helping them secure their software and protect their intellectual property.',
        },
    ];


    return (
        <div className="py-16 px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 ">
                {features.map((feature, index) => (
                    <div key={index} className="border-4 border-cyan-400 p-6 rounded-lg shadow-lg text-center" style={{ boxShadow: "10px 10px 9.7px 0px #4F95FF40"}}>
                        <img
                            src={Whychoose}
                            alt="image"
                            className="w-full h-40 object-cover mb-4 rounded-lg"
                        />
                        <h3 className="font-semibold text-white mb-2 fs1p2rem">
                            {feature.title}
                        </h3>
                        <p className="text-gray-400 Montserrat">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default WhyChoose;