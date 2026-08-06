import { motion } from "framer-motion";
import { FaGithub, FaPlayCircle, FaGlobe } from "react-icons/fa";

import projectImage from "../assets/projects/cicd-dashboard.png";
import demoVideo from "../assets/videos/cicd-demo.mp4";

const projects = [
  {
    title: "Full Stack CI/CD Pipeline",
    description:
      "Built a complete CI/CD pipeline using Docker and GitHub Actions. The project automatically builds, tests, scans Docker images and deploys the application through a production-ready workflow.",

    image: projectImage,

    github:
      "https://github.com/MALGIREDDY/capstone-cicd-project",

    demo: demoVideo,

    live: "#",

    technologies: [
      "React",
      "Docker",
      "GitHub",
      "GitHub Actions",
      "Flask",
      "CI/CD",
      "DevOps",
      "Vercel",
    ],
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-950 text-white py-28 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >

          <p className="uppercase tracking-[8px] text-cyan-400 font-semibold">
            FEATURED PROJECTS
          </p>

          <h2 className="text-5xl md:text-6xl font-black mt-3">

            My
            <span className="text-cyan-400"> Recent Work</span>

          </h2>

          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto mt-6"></div>

        </motion.div>

        {projects.map((project) => (

          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            whileHover={{
              y: -10,
            }}
            className="bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-3xl overflow-hidden shadow-2xl hover:border-cyan-400 transition-all duration-500"
          >

            {/* Image */}

            <div className="overflow-hidden">

              <motion.img
                src={project.image}
                alt={project.title}
                whileHover={{
                  scale: 1.05,
                }}
                transition={{
                  duration: 0.5,
                }}
                className="w-full h-[430px] object-cover"
              />

            </div>

            <div className="p-10">

              <h3 className="text-4xl font-bold mb-5">
                🚀 {project.title}
              </h3>

              <p className="text-gray-300 leading-8 text-lg">
                {project.description}
              </p>

              {/* Technology Tags */}

              <div className="flex flex-wrap gap-3 mt-8">

                {project.technologies.map((tech) => (

                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/40 text-cyan-300 text-sm hover:bg-cyan-500/20 transition"
                  >
                    {tech}
                  </span>

                ))}

              </div>

              {/* Buttons */}

              <div className="flex flex-wrap gap-5 mt-10">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-7 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 transition-all duration-300"
                >
                  <FaGithub />
                  GitHub
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-7 py-3 rounded-xl bg-green-600 hover:bg-green-500 hover:scale-105 transition-all duration-300"
                >
                  <FaPlayCircle />
                  Demo Video
                </a>

                <button
                  className="flex items-center gap-2 px-7 py-3 rounded-xl bg-slate-700 text-gray-300 cursor-not-allowed"
                >
                  <FaGlobe />
                  Live Demo Soon
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