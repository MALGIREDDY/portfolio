import { FaArrowUp } from "react-icons/fa";

function BackToTop() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 bg-cyan-500 hover:bg-cyan-400 p-4 rounded-full shadow-lg z-50"
    >
      <FaArrowUp />
    </button>
  );
}

export default BackToTop;