import { motion } from "framer-motion";
import { FaAward, FaGraduationCap, FaCode } from "react-icons/fa";

const achievements = [
  {
    icon: <FaGraduationCap />,
    title: "B.Tech Graduate",
    description: "B.Tech in CSE (AI & ML), Mallareddy University (2025)",
  },
  {
    icon: <FaAward />,
    title: "Professional Certifications",
    description: "AWS, IBM, Forage Software Engineering & GenAI",
  },
  {
    icon: <FaCode />,
    title: "DevOps Project",
    description: "Built a complete CI/CD Pipeline using Docker & GitHub Actions",
  },
];

function Achievements() {
  return (
    <section
      id="achievements"
      className="bg-slate-900 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center text-cyan-400 mb-16"
        >
          Achievements
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">

          {achievements.map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ scale: 1.05 }}
              className="bg-slate-800 rounded-2xl p-8 border border-slate-700 text-center shadow-xl"
            >
              <div className="text-5xl text-cyan-400 mb-5">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {item.title}
              </h3>

              <p className="text-gray-400">
                {item.description}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Achievements;