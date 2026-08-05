import { motion } from "framer-motion";
import { FaGithub, FaPlayCircle, FaGlobe } from "react-icons/fa";

import projectImage from "../assets/projects/cicd-dashboard.png";
import demoVideo from "../assets/videos/cicd-demo.mp4";

const projects = [
  {
    title: "Full Stack CI/CD Pipeline using Docker & GitHub Actions",

    description:
      "Designed and implemented a fully automated CI/CD pipeline for a full-stack application. The pipeline automatically builds, tests, scans, pushes Docker images and deploys to Development, Staging and Production environments.",

    image: projectImage,

    github:
      "https://github.com/MALGIREDDY/capstone-cicd-project",

    demo: demoVideo,

    live: "#",

    technologies: [
      "GitHub Actions",
      "Docker",
      "Git",
      "GitHub",
      "Frontend",
      "Backend",
      "CI/CD",
      "DevOps",
    ],
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-950 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center text-cyan-400 mb-16"
        >
          Featured Project
        </motion.h2>

        {projects.map((project) => (

          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
            className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-700"
          >

            <img
              src={project.image}
              alt={project.title}
              className="w-full h-[450px] object-cover"
            />

            <div className="p-8">

              <h3 className="text-3xl font-bold mb-4">
                {project.title}
              </h3>

              <p className="text-gray-400 leading-8">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mt-8">

                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full"
                  >
                    {tech}
                  </span>
                ))}

              </div>

              <div className="flex flex-wrap gap-5 mt-10">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 px-6 py-3 rounded-xl transition"
                >
                  <FaGithub />
                  GitHub
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-green-600 hover:bg-green-500 px-6 py-3 rounded-xl transition"
                >
                  <FaPlayCircle />
                  Watch Demo
                </a>

                <button
                  className="flex items-center gap-2 bg-gray-700 px-6 py-3 rounded-xl cursor-not-allowed"
                >
                  <FaGlobe />
                  Live Demo (Coming Soon)
                </button>

              </div>

            </div>

          </motion.div>

        ))}

      </div>
    </section>
  );
}

export default Projects;