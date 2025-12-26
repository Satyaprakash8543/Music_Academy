"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/app/components/ui/infinite-moving-cards";
import { cn } from "@/app/lib/utils";

const musicSchoolTestimonials = [
  {
    quote:
      "Joining this music school completely transformed my confidence. The instructors are incredibly supportive, and the live practice sessions helped me improve faster than I ever imagined.",
    name: "Aarav Sharma",
    title: "Guitar Student",
  },
  {
    quote:
      "The structured lessons and real-time feedback made learning piano enjoyable and stress-free. I can clearly see my progress every week.",
    name: "Neha Verma",
    title: "Piano Student",
  },
  {
    quote:
      "As a beginner vocalist, I was nervous at first, but the teachers made everything simple and motivating. The performance training sessions were a game changer for me.",
    name: "Riya Patel",
    title: "Vocal Training Student",
  },
  {
    quote:
      "What I love most is the balance between theory and practical learning. The curriculum is well designed, and the instructors truly care about student growth.",
    name: "Kabir Singh",
    title: "Music Theory Student",
  },
  {
    quote:
      "This school helped my child discover a real passion for music. The classes are engaging, and the teachers are patient and encouraging.",
    name: "Ananya Mehta",
    title: "Parent of a Music Student",
  },
];

const InfiniteMovingCardsDemo = () => {
  return (
    <div className="mt-15 relative   w-full  dark:bg-black">
     <div
        className={cn(
          "absolute inset-0",
          "[bg-size:40px_40px]",
          "[bg-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[bg-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />

      <h1 className="text-center sm:text-2xl md:text-3xl mb-8 font-bold z-10 ">
        Hear Our Harmony:Voices of Success
      </h1>

      <div className="h-100 rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={musicSchoolTestimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
};

export default InfiniteMovingCardsDemo;



