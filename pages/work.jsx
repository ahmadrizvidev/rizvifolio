import React, { useState, useEffect } from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { useRouter } from 'next/router';

const Work = () => {
  const router = useRouter();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [projects, setProjects] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      setIsLoading(true);
      const projectsCollection = collection(db, 'projects');
      const projectsSnapshot = await getDocs(projectsCollection);
      const projectsList = projectsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

      projectsList.sort((a, b) => {
        const numA = parseInt(a.title.split(' ')[0], 10);
        const numB = parseInt(b.title.split(' ')[0], 10);
        return numA - numB;
      });

      setProjects(projectsList);
      setIsLoading(false);
    };
    fetchProjects();
  }, []);

  const nextProject = () => {
    setIsLoading(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    setTimeout(() => setIsLoading(false), 300);
  };

  const prevProject = () => {
    setIsLoading(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
    setTimeout(() => setIsLoading(false), 300);
  };

  const animationVariants = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 },
  };

  return (
    <div className={`work pb-20 relative z-0 ${router.pathname === '/work' ? 'pb-[300px]' : ''}`}>
      <div className="text-3xl md:text-5xl text-center font-extrabold text-outline text-transparent mt-20 mb-20">Projects</div>

      {isLoading ? (
        <div className="flex justify-center items-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#00ff99]"></div>
        </div>
      ) : (
        projects.length > 0 && (
          <motion.div
            key={currentIndex}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={animationVariants}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-center gap-[100px] py-10 px-4 lg:px-12 justify-center"
          >
            {/* Image Section */}
            <div className="relative flex flex-col w-full max-w-full order-1 md:order-2">
              <img
                src={projects[currentIndex].imageUrl}
                alt={projects[currentIndex].title}
                className="w-full h-full object-cover mx-auto rounded-lg"
              />
            </div>

            {/* Text Section */}
            <div className="flex flex-col gap-4 w-full max-w-f order-2 md:order-1 text-center md:text-left">
              <h3 className="text-4xl md:text-5xl font-extrabold text-outline text-transparent">
                {projects[currentIndex].title}
              </h3>
              <h2 className="text-2xl md:text-3xl font-bold">{projects[currentIndex].projectType}</h2>
              <p className="text-sm md:text-base">{projects[currentIndex].projectDescription}</p>
              <h4 className="text-md md:text-lg font-semibold text-[#00ff99]">{projects[currentIndex].additionalInfo}</h4>
              <div className="border-b border-white/20 w-full mb-4"></div>

              <div className="flex justify-between mt-4">
                <button
                  onClick={() => {
                    const projectUrl = projects[currentIndex].projectUrl;
                    window.open(projectUrl, '_blank');
                  }}
                  className="flex gap-2 p-2 border-2 border-[#00ff99] rounded-full hover:bg-[#00ff99] transition-colors duration-300"
                >
                  <BsArrowUpRight className="text-white hover:text-black" />
                  <span className="text-sm">View Project</span>
                </button>

                <div className="flex gap-2 text-black">
                  <button onClick={prevProject} className="bg-[#00ff99] p-3 rounded-full">
                    <FaArrowLeft />
                  </button>
                  <button onClick={nextProject} className="bg-[#00ff99] p-3 rounded-full">
                    <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )
      )}

      {/* Hire Me Button and Modal */}
      <div className="flex justify-center mt-8">
        <button
          className="px-3 py-1.5 text-[13px] md:text-[15px] rounded font-semibold text-black bg-[#0bfa9d] border-2 border-[#0bfa9d] hover:bg-transparent hover:text-[#0bfa9d] transition-all ease-in-out duration-300 mt-8"
          onClick={() => setIsModalVisible(true)}
        >
          Hire Me
        </button>
      </div>

      <AnimatePresence>
        {isModalVisible && (
          <>
            <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsModalVisible(false)} />
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 overflow-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div
                className="w-[90vw] max-w-md bg-white shadow-lg rounded-lg p-8 relative flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center pb-3 border-b border-gray-300">
                  <h3 className="text-lg md:text-xl font-bold text-gray-800">Hire Me</h3>
                  <button
                    onClick={() => setIsModalVisible(false)}
                    className="text-gray-400 hover:text-red-500"
                  >
                    <AiOutlineClose className="w-5 h-5" />
                  </button>
                </div>

                <div className="my-8">
                  <h6 className="text-sm md:text-base text-gray-800">Connect with me via</h6>
                  <div className="flex gap-4 mt-4">
                    <a href="https://bit.ly/40hrLde" target="_blank" rel="noopener noreferrer" className="p-2 bg-blue-600 rounded-full text-white hover:bg-blue-700">
                      <FaFacebookF className="w-5 h-5" />
                    </a>
                    <a href="https://bit.ly/4eYzNfr" target="_blank" rel="noopener noreferrer" className="p-2 bg-gradient-to-br from-pink-500 to-red-500 rounded-full text-white hover:from-pink-600 hover:to-red-600">
                      <FaInstagram className="w-5 h-5" />
                    </a>
                    <a href="https://bit.ly/48qwIT5" target="_blank" rel="noopener noreferrer" className="p-2 bg-blue-700 rounded-full text-white hover:bg-blue-800">
                      <FaLinkedinIn className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <div>
                  <h6 className="text-sm md:text-base text-gray-800">Or email me at:</h6>
                  <a
                    href="mailto:info@rizvidev.site"
                    className="mt-4 flex items-center justify-center py-2 px-4 text-xs md:text-sm font-semibold text-white bg-gray-800 rounded-lg hover:bg-gray-700"
                  >
                    info@rizvidev.site
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Work;
