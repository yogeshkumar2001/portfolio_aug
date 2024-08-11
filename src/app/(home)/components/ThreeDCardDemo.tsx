"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/component/ui/3d-card";
import Link from "next/link";
interface ThreeDCardDemoProps {
    link: string;
    imageSrc: string;
    linkText: string;
}

export function ThreeDCardDemo({ link, imageSrc, linkText }: ThreeDCardDemoProps) {
    return (
        <div className="" style={{ marginTop: "-5rem" }}>
            <CardContainer className="inter-var" >
                <CardBody className=" relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black  w-auto   rounded-xl p-6 " >
                <div className="flex justify-between items-center">
                        <CardItem
                            translateZ={20}
                            as={Link}
                            href={link}
                            target="__blank"
                            className="px-4 py-2 rounded-xl text-xs font-normaltext-white"
                        >
                            Visit now →
                        </CardItem>
                    </div>
                    <CardItem translateZ="100" className="">
                        <Image
                            src={imageSrc}
                            height="1000"
                            width="1000"
                            className=" object-cover rounded-xl group-hover/card:shadow-xl"
                            alt="thumbnail"
                        />
                    </CardItem>
                    
                </CardBody>
            </CardContainer>
        </div>
    );
}
