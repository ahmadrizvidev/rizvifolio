import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { AiOutlineClose } from 'react-icons/ai'; // Import the close icon from react-icons
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const router = useRouter();

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const linkClass = (path) =>
    `relative font-semibold block text-[15px] px-2 py-1 transition-all duration-300 ${
      router.pathname === path ? "text-[#0bfa9d] after:w-full" : "text-white hover:text-[#0bfa9d]"
    } after:content-[""] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:bg-[#0bfa9d] after:w-0 ${
      router.pathname === path ? "" : "hover:after:w-full"
    }`;

  return (
    <header className="ml-10 mnav mr-10 flex shadow-md py-4 px-4 sm:px-10 bg-[#1c1c22] font-[sans-serif] min-h-[80px] tracking-wide relative z-19">
      <div className="flex flex-wrap items-center gap-5 w-full">
        <Link href="/">
          <h1 className="logo relative text-4xl font-extrabold text-white after:content-[''] after:absolute after:bottom-[2px] after:right-[-17px] after:w-[10px] after:h-[10px] after:bg-[#0bfa9d] after:rounded-full">
            Ahmad
          </h1>
        </Link>

        {/* Menu for Large Devices */}
        <nav className="hidden lg:flex lg:ml-auto lg:flex-row lg:space-x-4">
          <ul className="flex flex-col lg:flex-row gap-4 lg:space-x-4">
            <li><Link href="/" className={linkClass("/")}>Home</Link></li>
            <li><Link href="/services" className={linkClass("/services")}>Services</Link></li>
            <li><Link href="/work" className={linkClass("/work")}>Work</Link></li>
            <li><Link href="/contact" className={linkClass("/contact")}>Contact</Link></li>
          </ul>
        </nav>

        <div className="flex items-center max-lg:ml-auto space-x-6">
          <button
            className="px-4 py-2 text-[15px] rounded font-semibold text-black bg-[#0bfa9d] border-2 border-[#0bfa9d] hover:bg-transparent hover:text-[#0bfa9d] transition-all ease-in-out duration-300"
            onClick={() => setIsModalVisible(true)} // Open modal on button click
          >
            Hire Me
          </button>
          <button onClick={handleToggle} className="lg:hidden flex items-center justify-center rounded-full bg-white p-2">
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="#333" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 5a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zM5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zM5 15a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd"></path>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="#333" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Side Drawer and Overlay */}
      {isMenuOpen && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={handleToggle}></div>
          <div className="fixed inset-y-0 left-0 w-64 bg-[#1c1c22] p-4 z-50 shadow-lg transform transition-transform duration-300 ease-in-out" style={{ transform: isMenuOpen ? 'translateX(0)' : 'translateX(-100%)' }}>
            <ul className="flex flex-col space-y-4">
              <li><Link href="/" className={linkClass("/")}>Home</Link></li>
              <li><Link href="/services" className={linkClass("/services")}>Services</Link></li>
              <li><Link href="/work" className={linkClass("/work")}>Work</Link></li>
              <li><Link href="/contact" className={linkClass("/contact")}>Contact</Link></li>
            </ul>
          </div>
        </>
      )}

     
{/* Modal */}
<AnimatePresence>
  {isModalVisible && (
    <>
      {/* Overlay behind the modal */}
      <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsModalVisible(false)} />
      <motion.div
        className="absolute top-[200px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 overflow-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div
          className="w-[90vw] max-w-md bg-white shadow-lg rounded-lg p-8 relative flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center pb-3 border-b border-gray-300">
            <h3 className="text-xl font-bold text-gray-800">Hire Me</h3>
            <button
              onClick={() => setIsModalVisible(false)}
              className="text-gray-400 hover:text-red-500"
            >
              <AiOutlineClose className="w-5 h-5" />
            </button>
          </div>

          <div className="my-8">
            <h6 className="text-base text-gray-800">Connect with me via</h6>
            <div className="flex gap-4 mt-4">
              <a
                href="https://bit.ly/40hrLde"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-blue-600 rounded-full text-white hover:bg-blue-700"
              >
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a
                href="https://bit.ly/4eYzNfr"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gradient-to-br from-pink-500 to-red-500 rounded-full text-white hover:from-pink-600 hover:to-red-600"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="https://bit.ly/48qwIT5"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-blue-700 rounded-full text-white hover:bg-blue-800"
              >
                <FaLinkedinIn className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h6 className="text-base text-gray-800">Or email me at:</h6>
            <a
              href="mailto:info@rizvidev.site"
              className="mt-4 flex items-center justify-center py-2 px-4 text-sm font-semibold text-white bg-gray-800 rounded-lg hover:bg-gray-700"
            >
              info@rizvidev.site
            </a>
          </div>
        </div>
      </motion.div>
    </>
  )}
</AnimatePresence>
    </header>
  );
};

export default Header;
