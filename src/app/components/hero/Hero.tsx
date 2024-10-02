"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const slides = [
  {
    title: "Learn English from the Comfort of Your Home",
    subtitle: "Flexible online courses and personalized coaching to fit your busy schedule.",
    cta: "Explore Our Online Programs",
    link: "/my-services",
    image: "https://res.cloudinary.com/dt3czltxx/image/upload/v1727713062/kingifey/King_Ifey_5_c9qlv9.jpg"
  },
  {
    title: "Speak English with a Clear and Confident Accent",
    subtitle: "Enhance your professional image and make a lasting impression.",
    cta: "Book an Assessment",
    link: "/media",
    image: "https://res.cloudinary.com/dt3czltxx/image/upload/v1727713065/kingifey/King_Ifey_2_mv5miz.jpg"
  },
  {
    title: "Stop Wishing, Start Learning, Start Here.",
    subtitle: "Join my classes today",
    cta: "Discover Your Perfect Course",
    link: "/my-online-courses",
    image: "https://res.cloudinary.com/dt3czltxx/image/upload/v1727713063/kingifey/King_Ifey_3_p66sxd.jpg"
  },
  {
    title: "Check out what's trending",
    subtitle: "Read my latest blog posts",
    cta: "Read Now",
    link: "https://www.nigeriainfo.fm/port-harcourt/",
    image: "https://res.cloudinary.com/dt3czltxx/image/upload/v1727713065/kingifey/King_Ifey_1_zu6rvi.jpg"
  },
  {
    title: "Grab a copy of my books",
    subtitle: "Browse my online store",
    cta: "Shop Now",
    link: "/my-books",
    image: "https://res.cloudinary.com/dt3czltxx/image/upload/v1727713065/kingifey/King_Ifey_1_zu6rvi.jpg"
  },
  {
    title: "Unlock Opportunities with Fluent English",
    subtitle: " Improve your career prospects, travel experiences, and personal relationships.",
    cta: "Start Your Language Journey",
    link: "/media",
    image: "https://res.cloudinary.com/dt3czltxx/image/upload/v1727713063/kingifey/King_Ifey_4_ydpuwl.jpg"
  }
];

const HeroSlider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const timer = setInterval(() => {
      setSlideIndex((prevSlideIndex) => (prevSlideIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  if (!isClient) {
    return <div>Loading...</div>;
  }

  return (
    <div className="relative w-full h-[80vh] bg-cover bg-center">
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          className={`absolute w-full h-[80vh] bg-cover bg-center transition-all duration-1000 ease-in-out ${slideIndex === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          style={{ backgroundImage: `url(${slide.image})` }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <div className="h-full flex flex-col justify-center items-center text-white">
            <motion.h1 className="text-4xl mb-4" whileHover={{ scale: 1.1 }}>{slide.title}</motion.h1>
            <motion.p className="text-xl mb-8" whileHover={{ scale: 1.1 }}>{slide.subtitle}</motion.p>
            <Link href={slide.link}>
              <motion.a className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-red-400 hover:text-black transition-colors duration-200" whileHover={{ scale: 1.1 }}>{slide.cta}</motion.a>
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default HeroSlider;
