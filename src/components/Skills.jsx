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
} from "react-icons/si";

const skills = [
  { name: "Python", icon: <FaPython />, color: "text-yellow-400" },
  { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-300" },
  { name: "React", icon: <FaReact />, color: "text-cyan-400" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-cyan-300" },
  { name: "Docker", icon: <FaDocker />, color: "text-blue-400" },
  { name: "Git", icon: <FaGitAlt />, color: "text-orange-500" },
  { name: "GitHub", icon: <FaGithub />, color: "text-white" },
  { name: "GitHub Actions", icon: <SiGithubactions />, color: "text-blue-300" },
  { name: "Linux", icon: <FaLinux />, color: "text-yellow-500" },
  { name: "Artificial Intelligence", icon: "🤖", color: "" },
  { name: "Machine Learning", icon: "🧠", color: "" },
  { name: "Cyber Security", icon: "🔒", color: "" },
];

function Skills() {
  return (
    <section
      id="skills"
      className="bg-slate-950 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center text-cyan-400 mb-16"
        >
          Technical Skills
        </motion.h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{
                scale: 1.05,
                rotate: 2,
              }}
              className="bg-slate-800 border border-slate-700 rounded-2xl p-8 text-center shadow-xl"
            >
              <div className={`text-6xl mb-5 ${skill.color}`}>
                {skill.icon}
              </div>

              <h3 className="text-xl font-semibold">
                {skill.name}
              </h3>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;