import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaDownload,
} from "react-icons/fa";

function Contact() {
  const contacts = [
    {
      title: "Email",
      value: "saideepmalgireddy@gmail.com",
      icon: <FaEnvelope />,
      link: "mailto:saideepmalgireddy@gmail.com",
    },
    {
      title: "GitHub",
      value: "github.com/MALGIREDDY",
      icon: <FaGithub />,
      link: "https://github.com/MALGIREDDY",
    },
    {
      title: "LinkedIn",
      value: "Coming Soon",
      icon: <FaLinkedin />,
      link: "#",
    },
    {
      title: "Location",
      value: "Telangana, India",
      icon: <FaMapMarkerAlt />,
      link: "#",
    },
  ];

  return (
    <section
      id="contact"
      className="bg-slate-950 text-white py-28 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >

          <p className="uppercase tracking-[8px] text-cyan-400 font-semibold">
            LET'S CONNECT
          </p>

          <h2 className="text-5xl md:text-6xl font-black mt-3">
            Get In
            <span className="text-cyan-400"> Touch</span>
          </h2>

          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto mt-6"></div>

          <p className="text-gray-400 mt-8 text-lg max-w-2xl mx-auto">
            Interested in collaborating, discussing opportunities,
            or just saying hello? Feel free to reach out.
          </p>

        </motion.div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 gap-8">

          {contacts.map((item, index) => (

            <motion.a
              key={item.title}
              href={item.link}
              target={item.link.startsWith("http") ? "_blank" : "_self"}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-8 shadow-2xl hover:border-cyan-400 transition-all duration-500"
            >

              <div className="text-5xl text-cyan-400 mb-6">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold mb-2">
                {item.title}
              </h3>

              <p className="text-gray-300 break-all">
                {item.value}
              </p>

            </motion.a>

          ))}

        </div>

        {/* Resume Button */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center mt-16"
        >

          <button className="flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg">

            <FaDownload />

            Download Resume

          </button>

        </motion.div>

      </div>
    </section>
  );
}

export default Contact;