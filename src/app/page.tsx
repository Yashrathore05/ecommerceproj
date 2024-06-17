import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";

import MusicSchoolTestimonials from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChoseUs from "@/components/WhyChoseUs";
import MusicSchoolContactUs from "./contact/page";
import Instructors from "@/components/Instructors";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      
      <HeroSection/>
      <FeaturedCourses/>
      <WhyChoseUs />
      <MusicSchoolTestimonials />
      <UpcomingWebinars/>
      <Instructors/>
      
      
      <MusicSchoolContactUs/>
      <Footer />
    </main>
  );
}
