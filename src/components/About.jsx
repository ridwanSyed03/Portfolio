// src/components/About.js

const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-17">

          {/* Image Section */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-80 h-96 rounded-xl overflow-hidden border-2 border-cyan-500 shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-cyan-300 opacity-30 blur-2xl z-0 animate-pulse rounded-xl" />
              <img
                src="https://res.cloudinary.com/dtcphjv80/image/upload/v1751141810/aboutImg_cymudo.jpg"
                alt="Profile of Syed Ridwanuddin"
                className="relative z-10 object-cover w-full h-full rounded-xl"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-4">
              About <span className="text-cyan-400">Me</span>
            </h2>
            <h3 className="text-xl text-cyan-400 mb-6 font-medium">
              Full-Stack Web Developer
            </h3>

            <p className="text-gray-400 mb-4 leading-relaxed text-[16.5px]">
              I'm a passionate Computer Science Engineering student with strong skills in
              <span className="text-cyan-300 font-medium"> Java </span>,
              <span className="text-cyan-300 font-medium"> JavaScript </span>,
              <span className="text-cyan-300 font-medium"> React </span>, and
              <span className="text-cyan-300 font-medium"> Node.js </span>.
              I enjoy solving complex problems—having completed over <span className="text-cyan-300 font-medium">600 DSA problems</span>—and building robust web apps.
            </p>
            <p className="text-gray-400 mb-6 leading-relaxed text-[16.5px]">
              My core strength lies in building full-stack applications using the
              <span className="text-cyan-300 font-medium"> MERN stack</span>. Notable projects include
              <span className="text-cyan-300 font-medium"> TravelNest</span> and
              <span className="text-cyan-300 font-medium"> FoodHunt</span> (see Projects section).
            </p>



            {/* Personal Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <div className="flex items-center">
                <span className="font-semibold text-cyan-400 mr-2">Name:</span>
                <span>Syed Ridwanuddin</span>
              </div>
              <div className="flex items-center">
                <span className="font-semibold text-cyan-400 mr-2">Email:</span>
                <span>syedridwan0301@gmail.com</span>
              </div>
            </div>

            {/* CV Button */}
            <a
              href="https://drive.google.com/file/d/1AxaQvwIsgHfa7hsbO3owX1_uv3CQdyTR/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-bold rounded-full shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300">
                Download CV
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
