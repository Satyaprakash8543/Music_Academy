"use client"
import courseData from "@/app/data/music_courses.json"
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";

interface Courses{
             id: number,      
            title: string,
            slug: string,
            description: string,
            price: number,
            instructor: string,
            isFeatured: boolean,
            
}

const FeaturedCourses = () => {
   const featuredCourses= courseData.courses.filter((courses:Courses)=>courses.isFeatured)
  return (
    <div className="py-12 bg-gray-900">
              <div>
                <div className="text-center">
                    <h2 className="uppercase text-base text-teal-600 font-semibold tracking-wide"> Featured courses</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Learn with the Best</p>
                </div>
              </div>
              <div className="mt-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                   {featuredCourses.map((course:Courses)=>(
                    <div key={course.id} className="flex justify-center "> 
                     <BackgroundGradient 
                     className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm"
                     ><div className="p-4 sm:p-6 flex flex-col items-center text-center grow">
                            <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{course.title}</p>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400 grow">{course.description}</p>
                            <Link href={`/courses/${course.slug}`} className="py-2 px-2 bg-white rounded  text-neutral-700 hover:bg-gray-100 mt-5"> Learn More</Link>
                     </div>
                     </BackgroundGradient>
                    </div>
                   ))}
                </div>

              </div>
              <div className="mt-20 text-center">
                <Link href={"/courses"}
                // className="px-3 py-2 text-xl rounded-2xl font-extralight border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200">
                className=" group relative px-8 py-3 rounded-full  bg-black text-neutral-300 text-sm hover:shadow-2xl hover:shadow-white/10 transition duration-200 border border-slate-600">
                  View All Courses
                   <span className="absolute inset-x-0  h-px  w-5/6  mx-auto bottom-0 shadow-2xl  bg-linear-to-r from-transparent via-cyan-500 to-transparent"></span>
                   <span className=" opacity-0 group-hover:opacity-100  transition-opacity duration-300 absolute inset-x-0  h-1  blur-sm w-full  mx-auto bottom-0 shadow-2xl  bg-linear-to-r from-transparent via-cyan-300 to-transparent"></span>
                </Link>
              </div>
    </div>
  );
}

export default FeaturedCourses;
