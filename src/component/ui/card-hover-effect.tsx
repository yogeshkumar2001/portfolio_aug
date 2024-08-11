"use client"
import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

type LogoItem = {
    logo: React.ReactNode; // The React element representing the logo
    title: string; // Title or description for the logo
};

export const HoverEffect = ({
    items,
    className,
}: {
    items: {
        title: string;
        description: string;
        link: string;
        logos: LogoItem[]; // Array of React elements;
    }[];
    className?: string;
}) => {
    let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2  py-10",
                className
            )}
        >
            {items.map((item, idx) => (
                <div
                   
                    key={idx}
                    className="relative group  block p-2 h-full w-full"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className="absolute inset-0 h-full w-full bg-neutral-200 bg-slate-800/[0.8] block  rounded-3xl"
                                layoutId="hoverBackground"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { duration: 0.15 },
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: { duration: 0.15, delay: 0.2 },
                                }}
                            />
                        )}
                    </AnimatePresence>
                    <Card>
                        <CardTitle>{item.title}</CardTitle>
                        <div className="flex flex-wrap gap-5 items-center justify-center">
                            {item.logos.map((child, index) => (
                                <CardDescription
                                    key={index} // Adding key prop here
                                    title={child.title}
                                >
                                    {child.logo}
                                </CardDescription>
                            ))}
                        </div>
                    </Card>
                </div>
            ))}
        </div>
    );
};

export const Card = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent border-white/[0.2] group-hover:border-slate-700 relative z-20",
                className
            )}
        >
            <div className="relative z-50 max-w-2xl">
                <div className="p-4">{children}</div>
            </div>
        </div>
    );
};

export const CardTitle = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <h4 className={cn("text-zinc-100 text-center font-bold tracking-wide mt-4 mb-2", className)}>
            {children}
        </h4>
    );
};

export const CardDescription = ({
    className,
    children,
    title,
}: {
    className?: string;
    children: React.ReactNode;
    title: string;
}) => {
    return (
        <div>
            <div
                className={cn(
                    `h-16 w-16 rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)]
  shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]
  `,
                    className
                )}
            >
                {children} {/* Correctly passing children */}
            </div>
            {title && <div className="text-center mt-2 text-white">{title}</div>}
        </div>
    );
};
