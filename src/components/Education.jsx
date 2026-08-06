import { motion } from "framer-motion";
import mallareddyLogo from "../assets/logos/mallareddy.png";

function Education() {
  return (
    <section
      id="education"
      className="bg-slate-950 text-white py-28 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >

          <p className="uppercase tracking-[8px] text-cyan-400 font-semibold">
            EDUCATION
          </p>

          <h2 className="text-5xl md:text-6xl font-black mt-3">
            Academic
            <span className="text-cyan-400"> Journey</span>
          </h2>

          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto mt-6"></div>

        </motion.div>

        <div className="space-y-8">

          {/* B.Tech */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-8 shadow-2xl hover:border-cyan-400 transition-all duration-500"
          >

            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">

              <div className="bg-white rounded-2xl p-4">
                <img
                  src={mallareddyLogo}
                  alt="Mallareddy University"
                  className="w-24 h-24 object-contain"
                />
              </div>

              <div>

                <h3 className="text-3xl font-bold">
                  B.Tech in Computer Science (AI & Machine Learning)
                </h3>

                <p className="text-cyan-400 text-xl mt-3">
                  Malla Reddy University
                </p>

                <p className="text-gray-400 mt-2">
                  📅 2021 – 2025
                </p>

                <p className="text-gray-400 mt-2">
                  📍 Hyderabad, Telangana, India
                </p>

                <p className="text-gray-300 mt-4 leading-7">
                  Specialized in Artificial Intelligence and Machine Learning,
                  gaining practical knowledge in software development,
                  Python, web technologies, DevOps fundamentals,
                  and problem-solving.
                </p>

              </div>

            </div>

          </motion.div>

          {/* Future Education */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-8 shadow-2xl hover:border-cyan-400 transition-all duration-500"
          >

            <h3 className="text-3xl font-bold">
              🎓 Future Education
            </h3>

            <p className="text-cyan-400 text-xl mt-3">
              MSc in Cyber Security (Planned)
            </p>

            <p className="text-gray-400 mt-2">
              🇬🇧 United Kingdom
            </p>

            <p className="text-gray-300 mt-4 leading-7">
              Planning to pursue a Master's degree in Cyber Security
              to deepen my knowledge in secure systems, cloud security,
              ethical hacking, digital forensics, and modern cybersecurity practices.
            </p>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Education;