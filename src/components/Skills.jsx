import { motion } from "framer-motion";
import {
  FaPython,
  FaReact,
  FaDocker,
  FaGithub,
  FaLinux,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiGithubactions,
  SiJavascript,
  SiTailwindcss,
  SiFlask,
  SiDjango,
  SiPostman,
  SiVercel,
} from "react-icons/si";

const skillCategories = [
  {
    title: "💻 Frontend",
    skills: ["React", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    title: "⚙️ Backend",
    skills: ["Python", "Flask", "Django", "REST APIs"],
  },
  {
    title: "🐳 DevOps",
    skills: [
      "Docker",
      "Git",
      "GitHub",
      "GitHub Actions",
      "Linux",
      "Bash",
    ],
  },
  {
    title: "🤖 AI / Machine Learning",
    skills: [
      "Machine Learning",
      "Artificial Intelligence",
      "Data Analysis",
      "Python",
    ],
  },
  {
    title: "🔒 Cyber Security",
    skills: [
      "Cyber Security",
      "Linux",
      "Networking",
      "System Security",
    ],
  },
  {
    title: "🛠 Tools",
    skills: [
      "VS Code",
      "Postman",
      "GitHub",
      "Vercel",
    ],
  },
];

const icons = {
  React: <FaReact className="text-cyan-400" />,
  JavaScript: <SiJavascript className="text-yellow-300" />,
  Python: <FaPython className="text-yellow-400" />,
  Docker: <FaDocker className="text-blue-400" />,
  Git: <FaGitAlt className="text-orange-500" />,
  GitHub: <FaGithub />,
  Linux: <FaLinux className="text-yellow-400" />,
  "GitHub Actions": <SiGithubactions className="text-blue-400" />,
  "Tailwind CSS": <SiTailwindcss className="text-cyan-300" />,
  Flask: <SiFlask />,
  Django: <SiDjango className="text-green-500" />,
  Postman: <SiPostman className="text-orange-500" />,
  Vercel: <SiVercel />,
};

function Skills() {
  return (
    <section
      id="skills"
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
            TECH STACK
          </p>

          <h2 className="text-5xl md:text-6xl font-black mt-3">
            Technologies
            <span className="text-cyan-400"> I Use</span>
          </h2>

          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto mt-6"></div>

        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {skillCategories.map((category, index) => (

            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                y: -8,
              }}
              className="bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-8 shadow-2xl hover:border-cyan-400 transition-all duration-500"
            >

              <h3 className="text-2xl font-bold mb-6 text-cyan-400">
                {category.title}
              </h3>

              <div className="space-y-4">

                {category.skills.map((skill) => (

                  <div
                    key={skill}
                    className="flex items-center gap-3 text-lg"
                  >

                    <div className="text-2xl">
                      {icons[skill] || "✔️"}
                    </div>

                    <span>{skill}</span>

                  </div>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;