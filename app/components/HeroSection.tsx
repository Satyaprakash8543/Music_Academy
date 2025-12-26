'use client'
import Link from "next/link";

import { Spotlight } from "@/app/components/ui/Spotlight";
// import { Button } from "@/app/components/ui/moving-border";
import { HoverBorderGradient } from "@/app/components/ui/hover-border-gradient";


 
const AceternityLogo = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-3 w-3 text-black dark:text-white"
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
      />
    </svg>
  );
};

const HeroSection = () => {
  return (
    <div className="h-auto md:h-160 w-full  rounded-md flex  flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="my-8 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text  bg-linear-to-b form-neutral-50 to-neutral-400">
          Master the art of musics
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Dive into out comprehensive music couses and transform your musical
          journey today . whether you're a beginner or looking to refine your
          skills,join us to unlock your true
        </p>
        <div className="mt-5">
          <Link href={"/courses"}>
           

            {/* <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Borders are cool
            </Button> */}

            <div className="m-2 flex justify-center text-center">
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
              >
                <AceternityLogo />
                <span>Explore Courses</span>
              </HoverBorderGradient>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
