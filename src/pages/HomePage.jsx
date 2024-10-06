import React from 'react'
import { useNavigate } from 'react-router-dom';
const HomePage = () => {

  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate('/projects');  
  };

  return (
      <div className="min-h-screen bg-base-100 p-10">
        <div className="hero-content text-center flex flex-col items-center p-20">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold text-white">Welcome to My Portfolio</h1>
              <p className="py-6 font-bold">I built this amazing portfolio website using React.js, Tailwind CSS, and Daisy UI. Let’s explore some of my work!</p>
              <button onClick={handleGetStartedClick} className="btn bg-blue-500 hover:bg-blue-600 text-white">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
export default HomePage
