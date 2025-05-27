import React from "react";
import SupportFlyer from "@/components/common/SupportFlyer";
import tools from "@/public/assets/images/tools.png";
import StatsCard from "./_partials/StatsCard";
import Dashboard from "./_partials/Dashboard";
const StatsData = [
    {
        title: "Total earnings",
        stat: 23182.56,
        img: tools,
    },
    {
        title: "Total wagered",
        stat: 3182.56,
        img: tools,
    },
    {
        title: "active referrals",
        stat: 140,
        variant: "red",
    },
    {
        title: "first time depositors",
        stat: 300,
        variant: "green",
    },
];

const Affiliates = () => {
    return (
        <div className="py-16  ">
            <div>
                <SupportFlyer variant="affiliates" />
                <div className="flex items-center flex-col md:flex-row justify-between gap-10 mt-5">
                    {StatsData.map((stat, idx) => (
                        <StatsCard
                            key={idx}
                            img={stat.img}
                            title={stat.title}
                            stat={stat.stat}
                            variant={stat.variant}
                        />
                    ))}
                </div>
                <Dashboard />
            </div>
        </div>
    );
};

export default Affiliates;
