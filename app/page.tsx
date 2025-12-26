import FeaturedCourses from "./components/FeaturedCourses";
import HeroSection from "./components/HeroSection";

import InfiniteMovingCardsDemo from "./components/InfiniteMovingCardsDemo";
import WhyChooseUs from "./components/WhyChooseUs";
import UpcomingWebinars from "./components/UpcomingWebinars";
import Instructors from "./components/Instructors";
import Footer from "./components/Footer"
export default function Home() {
  return (
    <main className="min-h-screen bg-black/96 antialiased bg-grid-white/[0.02]">
      {/* <h1 className="text-2xl text-center">Chai aur code</h1> */}
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <InfiniteMovingCardsDemo />
      <UpcomingWebinars />
      <Instructors/>
      <Footer/>
    </main>
  );
}
