import { motion } from "framer-motion";
import { FaEye } from "react-icons/fa";

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
      className="bg-slate-900 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center text-cyan-400 mb-16"
        >
          Certifications
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">

          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ scale: 1.03 }}
              className="bg-slate-800 rounded-2xl shadow-xl overflow-hidden border border-slate-700"
            >

              <div className="bg-white flex justify-center items-center p-6">
                <img
                  src={certificate.logo}
                  alt={certificate.issuer}
                  className="h-16 object-contain"
                />
              </div>

              <div className="p-6">

                <h3 className="text-2xl font-bold mb-3">
                  {certificate.title}
                </h3>

                <p className="text-gray-400">
                  {certificate.issuer}
                </p>

                <p className="text-cyan-400 mt-2">
                  {certificate.year}
                </p>

                <a
                  href={certificate.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-6 bg-cyan-500 hover:bg-cyan-400 px-6 py-3 rounded-xl transition"
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