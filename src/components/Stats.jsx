import { motion } from "framer-motion";

const stats = [
  { number: "1+", title: "Real Projects" },
  { number: "4+", title: "Professional Certificates" },
  { number: "15+", title: "Technologies Learned" },
  { number: "2025", title: "Graduate" },
];

function Stats() {
  return (
    <section className="bg-slate-950 py-24 px-6 text-white">
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center text-cyan-400 mb-16"
        >
          Portfolio Statistics
        </motion.h2>

        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ scale: 1.05 }}
              className="bg-slate-800 rounded-2xl p-8 text-center shadow-xl border border-slate-700"
            >
              <h1 className="text-5xl font-bold text-cyan-400">
                {item.number}
              </h1>

              <p className="mt-4 text-gray-300 text-lg">
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Stats;