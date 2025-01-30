import React from "react";
import Image from "next/image";

const TestimonialSection = () => {
  return (
    <div className="bg-black p-10 flex flex-col items-center justify-center gap-10 pt-40 pb-40">
      <div className="flex space-x-10 flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6"> {/* Use flex and space-x to create side-by-side layout */}
        <div className="card w-96 bg-base-100 shadow-xl md:w-1/2">  {/* Adjust width as needed */}
          <div className="avatar justify-center py-10">
            <div className="w-24 rounded-full ring ring-blue-500 ring-offset-2">
              <Image src="https://res.cloudinary.com/dt3czltxx/image/upload/v1698814812/samples/look-up.jpg" alt="User Avatar" />
            </div>
          </div>
          <div className="card-body items-center justify-center">
            <h2 className="card-title text-blue-500">Sarah</h2>
            <p className="text-align-center text-base">
            King Ifey&apos;s passion for language is infectious. His online course was engaging and informative. I not only improved my pronunciation but also gained valuable insights into the nuances of English grammar and usage. I&apos;m grateful for his guidance and support.&ldquo;
            </p>
          </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl md:w-1/2">  {/* Adjust width as needed */}
          <div className="avatar justify-center py-10">
            <div className="w-24 rounded-full ring ring-blue-500 ring-offset-2">
              <Image src="https://res.cloudinary.com/dt3czltxx/image/upload/v1698814813/samples/man-on-a-escalator.jpg" alt="User Avatar" />
            </div>
          </div>
          <div className="card-body items-center justify-center">
            <h2 className="card-title text-blue-500">David</h2>
            <p className="text-align-center text-base">
            I was struggling to improve my pronunciation for my broadcasting career. King Ifey&apos;s training was a game-changer. He broke down the complexities of English pronunciation into manageable steps, and his positive feedback boosted my confidence. I highly recommend him to anyone looking to enhance their English communication skills.
            </p>
          </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl md:w-1/2">  {/* Adjust width as needed */}
          <div className="avatar justify-center py-10">
            <div className="w-24 rounded-full ring ring-blue-500 ring-offset-2">
              <Image src="https://res.cloudinary.com/dt3czltxx/image/upload/v1709564009/drel_mid_pov.jpg_export_syl5rv.jpg" alt="User Avatar" />
            </div>
          </div>
          <div className="card-body items-center justify-center">
            <h2 className="card-title text-blue-500">Drel Chijoke</h2>
            <p className="text-align-center text-base">
            King Ifey&apos;s expertise and patience were invaluable in helping me overcome my accent challenges. His online course and personalized guidance transformed my English communication skills. I&apos;m now confident and articulate in both professional and personal settings.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
