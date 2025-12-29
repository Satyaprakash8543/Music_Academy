"use client";
import Link from "next/link";
import { HoverEffect } from "@/app/components/ui/card-hover-effect";

const UpcomingWebinars = () => {
  const featuredWebinars = [
    {
      title: "Understanding Music Theory",
      description:
        "Dive deep into the fundamentals of music theory and enhance your musical skills.",
      slug: "understanding-music-theory",
      isFeatured: true,
    },
    {
      title: "Mastering Guitar Chords & Progressions",
      description:
        "Learn essential guitar chords, smooth transitions, and popular progressions used in modern music.",
      slug: "mastering-guitar-chords",
      isFeatured: true,
    },
    {
      title: "Vocal Techniques for Beginners",
      description:
        "Improve pitch, breathing, and vocal control with professional singing techniques.",
      slug: "vocal-techniques-for-beginners",
      isFeatured: false,
    },
    {
      title: "Piano Basics: From Scales to Songs",
      description:
        "A step-by-step guide to learning piano scales, hand coordination, and simple songs.",
      slug: "piano-basics-scales-to-songs",
      isFeatured: true,
    },
    {
      title: "Music Production with Digital Audio Workstations",
      description:
        "Explore music production fundamentals using popular DAWs like FL Studio, Ableton, and Logic Pro.",
      slug: "music-production-with-daw",
      isFeatured: false,
    },
    {
      title: "Songwriting: Turning Ideas into Music",
      description:
        "Learn how to write meaningful lyrics and compose melodies that connect with listeners.",
      slug: "songwriting-turning-ideas-into-music",
      isFeatured: true,
    },
  ];

  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-2 sm:px-6">
        <div className="text-center">
          <h2 className="uppercase text-base text-teal-600 font-semibold tracking-wide">
            Featured courses
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Enhance Your Musical Journey
          </p>
        </div>
        <div className="mt-10 ">
          <HoverEffect
            items={featuredWebinars.map((webinar) => ({
              title: webinar.title,
              description: webinar.description,

              link: "/",
            }))}
          />
        </div>
        <div className="my-4 text-center">
          <Link href={"/"}>
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-px focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                View All webinars
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UpcomingWebinars;
