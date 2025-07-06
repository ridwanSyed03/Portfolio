import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useState } from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Travel Nest',
      description: 'Modern vacation rental platform built with Node.js and MongoDB, featuring user reviews and ratings.',
      image: 'https://res.cloudinary.com/dtcphjv80/image/upload/v1750709137/Screenshot_2025-06-24_012653_akmlcu.png',
      tags: ['Node.js', 'Express.js', 'JavaScript', 'HTML', 'CSS', 'Bootstrap', 'MongoDB'],
      demo: 'https://travel-nest-demo-link.com',
      github: 'https://github.com/ridwanSyed03/TravelNest'
    },
    {
      title: 'Food Hunt',
      description: 'A full‑stack online food ordering app with React, Node.js, and Firebase — making it easy to browse meals, place orders, and sign in.',
      image: 'https://res.cloudinary.com/dtcphjv80/image/upload/v1750709684/Screenshot_2025-06-24_011923_p7sszd.png',
      tags: ['Node.js', 'JavaScript', 'React', 'HTML', 'CSS', 'Firebase'],
      demo: 'https://food-hunt-one.vercel.app/',
      github: 'https://github.com/ridwanSyed03/FoodHunt'
    },
    {
      title: 'Sudoku Solver',
      description: 'A friendly Sudoku solver built with React.js that allows you to input a puzzle and instantly get its solution.',
      image: 'https://res.cloudinary.com/dtcphjv80/image/upload/v1750712485/SudokuImg_mcbizd.png',
      tags: ['JavaScript', 'React', 'HTML', 'CSS'],
      demo: 'https://sudoku-solver-demo-link.com',
      github: 'https://github.com/ridwanSyed03/SudokuSolver'
    },
    {
      title: 'Sky Cast',
      description: 'Modern weather forecasting app. Features real‑time conditions, hourly and daily forecasts, air quality index, and location‑based searches.',
      image: 'https://res.cloudinary.com/dtcphjv80/image/upload/v1750713523/Screenshot_2025-06-24_024617_gkx8ls.png',
      tags: ['JavaScript', 'React', 'HTML', 'CSS'],
      demo: 'https://sky-cast-xi-ten.vercel.app/',
      github: 'https://github.com/ridwanSyed03/Sky-Cast'
    },
  ];

  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    if (startIndex + 3 < projects.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const visibleProjects = projects.slice(startIndex, startIndex + 3);

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-white">
            Latest <span className="text-cyan-400">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Some of my recent work that showcases my skills and expertise
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {visibleProjects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-cyan-500 transition-all duration-300 group"
              >
                <div className="h-60 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-t-xl"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-cyan-500 text-gray-900 text-xs font-semibold rounded-full px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center bg-cyan-500 rounded-full text-gray-900 hover:bg-cyan-400"
                      title="Live Demo"
                    >
                      <FaExternalLinkAlt />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center bg-cyan-500 rounded-full text-gray-900 hover:bg-cyan-400"
                      title="Source Code"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {startIndex > 0 && (
            <button
              onClick={handlePrevious}
              className="absolute top-1/2 left-0 -translate-y-1/2 p-5 rounded-full bg-gray-700 hover:bg-cyan-500 text-white"
            >
              <FaChevronLeft />
            </button>
          )}

          {startIndex + 3 < projects.length && (
            <button
              onClick={handleNext}
              className="absolute top-1/2 right-0 -translate-y-1/2 p-5 rounded-full bg-gray-700 hover:bg-cyan-500 text-white"
            >
              <FaChevronRight />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
