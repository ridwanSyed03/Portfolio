// src/components/Header.js
import { Link } from 'react-scroll';

const Header = ({ activeSection, scrolled }) => {
  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'py-3 bg-gray-900/90 backdrop-blur-sm shadow-lg' : 'py-5'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold">
          Port<span className="text-cyan-400">folio</span>
        </a>
        
        <nav className="hidden md:flex space-x-8">
          {['home', 'about', 'skills', 'projects', 'education', 'contact'].map((item) => (
            <Link
              key={item}
              to={item}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className={`cursor-pointer font-medium transition-all duration-300 hover:text-cyan-400 ${
                activeSection === item ? 'text-cyan-400' : ''
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
        </nav>
        
        <button className="md:hidden text-2xl">
          <i className="fas fa-bars"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;