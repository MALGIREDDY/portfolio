import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import whale from "../assets/docker-whale.png";

function CursorGlow() {
  const [position, setPosition] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <motion.img
      src={whale}
      alt="Docker Whale"
      className="pointer-events-none fixed z-[9999] w-14 h-14 drop-shadow-[0_0_20px_rgba(59,130,246,0.8)]"
      animate={{
        x: position.x + 20,
        y: position.y + 20,
        rotate: [0, 8, -8, 0],
        y: [position.y + 20, position.y + 15, position.y + 25, position.y + 20],
      }}
      transition={{
        x: {
          type: "spring",
          stiffness: 140,
          damping: 18,
        },
        y: {
          type: "spring",
          stiffness: 140,
          damping: 18,
        },
        rotate: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
    />
  );
}

export default CursorGlow;