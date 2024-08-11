"use client";

import Image from "next/image";
import { Tabs } from "@/component/ui/tabs";
import { ThreeDCardDemo } from "./ThreeDCardDemo";

export function TabsDemo() {
    const tabs = [
        {
            title: "PostKaTadka",
            value: "PostKaTadka",
            content: (
                <div className="w-full overflow-hidden  h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p>PostKaTadka</p>
                    <ThreeDCardDemo link="https://postkatadka.onrender.com/" linkText="" imageSrc="/postkatadka.png"/>
                </div>
            ),
        },
        {
            title: "Daily Trade",
            value: "dailyTrade",
            content: (
                <div className="w-full overflow-hidden  h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p>Daily Trade</p>
                    <ThreeDCardDemo link="https://daily-trade.vercel.app/" linkText="" imageSrc="/dailytrade.png"/>
                </div>
            ),
        },
        {
            title: "Resume Builder",
            value: "resumeBuilder",
            content: (
                <div className="w-full overflow-hidden  h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p>Resume Builder</p>
                    <ThreeDCardDemo link="https://resumebuilder-4140d.web.app/" linkText="" imageSrc="/resumeBuilder.png"/>
                </div>
            ),
        },
        {
            title: "Welder Dashboard",
            value: "welderDashboard",
            content: (
                <div className="w-full overflow-hidden  h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p>Welder Dashboard</p>
                    <ThreeDCardDemo link="" linkText="" imageSrc="/welderDashboard.png"/>
                </div>
            ),
        },
        {
            title: "White Board",
            value: "whiteBoard",
            content: (
                <div className="w-full overflow-hidden  h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p>White Board</p>
                    <ThreeDCardDemo link="https://yogeshkumar2001.github.io/White-Board/public/index.html" linkText="" imageSrc="/whiteBoard.png"/>
                </div>
            ),
        },
    ];

    return (
        <div className="h-[20rem] text-white md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-36 ">
            <Tabs tabs={tabs} />
        </div>
    );
}

// const DummyContent = () => {
//     return (
//         // <Image
//         //     src="/linear.webp"
//         //     alt="dummy image"
//         //     width="1000"
//         //     height="1000"
//         //     className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
//         // />
//         <ThreeDCardDemo/>
//     );
// };
