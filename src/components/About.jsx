import { motion } from "framer-motion";
import { FaGraduationCap, FaBrain, FaShieldAlt } from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      className="bg-slate-900 text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center text-cyan-400 mb-16"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-slate-800 rounded-2xl p-8 text-center shadow-lg"
          >
            <FaGraduationCap className="text-5xl text-cyan-400 mx-auto mb-4" />

            <h3 className="text-2xl font-bold mb-3">
              Education
            </h3>

            <p className="text-gray-400">
              B.Tech in Computer Science
              (AI & Machine Learning)
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-slate-800 rounded-2xl p-8 text-center shadow-lg"
          >
            <FaBrain className="text-5xl text-cyan-400 mx-auto mb-4" />

            <h3 className="text-2xl font-bold mb-3">
              AI & ML
            </h3>

            <p className="text-gray-400">
              Passionate about Artificial
              Intelligence, Machine Learning
              and Research.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-slate-800 rounded-2xl p-8 text-center shadow-lg"
          >
            <FaShieldAlt className="text-5xl text-cyan-400 mx-auto mb-4" />

            <h3 className="text-2xl font-bold mb-3">
              Cyber Security
            </h3>

            <p className="text-gray-400">
              Preparing for a career in
              Cyber Security while pursuing
              higher education.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default About;