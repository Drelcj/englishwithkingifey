"use client";
import React from "react";

const register = () => {
  return (
    <div className="px-10bg-base-100">
      <div className="hero min-h-screen bg-blue-600">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-white">Sign Up now!</h1>
            <p className="py-6 text-white">
              King Ifey, a skilled linguist and media professional, offers
              tailored English communication training to individuals seeking to
              enhance their accent, pronunciation, and public speaking
              abilities. With a Master&apos;s degree in Linguistics and
              extensive experience in broadcasting, journalism, and PR, King
              Ifey brings a unique blend of academic expertise and practical
              knowledge to his coaching. Through his online course,
              &quot;Understanding the Standard British Pronunciation,&quot; and
              personalized guidance, King Ifey equips clients with the tools and
              strategies necessary to reduce their accents, master the nuances
              of English pronunciation, and deliver impactful presentations. By
              leveraging his years of experience in the media industry, he
              provides invaluable insights into effective communication in
              various professional settings. Whether you&apos;re a non-native
              English speaker striving for fluency or a professional looking to
              elevate your communication skills, King Ifey&apos;s personalized
              approach can help you achieve your goals. 🚀
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-blue-500 text-white">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default register;
