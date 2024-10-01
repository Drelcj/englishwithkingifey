import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AboutMe = () => {
  return (
    <div className="container mx-auto px-4 py-16 bg-gray-100 rounded-lg shadow-md">
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <div className="mb-6 md:mb-0 md:mr-8">
          <Image
            src="https://res.cloudinary.com/dt3czltxx/image/upload/v1727712659/kingifey/WhatsApp_Image_2024-09-30_at_5.05.15_PM_aq7885.jpg"
            alt="Ifechukwu Kingsley Muonyili"
            width={300}
            height={300}
            className="rounded-full"
          />
        </div>
        <div className="text-gray-600 w-full">
          <h1 className="text-3xl text-center md:text-left font-semibold text-gray-900 mb-8">About Me</h1>
          <p className="mb-4">
          My name is Ifechukwu Kingsley Muonyili, also know as King Ifey. I am a linguist with a keen interest in accent reduction for professionals. I&apos;m broadcast journalist,  a voiceover artist and a  PR consultant.
          </p>
          <p className="mb-4">
          I&apos;ve worked  as a Corporate Communications coordinator for an oil and gas company, Kenyon International West Africa Company limited, where, for three years,  I contributed in helping to put the spotlight on the company. 
          </p>
      
          <p className="mb-4">
          I am currently a news presenter and editor at Nigeria Info and Cool FM Radio stations.
          </p>
          <p className="mb-4">
          I am the author of the book &quot;Win with the Right Grammar&quot; and the creator of the online course &quot;Understanding the Standard British Pronunciation&quot;.  You can find some of my articles at <Link href="https://www.nigeriainfo.fm/port-harcourt/" className="link link-hover text-blue-500" target="_blank" rel="noopener noreferrer">nigeriainfo.fm</Link>. Nigeriainfo.fm 
          </p>
          <p className="mb-4">
          I have a post graduate diploma in Linguistics and communication studies and a masters of art in linguistics from the University of Port Harcourt. My dissertation on &quot;Language Use in Contemporary Igbo Music&quot; is published on  <Link href="https://zienjournals.com" className="link link-hover text-blue-500" target="_blank" rel="noopener noreferrer">Zien Journal of Social Sciences and Humanities</Link>.
          </p>
      
          <div className="flex justify-center md:justify-start mt-4">
            {/* Social Media Links */}
            <Link href="/social-media">
              <button className="text-blue-500 hover:text-blue-600 mr-4">Social Media</button>
            </Link>
            {/* Contact Me Button */}
            <Link href="/contact">
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">Contact Me</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    );
  };
  
  export default AboutMe;