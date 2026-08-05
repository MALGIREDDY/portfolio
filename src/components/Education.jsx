import { motion } from "framer-motion";

function Education() {
  return (
    <section
      id="education"
      className="bg-slate-950 text-white py-24 px-6"
    >
      <div className="max-w-5xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center text-cyan-400 mb-16"
        >
          Education
        </motion.h2>

        <div className="border-l-4 border-cyan-500 pl-8 space-y-12">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h3 className="text-2xl font-bold">
              B.Tech in Computer Science (AI & ML)
            </h3>

            <p className="text-cyan-400 mt-2">
              Malla Reddy University
            </p>

            <p className="text-gray-400">
              2021 – 2025
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h3 className="text-2xl font-bold">
              Future Education
            </h3>

            <p className="text-cyan-400 mt-2">
              MSc (Planned)
            </p>

            <p className="text-gray-400">
               Cyber Security
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Education;