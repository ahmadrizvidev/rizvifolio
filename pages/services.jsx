import React from 'react';
import { motion } from 'framer-motion';
import { BsArrowDownRight } from 'react-icons/bs';

function Services() {
  // Sample static list
  const services = [
    {
      id: "01",
      title: 'Web Development',
      description: "Building responsive websites with modern frameworks and clean code."
    },
    {
      id: "02",
      title: 'UI Design',
      description: "Crafting user-centered, visually engaging interfaces for better interaction."
    },
    {
      id: "03",
      title: 'Shopify Store',
      description: "Creating optimized, professional e-commerce stores using Shopify solutions."
    },
    {
      id: "04",
      title: 'WordPress Development',
      description: "Designing and developing scalable WordPress sites tailored to businesses."
    },
  ];
  
  return (
    <div className="">
 <div className='text-5xl text-center font-extrabold text-outline text-transparent group-hover:text-outline-hover mt-20'>Services</div>
    <div className="Services min-h-[70vh] flex justify-center py-12 ml-5 mr-5 mt-20">
     
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.2, duration: 0.4, ease: 'easeIn' }
          }}
          className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'
        >
          {services.map(skill => (
            <div className="flex-1 flex flex-col justify-center gap-6 group" key={skill.id}>
              <div className='w-full flex justify-between items-center'>
                <div className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover'>{skill.id}</div>
                
                {/* Icon with border, rounded background, and hover styles */}
                <div className="p-2 border-2 border-[#00ff99] rounded-full group-hover:bg-[#00ff99] group-hover:text-black transition-colors duration-300">
                  <BsArrowDownRight />
                </div>
              </div>
              <h2>{skill.title}</h2>
              <p>{skill.description}</p>
              <div className="border-b border-white/20 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
    </div>
  );
}

export default Services;
