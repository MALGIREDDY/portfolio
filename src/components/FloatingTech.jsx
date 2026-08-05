import { motion } from "framer-motion";

const tech = [
  "Docker",
  "GitHub",
  "GitHub Actions",
  "React",
  "Python",
  "Linux",
  "DevOps",
  "AI",
  "Machine Learning",
];

function FloatingTech() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {tech.map((item, index) => (

        <motion.div
          key={item}
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0.08,
          }}
          animate={{
            y: [0, -40, 0],
          }}
          transition={{
            duration: 5 + index,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute text-cyan-300 font-bold text-xl"
        >
          {item}
        </motion.div>

      ))}

    </div>
  );
}

export default FloatingTech;