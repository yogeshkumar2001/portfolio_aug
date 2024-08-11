"use client";
import React from "react";
import { Boxes } from "@/component/ui/background-boxes";
import { cn } from "@/utils/cn";
import { SparklesPreview } from "./SparkWord";
import { TypewriterEffectSmoothDemo } from "./TypewriterEffectSmoothDemo";

export function BackgroundBoxesDemo() {
    return (
        <div className="h-96 relative w-full overflow-hidden bg-black flex flex-col items-center justify-center ">
            <div className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

            <Boxes />
            <SparklesPreview/>
            {/* <TypewriterEffectSmoothDemo/> */}
            {/* <h1 className={cn("md:relative z-20 md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50")}>
                Yogesh Kumar,
                <br />
                Frontend Developer

            </h1> */}
            {/* <p className="relative z-20 mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
                Skilled in Tailwind, ReactJS, NextJS, TypeScript, React Query; focused on responsive, dynamic web development with efficient code and state management.
            </p> */}
        </div>
    );
}
