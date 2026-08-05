import { motion } from "framer-motion";

function Loader() {
  return (
    <div className="fixed inset-0 bg-slate-950 flex flex-col justify-center items-center z-[9999]">

      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-8xl font-black text-cyan-400"
      >
        M
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-3xl font-bold mt-6"
      >
        MALIGIREDDY
      </motion.h2>

      <h2 className="text-3xl font-bold text-cyan-400">
        SAI DEEP REDDY
      </h2>

      <p className="text-gray-400 mt-4">
        AI • DevOps • Cyber Security
      </p>

      <motion.div
        initial={{ width: 0 }}
        animate={{ width: 250 }}
        transition={{ duration: 2 }}
        className="h-1 bg-cyan-400 mt-10 rounded-full"
      />
    </div>
  );
}

export default Loader;