import React from "react";

const TestimonialsPage = () => {
  // Example testimonials - replace with your actual data
  const testimonials = [
    { 
      quote: "Working with King Ifey was an absolute pleasure! His expertise and dedication was evident in every aspect of the project. He consistently exceeded my expectations and delivered exceptionall results. I highly recommend Ifechukwu Kingsley Muonyili for his professionalism and commitment.", 
      name: "Chijioke Okosisi Emmanuel", 
      position: "Founder, LaundrifyNG",
      image: "https://res.cloudinary.com/dt3czltxx/image/upload/v1727710780/Passport_gsio0m.jpg" // Replace with your Cloudinary image link
    },
    // ... other testimonials
  ];

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-3xl text-center font-semibold text-gray-900 mb-6">What People Say</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white rounded shadow p-4 flex flex-col items-center text-center">
            <img className="rounded-full mb-4" src={testimonial.image} alt={testimonial.name} />
            <blockquote className="text-gray-600 italic mb-2">&quot;{testimonial.quote}&quot;</blockquote>
            <p className="font-semibold">{testimonial.name}</p>
            <p className="text-sm text-gray-500">{testimonial.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsPage;
