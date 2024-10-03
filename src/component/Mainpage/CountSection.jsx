import React from "react";

const CountSection = () => {

    // const url = "https://mutaengine-backend.onrender.com";
    // const url = "http://localhost:5000";
    // const url = "https://mutaengine-backend-production.up.railway.app"

    // const [stats, setStats] = useState([
    //     { number: '', label: '' },
    //     { number: '', label: '' },
    //     { number: '', label: '' }
    // ]);

    // useEffect(() => {
    //     const fetchStats = async () => {
    //         try {
    //             const response = await fetch(`${url}/api/data/countsection`);
    //             const result = await response.json();
    //             setStats(result);
    //         } catch (error) {
    //             console.error("Error fetching stats: ", error);
    //         }
    //     };

    //     fetchStats();
    // }, []);

    function StatItem({ number, label }) {
        return (
            <div className="flex items-center text-center">
                <span className="text-4xl font-bold mb-2 mb-2 mr-[15px]">{number}</span>
                <span className="text-sm text-cyan-400 uppercase tracking-wider w-[150px] md:w-[50px] Montserrat">{label}</span>
            </div>
        );
    }

    return (
        <div className="w-full text-white py-8 px-4">
            <div className="w-[75%] mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                <StatItem number="5000+" label="ACTIVE USERS" />
                <div className="hidden md:block h-[14px] w-[1px] bg-white"></div>
                <StatItem number="300+" label="COMPANIES TRUSTING MUTAENGINE" />
                <div className="hidden md:block h-[14px] w-[1px] bg-white"></div>
                <StatItem number="7000+" label="UPDATED USERS" />
            </div>
        </div>
    );
}

export default CountSection;