import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    subject: '',
    email: '',
    service: '',
    message: '',  // New message state
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if service is selected
    if (!formData.service) {
      alert('Please select a service.');
      return;
    }

    const response = await fetch('https://formspree.io/f/mnnqjqbd', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert('Form submitted successfully!');
      setFormData({
        firstName: '',
        lastName: '',
        subject: '',
        email: '',
        service: '',
        message: '',  // Reset message state
      });
    } else {
      alert('There was a problem with your submission.');
    }
  };

  return (
    <div className='ml-10 mr-10 contact '>
             <div className='text-5xl mycontact text-center font-extrabold text-outline text-transparent group-hover:text-outline-hover mt-20 mb-10'>Contact</div>

      <motion.section
        initial={{ opacity: 0 }} 
        animate={{
          opacity: 1,
          transition: { delay: 1.4, duration: 0.4, ease: 'easeIn' },
        }} 
        className='py-6 ml-10 mymot '
      >
        <div className="container mx-auto ">
          <div className="flex flex-col xl:flex-row gap-[30px] ">
            <div className='xl:h-[54%] order-2 xl:order-none'>
              <form onSubmit={handleSubmit} className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl'>
                <h3 className='text-3xl text-[#00ff99]'>Let's Work Together</h3>
                <p className='text-white/60'>Ready to bring your vision to life? Let’s collaborate! Contact me today to discuss how I can help with your project goals!</p>

                {/* Input Fields */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  {/* First Name Input */}
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className='
                      w-full 
                      h-[48px]
                      px-4 
                      py-2 
                      text-sm 
                      text-white/60  // Updated text color
                      rounded-md 
                      shadow-sm 
                      placeholder-gray-400 
                      border border-white/60
                      focus:border-[#00ff99] 
                      bg-transparent 
                      outline-none 
                      transition 
                      duration-200
                    ' 
                    placeholder='First Name'
                    required
                  />

                  {/* Last Name Input */}
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className='
                      w-full 
                      h-[48px]
                      px-4 
                      py-2 
                      text-sm 
                      text-white/60  // Updated text color
                      rounded-md 
                      shadow-sm 
                      placeholder-gray-400 
                      border border-white/60
                      focus:border-[#00ff99] 
                      bg-transparent 
                      outline-none 
                      transition 
                      duration-200
                    ' 
                    placeholder='Last Name'
                    required
                  />

                  {/* Subject Input */}
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className='
                      w-full 
                      h-[48px]
                      px-4 
                      py-2 
                      text-sm 
                      text-white/60  // Updated text color
                      rounded-md 
                      shadow-sm 
                      placeholder-gray-400 
                      border border-white/60
                      focus:border-[#00ff99] 
                      bg-transparent 
                      outline-none 
                      transition 
                      duration-200
                    ' 
                    placeholder='Subject'
                    required
                  />

                  {/* Email Input */}
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className='
                      w-full 
                      h-[48px]
                      px-4 
                      py-2 
                      text-sm 
                      text-white/60  // Updated text color
                      rounded-md 
                      shadow-sm 
                      placeholder-gray-400 
                      border border-white/60
                      focus:border-[#00ff99] 
                      bg-transparent 
                      outline-none 
                      transition 
                      duration-200
                    ' 
                    placeholder='Email'
                    required
                  />
                </div>

                {/* Service Selection and Message Textarea */}
                <div className='flex flex-col gap-6'>
                  {/* Service Selection */}
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className='
                      w-full 
                      h-[48px]
                      px-4 
                      text-sm 
                      text-white 
                      rounded-md 
                      shadow-sm 
                      border border-white/60
                      focus:border-[#00ff99] 
                      bg-[#1c1b22] 
                      outline-none 
                      transition 
                      duration-200
                    '
                    required
                  >
                    <option value="" disabled>Select a Service</option>
                    <option value="web-development">Web Development</option>
                    <option value="Shopify">Shopify</option>
                    <option value="wordpress-development">WordPress Development</option>
                    <option value="ui-design">UI Design</option>
                  </select>

                  {/* Textarea for Message */}
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className='
                      w-full 
                      h-24 
                      px-4 
                      py-2 
                      text-sm 
                      text-white/60  // Updated text color
                      rounded-md 
                      shadow-sm 
                      placeholder-gray-400 
                      border border-white/60
                      focus:border-[#00ff99] 
                      bg-transparent 
                      outline-none 
                      transition 
                      duration-200
                    '
                    placeholder='Your Message'
                    required
                  />
                </div>
                <div className="flex-items-center justify-center text-center">

                {/* Submit Button */}
                <button 
                  type="submit" 
                  className="mt-4 px-6 py-2 text-black items-start max-w-40 text-center" 
                  style={{ backgroundColor: '#00ff99' }}
                  >
                  Submit
                </button>
                  </div>
              </form>
            </div>
            <div className='flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0'>
              <div className="text-white minfo hidden">info</div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

export default Contact;
