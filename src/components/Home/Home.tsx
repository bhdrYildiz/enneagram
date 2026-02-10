"use client"

import { useEffect } from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import Services from './Services/Services'
import Process from './Process/Process'
import OurTeam from './OurTeam/OurTeam'
import EventsSection from './Events/EventsSections'
import TestimonialsSection from './Testimonial/TestimonialsSection'
import BlogSection from './BlogSection.tsx/BlogSection'
/*import Hero from './Hero/Hero'
import Destination from './Destination/Destination'
import Hotel from './Hotel/Hotel'
import WhyChoose from './WhyChoose/WhyChoose'
import Review from './Review/Review'
import News from './News/News'
import NewsLetter from './NewsLetter/NewsLetter'
import AOS from 'aos'; */
/*import 'aos/dist/aos.css'; */

const Home = () => {

    /* useEffect(() => {
         const initAOS = async () => {
             await import("aos");
 
             AOS.init({
                 duration: 1000,
                 easing: "ease",
                 once: true,
                 anchorPlacement: "top-bottom",
             });
         };
         initAOS();
 
     }, []); */

    return (
        <div className="overflow-hidden">
            <Hero />
            <About />
            <Services />
            <Process />
            <OurTeam />
            <EventsSection />
            <TestimonialsSection />
            <BlogSection />
        </div>
    )
}

export default Home