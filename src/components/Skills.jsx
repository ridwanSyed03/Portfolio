// src/components/Skills.js
import { useEffect, useState } from 'react';
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiGit,
  SiMongodb,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

const skillsData = [
  {
    name: 'Java',
    percentage: 85,
    icon: <FaJava className="text-red-600 text-5xl" />,
    topics: ['OOP', 'Collections', 'Exception Handling'],
  },
  {
    name: 'React',
    percentage: 88,
    icon: <SiReact className="text-cyan-400 text-5xl" />,
    topics: [
      'Props',
      'Hooks',
      'JSX',
      'State Management',
      'Component Lifecycle',
    ],
  },
  {
    name: 'Node.js & Express',
    percentage: 84,
    icon: <SiNodedotjs className="text-green-400 text-5xl" />,
    topics: [
      'Asynchronous Programming',
      'NPM & Project Management',
      'REST API Development',
      'Authentication & Authorization',
      'Error Handling & Logging',
    ],
  },
  {
    name: 'JavaScript',
    percentage: 90,
    icon: <SiJavascript className="text-yellow-400 text-5xl" />,
    topics: [
      'Functions & Arrow Functions',
      'Objects & Arrays',
      'DOM Manipulation',
      'Async/Await & Promises',
    ],
  },
  {
    name: 'Git',
    percentage: 87,
    icon: <SiGit className="text-orange-400 text-5xl" />,
    topics: ['Version Control', 'Branching', 'Merging', 'Pull Requests'],
  },
  {
    name: 'MongoDB',
    percentage: 80,
    icon: <SiMongodb className="text-green-500 text-5xl" />,
    topics: [
      'CRUD Operations',
      'Query & Filter Documents',
      'Schema Design (Mongoose)',
    ],
  },
];

const Skills = () => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const section = document.getElementById('skills');
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setAnimated(true);
      },
      { threshold: 0.2 }
    );

    if (section) observer.observe(section);
    return () => section && observer.unobserve(section);
  }, []);

  const renderSkillCard = (skill, index) => (
    <div
      key={skill.name}
      className={`bg-gray-800/60 border border-cyan-600 rounded-xl p-6 flex flex-col items-center text-center shadow-xl hover:shadow-cyan-500/30 transition-all duration-700 transform ${
        animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="mb-4">{skill.icon}</div>
      <h3 className="text-lg font-semibold">{skill.name}</h3>

      {/* Progress Bar */}
      <div className="mt-3 w-full h-2 bg-gray-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-cyan-500 to-cyan-300 rounded-full transition-all duration-1000 ease-out"
          style={{
            width: animated ? `${skill.percentage}%` : '0%',
            transitionDelay: `${index * 200}ms`,
          }}
        />
      </div>
      <span className="text-sm text-cyan-300 mt-2 font-medium">
        {skill.percentage}%
      </span>

      {/* Topics List */}
      <div className="mt-4 text-left w-full">
        <h4 className="text-cyan-400 font-semibold mb-1 text-sm">Key Topics:</h4>
        <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
          {skill.topics.map((topic, i) => (
            <li key={i}>{topic}</li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <section
      id="skills"
      className="bg-[#0f172a] text-white py-24 px-6 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-cyan-400">My</span> Skills
          </h2>
          <p className="text-gray-400 text-lg mt-3">
            Technologies I work with and the topics I know in each
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {skillsData.map((skill, index) => renderSkillCard(skill, index))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
