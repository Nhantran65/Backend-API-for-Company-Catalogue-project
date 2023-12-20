/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";


const Testimonial = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">What They Say</h2>
        <div className="flex flex-wrap -mx-4">
          {/* Again, this is just a static example for illustration. Typically, you'd map through an array of testimonials. */}
          {[1, 2].map((testimonial, idx) => (
            <div key={idx} className="md:w-1/2 w-full px-4 mb-12">
              <blockquote className="relative p-8 bg-white border rounded-md shadow-md">
                <svg
                  className="absolute left-0 top-0 w-10 h-10 text-blue-600 transform -translate-x-3 -translate-y-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 125"
                >
                  <path d="M8.2 37.3c0 12.4 10.2 22.5 22.6 22.5V64C13.9 64 3.1 50.6 3.1 37.3 3.1 23.8 13.9 10.4 30.8 10.4v14.3C18.4 24.7 8.2 34.7 8.2 37.3zM50.6 37.3c0 12.4 10.2 22.5 22.6 22.5V64C56.3 64 45.5 50.6 45.5 37.3 45.5 23.8 56.3 10.4 73.2 10.4v14.3C60.8 24.7 50.6 34.7 50.6 37.3z" />
                </svg>
                <p className="text-lg mb-4">
                  "This platform has immensely benefited my search for the best
                  IT internship opportunities!"
                </p>
                <cite className="block mt-4 font-bold">— Name, University</cite>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;