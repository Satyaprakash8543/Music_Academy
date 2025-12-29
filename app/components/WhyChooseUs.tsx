"use client";
import React from "react";
import { StickyScroll } from "@/app/components/ui/sticky-scroll-reveal";

const musicSchoolContent = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
       content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="https://images.unsplash.com/photo-1764957080687-9569e738a238?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
        content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="https://images.unsplash.com/photo-1766860891078-3aeb5647953f?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    
      content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="https://cdn.pixabay.com/collection/thumbnail/2025/06/05/island-2722471_1280.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),

  },
   

  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
          content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="https://media.istockphoto.com/id/2238413059/photo/cityscape-of-mexico-city-at-polanco-neighborhood-on-a-sunny-morning-img-sep2-creative-image.jpg?s=2048x2048&w=is&k=20&c=c9TC_h6FCLOVQ9y8PO6sdkrK1UxNcauqkWPocpMRdag="
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];

const WhyChooseUs = () => {
  return <div className="w-full ">
     <StickyScroll content={musicSchoolContent} />
  </div>;
};

export default WhyChooseUs;
