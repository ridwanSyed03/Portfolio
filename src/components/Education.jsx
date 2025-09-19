// src/components/Services.js
import { FaGraduationCap, FaSchool, FaBook } from 'react-icons/fa';

const Education = () => {
  const education = [
    {
      icon: <FaGraduationCap />,
      degree: "B.Tech (CSE-AIML)",
      institution: "Sree Vidyanikethan Engineering College",
      location: "Tirupati, Andhra Pradesh",
      years: "2021–2025",
      grade: "8.98 / 10",
    },
    {
      icon: <FaSchool />,
      degree: "Intermediate",
      institution: "Bhashyam Junior College",
      location: "Tirupati, Andhra Pradesh",
      years: "2019–2021",
      grade: "96.2%"
    },
    {
      icon: <FaBook />,
      degree: "10th",
      institution: "Sri Bhashyam Public School",
      location: "Kadapa, Andhra Pradesh",
      years: "2018–2019",
      grade: "10 / 10",
    },
  ];

  return (
    <section id="education" className="bg-gray-900 py-20">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white">
          My <span className="text-cyan-400">Education</span>
        </h2>
        <div className="relative mt-12">
          
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 h-full w-1 bg-gray-700 rounded-full"></div>

          {education.map((item, index) => (
            <div key={index} className="relative flex items-start pl-20 pb-14 group">
              {/* Floating Icon */}
              <div className="absolute left-2 top-1 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-300 text-gray-900 text-xl border border-gray-600 group-hover:scale-110 transform transition-transform">
                {item.icon}
              </div>

              {/* Card Details */}
              <div className="bg-gray-800 rounded-2xl p-6 w-full border border-gray-700 hover:border-cyan-500 hover:shadow-2xl hover:shadow-cyan-500/30 transform hover:-translate-y-1 transition">
                <h3 className="text-2xl font-bold text-white">{item.degree}</h3>
                <p className="text-gray-300">{item.institution}</p>
                <p className="text-gray-400 text-sm">{item.location}</p>
                <div className="flex flex-wrap items-center justify-between mt-3">
                  <span className="bg-gray-700 rounded-full text-gray-300 text-sm px-3 py-1">
                    {item.years}
                  </span>
                  <span className="text-cyan-300 text-sm font-bold">
                    Grade: {item.grade}
                  </span>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Education;
