import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-950 text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center text-cyan-400 mb-16"
        >
          Contact Me
        </motion.h2>

        <div className="bg-slate-800 rounded-2xl p-8 shadow-xl space-y-6">

          <div className="flex items-center gap-4">
            <FaEnvelope className="text-cyan-400 text-2xl" />
            <span>saideepmalgireddy@gmail.com</span>
          </div>

          <div className="flex items-center gap-4">
            <FaGithub className="text-cyan-400 text-2xl" />
            <a
              href="https://github.com/MALGIREDDY"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400"
            >
              github.com/MALGIREDDY
            </a>
          </div>

          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-cyan-400 text-2xl" />
            <span>Telangana, India</span>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;