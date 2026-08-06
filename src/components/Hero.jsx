import profile from "../assets/profile.jpeg";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white flex items-center overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>

        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >

            <div className="inline-block bg-cyan-500/20 border border-cyan-400 text-cyan-300 px-4 py-2 rounded-full text-sm mb-6">
              💼 AI • DevOps • Cyber Security Portfolio
            </div>

            <p className="text-cyan-400 text-xl mb-4">
              👋 Hello, I'm
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-tight">
              MALIGIREDDY
            </h1>

            <h1 className="text-5xl md:text-7xl font-black text-cyan-400">
              SAI DEEP REDDY
            </h1>

            <div className="mt-6 text-2xl font-semibold text-gray-300">

              <TypeAnimation
                sequence={[
                  "AI & Machine Learning Graduate",
                  2000,
                  "DevOps Enthusiast",
                  2000,
                  "Aspiring Cyber Security Engineer",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
              />

            </div>

            <p className="text-gray-400 mt-6 max-w-xl leading-8 text-lg">
              AI & Machine Learning graduate passionate about
              DevOps, Cyber Security, and Software Development.
              I enjoy building scalable applications,
              automating workflows, and continuously learning
              modern technologies.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">

              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-300 px-7 py-3 rounded-xl font-semibold">
                🚀 View Projects
              </button>

              <button className="border border-cyan-400 hover:bg-cyan-500 hover:text-black hover:scale-105 transition-all duration-300 px-7 py-3 rounded-xl font-semibold">
                📄 Download Resume
              </button>

            </div>

            <div className="flex gap-6 text-3xl mt-8">

              <a
                href="https://github.com/MALGIREDDY"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="hover:text-cyan-400 hover:scale-125 transition-all duration-300" />
              </a>

              <a href="mailto:saideepmalgireddy@gmail.com">
                <FaEnvelope className="hover:text-cyan-400 hover:scale-125 transition-all duration-300" />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="hover:text-cyan-400 hover:scale-125 transition-all duration-300" />
              </a>

            </div>

          </motion.div>

          {/* RIGHT SIDE */}

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >

            <motion.img
              src={profile}
              alt="Sai Deep"
              whileHover={{
                scale: 1.05,
                rotate: 1,
              }}
              transition={{
                duration: 0.4,
              }}
              className="
                w-80 h-80
                md:w-96 md:h-96
                rounded-full
                object-cover
                border-[5px] border-cyan-400
                shadow-[0_0_60px_rgba(34,211,238,0.45)]
                hover:shadow-[0_0_90px_rgba(34,211,238,0.7)]
                transition-all
                duration-500
              "
            />

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default Hero;