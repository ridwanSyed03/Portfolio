import { Link } from 'react-scroll';
import { FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa';
import { FaArrowUp } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="py-10 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          {/* Left Side: © 2025 Syed Ridwanuddin. All rights reserved. */}
          <div className="mb-6 md:mb-0 text-gray-400 text-center md:text-left">
            © 2025 Syed Ridwanuddin. All rights reserved.
          </div>

          {/* Middle: Social Links */}
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/ridwanuddin-syed/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center border-2 border-cyan-400 rounded-full text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/ridwanSyed03"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center border-2 border-cyan-400 rounded-full text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:syedridwan0301@gmail.com"
              className="w-10 h-10 flex items-center justify-center border-2 border-cyan-400 rounded-full text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
            >
              <FaEnvelope />
            </a>
          </div>

          {/* Right Side: Up Arrow */}
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="mt-6 md:mt-0 w-10 h-10 flex items-center justify-center bg-cyan-500 rounded-full text-gray-900 hover:bg-cyan-400 transition-colors cursor-pointer"
            title="Back to top"
          >
            <FaArrowUp />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
