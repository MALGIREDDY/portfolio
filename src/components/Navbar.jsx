import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    "home",
    "about",
    "skills",
    "projects",
    "education",
    "certificates",
    "contact",
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-900/80 backdrop-blur-xl border-b border-slate-700 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="cursor-pointer"
        >
          <h1 className="text-3xl font-black text-cyan-400 hover:scale-105 transition">
            Sai Deep
          </h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-8">

          {menuItems.map((item) => (
            <li key={item}>
              <Link
                to={item}
                smooth={true}
                duration={500}
                offset={-80}
                spy={true}
                activeClass="text-cyan-400 border-b-2 border-cyan-400"
                className="cursor-pointer capitalize text-gray-300 hover:text-cyan-400 transition-all duration-300 pb-1"
              >
                {item}
              </Link>
            </li>
          ))}

        </ul>

        {/* Resume Button (Desktop) */}
        <a
          href="/resume.pdf"
          download
          className="hidden lg:block bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 px-5 py-2 rounded-xl font-semibold transition-all duration-300 shadow-lg"
        >
          Resume
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-2xl text-cyan-400"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (

        <div className="lg:hidden bg-slate-900 border-t border-slate-700">

          <ul className="flex flex-col text-center py-4">

            {menuItems.map((item) => (

              <li key={item} className="py-3">

                <Link
                  to={item}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={() => setMenuOpen(false)}
                  className="capitalize text-lg text-gray-300 hover:text-cyan-400 cursor-pointer"
                >
                  {item}
                </Link>

              </li>

            ))}

            <li className="pt-4">

              <a
                href="/resume.pdf"
                download
                className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 rounded-xl font-semibold"
              >
                Download Resume
              </a>

            </li>

          </ul>

        </div>

      )}

    </nav>
  );
}

export default Navbar;