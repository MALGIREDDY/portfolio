import { FaGithub, FaEnvelope, FaArrowUp, FaCode } from "react-icons/fa";
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-16 pb-8">

      {/* Top Divider */}
      <div className="w-40 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mb-12"></div>

      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >

          <h2 className="text-3xl md:text-4xl font-black text-cyan-400">
            MALIGIREDDY SAI DEEP REDDY
          </h2>

          <p className="text-gray-400 mt-4 text-lg">
            AI • DevOps • Cyber Security • Machine Learning
          </p>

          <p className="text-gray-500 mt-6 max-w-2xl mx-auto leading-8">
            Thank you for visiting my portfolio.
            I'm passionate about building modern software,
            solving real-world problems, and continuously
            learning new technologies.
          </p>

        </motion.div>

        {/* Social Icons */}

        <div className="flex justify-center gap-8 mt-10 text-3xl">

          <a
            href="mailto:saideepmalgireddy@gmail.com"
            className="hover:text-cyan-400 hover:scale-125 transition-all duration-300"
          >
            <FaEnvelope />
          </a>

          <a
            href="https://github.com/MALGIREDDY"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 hover:scale-125 transition-all duration-300"
          >
            <FaGithub />
          </a>

          <a
            href="#home"
            className="hover:text-cyan-400 hover:scale-125 transition-all duration-300"
          >
            <FaArrowUp />
          </a>

        </div>

        {/* Tech Stack */}

       <div className="text-center mt-10">
  <p className="text-cyan-400 font-semibold">
    Open to Internship • Full-Time • Research Opportunities
  </p>
</div>

        <hr className="border-slate-800 my-10" />

        <p className="text-center text-gray-500 text-sm">
          © 2026 MALIGIREDDY SAI DEEP REDDY. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;