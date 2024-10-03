import React from "react";
import BubbleImage from "../../images/Bubble.png";
import Button from "../CommonSection/Button";

const Hero = () => {

    // const url = "https://mutaengine-backend.onrender.com";
    // const url = "http://localhost:5000";
    // const url = "https://mutaengine-backend-production.up.railway.app"

    // const [data, setData] = useState({
    //     firstHeading: '',
    //     mainHeading1: '',
    //     mainHeading2: '',
    //     mainHeading3: '',
    //     thirdHeading: '',
    //     firstButton: '',
    //     secondButton: ''
    // });

   
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch(`${url}/api/data/mainsection`);
    //             const result = await response.json();
    //             setData(result);
    //         } catch (error) {
    //             console.error("Error fetching data: ", error);
    //         }
    //     };

    //     fetchData();
    // }, []);

    return (
        <main className="relative container mx-auto flex flex-col md:flex-row items-center justify-between heroHeight mobileW100">
            <div className="absolute top-1/4 left-[-190px] w-[250px] h-[250px] bg-white blur-[150px] opacity-60"></div>
            <div className="md:w-1/2 space-y-6 mobileW100 heroMobile">
                <Button title="Protecting Code, Preserving Innovation" type={0} />
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Revolutionizing Software Security with{" "}
                    <span className="text-cyan-400">Dynamic</span>{" "}Mutation
                </h1>
                <p className="text-xl Montserrat">
                Introducing the Polymorphic Code Engine - A New Era in Protecting Your Software.
                </p>
                <div className="space-x-4">
                    <Button title="Learn More" type={1} />
                    <Button title="Start Now" type={0} />
                </div>
            </div>
            <div className="mt-10 md:mt-0 mobileW100">
                <img
                    src={BubbleImage}
                    alt="Abstract 3D shape representing dynamic mutation"
                    className="w-full max-w-md mx-auto"
                    style={{ height: 400, width: 400 }}
                />
            </div>

        </main>
    );
}

export default Hero;