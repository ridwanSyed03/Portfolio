// src/components/Hero.js
import { Link } from 'react-scroll';
import { ReactTyped } from 'react-typed';
import ridwan from "../assets/ridwan.jpg";
import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4 py-16 flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="md:w-1/2 mt-12 md:mt-0">
          <h4 className="text-xl md:text-2xl text-cyan-400 mb-2">Hello, It's Me</h4>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Syed Ridwanuddin</h1>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            And I'm a{' '}
            <span className="text-cyan-400">
              <ReactTyped
                strings={['Aspiring Full Stack Developer!', 'Aspiring Software Developer!']}
                typeSpeed={100}
                backSpeed={100}
                backDelay={1000}
                loop
              />
            </span>
          </h2>
          
          <p className="text-gray-300 mb-8 max-w-lg">
            I am an aspiring full-stack developer with a strong 
            focus on problem-solving and building efficient, scalable web applications.
          </p>

          {/* Social Links Section */}
          <div className="flex space-x-4 mb-8">
            {/* <a
              href="https://www.facebook.com/YOUR_PROFILE"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center border-2 border-cyan-400 rounded-full text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com/YOUR_PROFILE"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center border-2 border-cyan-400 rounded-full text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/YOUR_PROFILE"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center border-2 border-cyan-400 rounded-full text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
            >
              <FaInstagram />
            </a> */}
            <a
              href="https://www.linkedin.com/in/ridwanuddin-syed/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center border-2 border-cyan-400 rounded-full text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/ridwanSyed03"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center border-2 border-cyan-400 rounded-full text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:syedridwan0301@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center border-2 border-cyan-400 rounded-full text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
            >
              <FaEnvelope />
            </a>
          </div>

          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="inline-block px-8 py-3 bg-cyan-500 text-gray-900 font-bold rounded-full shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 hover:bg-cyan-400"
          >
            More About Me
          </Link>
        </div>

        <div className="md:w-1/2 flex justify-center relative">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-cyan-300 rounded-full blur-xl opacity-30 animate-pulse"></div>
            <div
              className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-cyan-300 rounded-full animate-spin-slow"
              style={{ zIndex: -1 }}
            ></div>
            <div className="relative w-64 h-64 md:w-80 md:h-80 bg-gray-800 rounded-full overflow-hidden border-4 border-cyan-500">
              <img
                src={ridwan}
                alt="Your image"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
