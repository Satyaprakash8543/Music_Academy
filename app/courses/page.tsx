"use client";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/app/components/ui/3d-card";
import webinarsData from "@/app/data/musicfeatured_courses.json";

const page = () => {
  return (
    <div className="min-h-screen bg-black py-12 pt-36">
      <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">
        {/* All Courses {coursesData.courses.length} */}
         All Courses {webinarsData.webinars.length}
      </h1>
      <div className="flex flex-wrap justify-center">
        {webinarsData.webinars.map((items) => (
          <CardContainer className="inter-var mr-3">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/10 dark:bg-black dark:border-white/20 border-black/10 w-auto sm:w-120 h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
               {items.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
              {items.description}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <img
                  src={items.image}
                  height="8000"
                  width="8000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt={items.title}
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  as="a"
                  // href="https://twitter.com/mannupaaji"
                  href="#"
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Try now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Sign up
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
};

export default page;
