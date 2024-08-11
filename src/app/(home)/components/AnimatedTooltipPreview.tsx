"use client";
import React from "react";
import { AnimatedTooltip } from "@/component/ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "Instagram",
    designation: "Instagram",
    link:"https://www.instagram.com/_yuvi18_?igsh=MTUyaWV1M3U4aGNoMQ==",
    image:
      "https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-instagram-new-circle-512.png",
  },
  {
    id: 2,
    name: "Github",
    designation: "Github",
    link:"https://github.com/yogeshkumar2001",
    image:"/github.jpg"
  },
  {
    id: 3,
    name: "LinkedIn",
    designation: "LinkedIn",
    link:"https://linkedin.com/in/yogesh-kumar18/",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/1200px-LinkedIn_icon_circle.svg.png",
  },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
