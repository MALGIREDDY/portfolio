import { motion } from "framer-motion";
import { FaEye, FaCalendarAlt, FaAward } from "react-icons/fa";

// PDF Certificates
import awsCert from "../assets/certificates/aws-ml.pdf";
import ibmCert from "../assets/certificates/ibm-python.pdf";
import forageSoftwareCert from "../assets/certificates/forage-software.pdf";
import forageGenaiCert from "../assets/certificates/forage-genai.pdf";

// Logos
import awsLogo from "../assets/logos/aws.png";
import ibmLogo from "../assets/logos/ibm.png";
import forageLogo from "../assets/logos/forage.png";

const certificates = [
  {
    title: "Introduction to Machine Learning on AWS",
    issuer: "Coursera",
    year: "2025",
    logo: awsLogo,
    file: awsCert,
  },
  {
    title: "Data Analysis with Python",
    issuer: "IBM (Coursera)",
    year: "2023",
    logo: ibmLogo,
    file: ibmCert,
  },
  {
    title: "Software Engineering Job Simulation",
    issuer: "Forage",
    year: "2025",
    logo: forageLogo,
    file: forageSoftwareCert,
  },
  {
    title: "GenAI Powered Data Analytics Job Simulation",
    issuer: "Forage",
    year: "2025",
    logo: forageLogo,
    file: forageGenaiCert,
  },
];

function Certificates() {
  return (
    <section
      id="certificates"
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
            CERTIFICATIONS
          </p>

          <h2 className="text-5xl md:text-6xl font-black mt-3">
            Professional
            <span className="text-cyan-400"> Learning</span>
          </h2>

          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto mt-6"></div>

        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">

          {certificates.map((certificate, index) => (

            <motion.div
              key={certificate.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                y: -8,
              }}
              className="bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-3xl overflow-hidden shadow-2xl hover:border-cyan-400 transition-all duration-500"
            >

              {/* Logo */}

              <div className="bg-white p-8 flex justify-center">

                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  src={certificate.logo}
                  alt={certificate.issuer}
                  className="h-20 object-contain"
                />

              </div>

              <div className="p-8">

                <h3 className="text-2xl font-bold mb-4 leading-9">
                  {certificate.title}
                </h3>

                <div className="flex items-center gap-3 text-gray-300 mb-3">

                  <FaAward className="text-cyan-400" />

                  <span>{certificate.issuer}</span>

                </div>

                <div className="flex items-center gap-3 text-cyan-400 mb-8">

                  <FaCalendarAlt />

                  <span>{certificate.year}</span>

                </div>

                <a
                  href={certificate.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 transition-all duration-300"
                >

                  <FaEye />

                  View Certificate

                </a>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Certificates;