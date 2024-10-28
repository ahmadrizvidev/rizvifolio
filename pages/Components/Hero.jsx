import React from "react";
import { motion } from "framer-motion";
import { useRouter } from 'next/router'; 
import { FaFacebookF } from "react-icons/fa";

function Hero() {
  const router = useRouter(); // Get router instance

  return (
    <motion.div>
      <div className="Hero">
        <div className="mt-24 myhero grid md:grid-cols-2 items-center md:gap-4 gap-8 max-w-5xl max-md:max-w-md mx-auto">
          <div className="order-1 md:order-1 max-md:text-center">
            <h4>Website Developer</h4>
            <h3 className="text-white">
              Hello I'm <br /> <span>Ahmad Hassan</span>
            </h3>
            <p className="mt-4 text-sm text-white">
              Crafting dynamic and responsive digital solutions for a seamless online experience
            </p>

            {/* Button and Social Icons */}
            <div className="flex items-center space-x-4 mt-8 mywork">
              <button
                type="button"
                onClick={() => router.push('/work')} // Redirect to /work
                className="my-bt rounded text-sm outline-none tracking-wide text-[#0bfa9d] bg-transparent border-2 border-[#0bfa9d] hover:bg-[#0bfa9d] hover:text-white transition-all ease-in-out duration-300"
              >
                View Work
              </button>

              {/* Social Media Icons */}
              <div className="flex space-x-3">
                <a href="https://bit.ly/40hrLde" target="_blank" rel="noopener noreferrer" className="bg-blue-600 rounded-full text-white hover:bg-blue-700 p-2 ml-4">
                  <FaFacebookF className="w-5 h-[15px]" />
                </a>
                <a href="https://bit.ly/48qwIT5" target="_blank" rel="noopener noreferrer" className="ml-4">
                  {/* LinkedIn Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="inline w-7 h-7" viewBox="0 0 176 176">
                    <g data-name="Layer 2">
                      <rect width="176" height="176" fill="#0077b5" rx="24" />
                      <path fill="#fff" d="M63.4 48a15 15 0 1 1-15-15 15 15 0 0 1 15 15zM60 73v66.27a3.71 3.71 0 0 1-3.71 3.73H40.48a3.71 3.71 0 0 1-3.72-3.72V73a3.72 3.72 0 0 1 3.72-3.72h15.81A3.72 3.72 0 0 1 60 73zm82.64 34.5v32.08a3.41 3.41 0 0 1-3.42 3.42h-17a3.41 3.41 0 0 1-3.42-3.42v-31.09c0-4.64 1.36-20.32-12.13-20.32-10.45 0-12.58 10.73-13 15.55v35.86A3.42 3.42 0 0 1 90.3 143H73.88a3.41 3.41 0 0 1-3.41-3.42V72.71a3.41 3.41 0 0 1 3.41-3.42H90.3a3.42 3.42 0 0 1 3.42 3.42v5.78c3.88-5.82 9.63-10.31 21.9-10.31 27.18 0 27.02 25.38 27.02 39.32z" />
                    </g>
                  </svg>
                </a>
                <a href="https://bit.ly/4eYzNfr" target="_blank" rel="noopener noreferrer" className="ml-4">
                  {/* Instagram Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="inline w-7 h-7" viewBox="0 0 24 24">
                    <linearGradient id="a" x1="-37.106" x2="-26.555" y1="-72.705" y2="-84.047" gradientTransform="matrix(0 -1.982 -1.844 0 -132.522 -51.077)" gradientUnits="userSpaceOnUse">
                      <stop offset="0" stopColor="#fd5" />
                      <stop offset=".5" stopColor="#ff543e" />
                      <stop offset="1" stopColor="#c837ab" />
                    </linearGradient>
                    <path fill="url(#a)" d="M1.5 1.633C-.386 3.592 0 5.673 0 11.995c0 5.25-.916 10.513 3.878 11.752 1.497.385 14.761.385 16.256-.002 1.996-.515 3.62-2.134 3.842-4.957.031-.394.031-13.185-.001-13.587-.236-3.007-2.087-4.74-4.526-5.091C18.89.029 18.778.005 15.91 0 5.737.005 3.507-.448 1.5 1.633z" />
                    <path fill="#fff" d="M11.998 3.139c-3.631 0-7.079-.323-8.396 3.057-.544 1.396-.465 3.209-.465 5.805 0 2.278-.073 4.419.465 5.804 1.314 3.382 4.79 3.058 8.394 3.058 3.477 0 7.062.362 8.395-3.058.545-1.41.465-3.196.465-5.804 0-3.462.191-5.697-1.488-7.375-1.7-1.7-3.999-1.487-7.374-1.487zm-.794 1.597c7.574-.012 8.538-.854 8.006 10.843-.189 4.137-3.339 3.683-7.211 3.683-7.06 0-7.263-.202-7.263-7.265 0-7.145.56-7.257 6.468-7.263zm5.524 1.471a1.063 1.063 0 1 0 0 2.126 1.063 1.063 0 0 0 0-2.126zm-4.73 1.243a4.55 4.55 0 1 0 .001 9.101 4.55 4.55 0 0 0-.001-9.101zm0 1.597c3.905 0 3.91 5.908 0 5.908-3.904 0-3.91-5.908 0-5.908z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="order-2 md:order-2 relative flex justify-center items-center">
            <div className="overflow-hidden">
              <div className="relative">
                <img 
                  src="/assets/hero1.png" 
                  className="overflow-hidden w-full h-full object-contain rounded-full myimg mb-5" 
                  alt="Ahmad Hassan" 
                />
                {/* Overlay */}
              </div>
            </div>            

            {/* Animated Circle */}
            <motion.svg
              className="absolute inset-0 mysvg w-full h-full"
              viewBox="0 0 500 500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.circle
                cx="250" // Center of the SVG
                cy="250" // Center of the SVG
                r="250"
                stroke="#0bfa9d"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ strokeDasharray: "24 10 0 0" }}
                animate={{ 
                  strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                  rotate: [120, 360], // Maintain the rotation effect
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear", // Use a linear easing for consistent speed
                  repeatType: 'loop' // Repeat the loop rather than reverse
                }}
              />
            </motion.svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Hero;
