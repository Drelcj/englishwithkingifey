import Hero from "./components/hero/Hero";
import VideoPage from "./components/videopage/VideoPage";
import Register from "./components/register/Register";
import ProjectsCta from "./components/projects-cta/ProjectsCta";
import TestimonialSection from "./components/testimonial/Testimonial";

export default function Home() {
  return (
   <main>
    <div>
      <Hero />
    </div>
    <div className="p-10 bg-blue-100 rounded-lg shadow-md">
        <VideoPage 
        videoId="QJo697oOZ6U"
          text="Clarity of speech is not a gift. It is something that can be easily acquired through a meticulous approach. This video outlines 45 English words that you might be mispronouncing. A quick watch will help improve your pronunciaton of these 45 words and improved your clarity.  This is a snippet of the main English pronunciation course which I have designed to help you improve your spoken English"
        />
      </div>
      <div>
        <Register />
      </div>
      <div>
      <ProjectsCta />
      </div>
      <div>
        <TestimonialSection />
      </div>
   </main>
  );
}
