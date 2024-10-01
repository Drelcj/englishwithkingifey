'use client'
import React, { useState } from "react";
import { FaXTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  // Social media links 
  const socialMediaLinks = [
    { name: <FaInstagram />, url: "https://www.instagram.com/englishwith_kingifey?igsh=MWtlcHd2bWxlb2Rw&utm_source=qr" },
    { name: <FaLinkedinIn />, url: "https://ng.linkedin.com/in/chiomaezenwafor" },
    { name: <FaFacebookF />, url: "https://www.facebook.com/chiomahopeezenwafor?mibextid=LQQJ4d" },
    { name: <FaXTwitter />, url: "https://x.com/chiomaezenwafo?t=FRWKssWYzwedLGwCGqKEJA&s=09" },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    alert('Thank you for your message. We will get back to you shortly.');
  };

  return (
    <div className="container mx-auto px-4 py-16 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-3xl text-center font-semibold text-gray-900 mb-6">Contact Me</h1>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message:</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={4} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button type="submit" className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Send Message</button>
        </div>
      </form>

      <div className="flex justify-center space-x-4 mt-6">
        {socialMediaLinks.map((social, index) => (
          <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
            {social.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contact;
