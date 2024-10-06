import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGithub } from 'react-icons/fa';
import { SiVisualstudiocode, SiTailwindcss, SiNetlify } from 'react-icons/si';

// Custom animation classes using Tailwind
const animationClasses = 'transition transform hover:scale-110 animate-pulse';

const About = () => {
  return (
    <div className="min-h-screen bg-base-100 p-10">
      <h2 className="text-3xl font-bold mb-6 text-center text-white">About Me</h2>

      <div className="text-center">
        <p className="mb-4 text-white">
          I am a web developer skilled in modern web technologies.
        </p>
        <p className="mb-4 text-white">
          I'm skilled in HTML, CSS, JavaScript, React.js. Experienced in developing responsive web applications with a focus on user experience and clean code.
        </p>

        <h1 className="mb-4 font-bold text-white">Technologies I use:</h1>

        {/* Icon Section with BeatFade Animation */}
        <div className="flex flex-wrap justify-center space-x-8 text-6xl mb-8">
          {/* HTML Icon */}
          <div className="flex flex-col items-center mb-6 md:mb-0">
            <FaHtml5 className={`${animationClasses} text-red-500 hover:text-red-600`} title="HTML5" />
            <p className="mt-2 text-lg text-white">HTML5</p>
          </div>
          {/* CSS Icon */}
          <div className="flex flex-col items-center mb-6 md:mb-0">
            <FaCss3Alt className={`${animationClasses} text-blue-600 hover:text-blue-700`} title="CSS3" />
            <p className="mt-2 text-lg text-white">CSS3</p>
          </div>
          {/* JavaScript Icon */}
          <div className="flex flex-col items-center mb-6 md:mb-0">
            <FaJsSquare className={`${animationClasses} text-yellow-500 hover:text-yellow-600`} title="JavaScript" />
            <p className="mt-2 text-lg text-white">JavaScript</p>
          </div>
          {/* React Icon */}
          <div className="flex flex-col items-center mb-6 md:mb-0">
            <FaReact className={`${animationClasses} text-blue-500 hover:text-blue-600`} title="React.js" />
            <p className="mt-2 text-lg text-white">React.js</p>
          </div>
          {/* Tailwind CSS Icon */}
          <div className="flex flex-col items-center mb-6 md:mb-0">
            <SiTailwindcss className={`${animationClasses} text-teal-400 hover:text-teal-500`} title="Tailwind CSS" />
            <p className="mt-2 text-lg text-white">Tailwind CSS</p>
          </div>
        </div>

        <p className="mb-4 font-bold text-white">Tools I use:</p>

        {/* Tools Section with BeatFade Animation */}
        <div className="flex flex-wrap justify-center space-x-8 text-6xl">
          {/* VSCode Icon */}
          <div className="flex flex-col items-center mb-6 md:mb-0">
            <SiVisualstudiocode className={`${animationClasses} text-blue-400 hover:text-blue-500`} title="VSCode" />
            <p className="mt-2 text-lg text-white">VSCode</p>
          </div>
          {/* GitHub Icon */}
          <div className="flex flex-col items-center mb-6 md:mb-0">
            <FaGithub className={`${animationClasses} text-gray-700 hover:text-gray-800`} title="GitHub" />
            <p className="mt-2 text-lg text-white">GitHub</p>
          </div>
          {/* Netlify Icon */}
          <div className="flex flex-col items-center mb-6 md:mb-0">
            <SiNetlify className={`${animationClasses} text-teal-500 hover:text-teal-600`} title="Netlify" />
            <p className="mt-2 text-lg text-white">Netlify</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
