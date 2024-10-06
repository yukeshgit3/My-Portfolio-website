import React, { useState } from 'react';

function Projects() {
  const projects = [
    {
      title: "Photo Search Application with API Integration",
      description: "Built a Photo Search Application fetching photos from an external API based on user queries, dynamically displaying results, and improving user experience with responsive design.",
      technologies: "HTML, CSS, JavaScript",
      githubLink: "hhttps://github.com/yukeshgit3/Photo-Fetcher",
      liveDemoLink: "https://photofetcher.netlify.app"
    },
    {
      title: "Restaurant Webpage Development",
      description: "Designed a responsive restaurant webpage detailing the hotel and menu items, enhancing the digital presence of the establishment.",
      technologies: "HTML, CSS",
      githubLink: "https://github.com/yukeshgit3/Restaurant_webpage",
      liveDemoLink: "https://cute-semolina-0ce144.netlify.app"
    },
    {
      title: "StayFinder: Your Ultimate Hotel Discovery Tool",
      description: "StayFinder is a sleek and responsive React app that simplifies hotel browsing. Using dynamic filters for name, date, location, and availability, it presents an interactive list of hotels using real-time API data.",
      technologies: "Html,Css,Javascript,React.js",
      githubLink: "https://github.com/yourusername/project2",
      liveDemoLink: "https://yourproject2.netlify.app"
    }
 
  ];
  const [currentPage, setCurrentPage] = useState(0);
  const projectsPerPage = 3;
  const totalPages = Math.ceil(projects.length / projectsPerPage);
  
  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = currentPage * projectsPerPage;
  const currentProjects = projects.slice(startIndex, startIndex + projectsPerPage);

  return (
    <div className="min-h-screen bg-base-100 p-10">
      <h2 className="text-3xl font-bold mb-10 text-white text-center">My Projects</h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {currentProjects.map((project, index) => (
          <div key={index} className="card bg-base-200 shadow-xl p-4">
            <div className="card-body">
              <h3 className="card-title text-white">{project.title}</h3>
              <p>
                {project.description}
                <b> Technologies: {project.technologies}</b>
              </p>
              <div className="card-actions mt-4">
                <a href={project.githubLink} className="btn btn-primary">GitHub</a>
                <a href={project.liveDemoLink} className="btn btn-secondary">Live Demo</a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Buttons */}
      <div className="flex justify-between mt-6">
        <button onClick={handlePrev} className="btn btn-primary" disabled={currentPage === 0}>Previous</button>
        <button onClick={handleNext} className="btn btn-primary" disabled={currentPage === totalPages - 1}>Next</button>
      </div>
    </div>
  );
}

export default Projects;
