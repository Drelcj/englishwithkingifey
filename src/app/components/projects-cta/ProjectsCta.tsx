import Link from "next/link";
import React from "react";

const LandingPageCTA = () => {
  return (
    <div className=" text-blue-600 text-center p-8">
      <h2 className="text-2xl font-semibold mb-4">King Ifey&apos;s Corner</h2>
      <p className="mb-6">
      Join King Ifey in his corner for insights, inspiration, and English language tips. Discover effective learning strategies, career advice, personal development tips, and behind-the-scenes glimpses into his work as a broadcast journalist, voiceover artist, and PR consultant. Stay tuned for regular updates and engaging content!</p>
      <Link href="/contact" className="bg-blue-600 text-white font-bold py-2 px-4 rounded">
        Reach Out to Me
      </Link>
    </div>
  );
};

export default LandingPageCTA;
