import { FaGithub, FaEnvelope, FaArrowUp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-10 border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          <div>
            <h2 className="text-2xl font-bold text-cyan-400">
              MALIGIREDDY SAI DEEP REDDY
            </h2>

            <p className="text-gray-400 mt-2">
              AI & Machine Learning Graduate
            </p>
          </div>

          <div className="flex gap-6 text-3xl">

            <a
              href="mailto:saideepmalgireddy@gmail.com"
              className="hover:text-cyan-400 transition"
            >
              <FaEnvelope />
            </a>

            <a
              href="https://github.com/YOUR_GITHUB_USERNAME"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href="#"
              className="hover:text-cyan-400 transition"
            >
              <FaArrowUp />
            </a>

          </div>

        </div>

        <hr className="my-8 border-slate-700" />

        <p className="text-center text-gray-500">
          © 2026 MALIGIREDDY SAI DEEP REDDY. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;