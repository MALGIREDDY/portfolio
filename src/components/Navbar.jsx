import { Link } from "react-scroll";

function Navbar() {
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

        {/* Navigation */}

        <ul className="hidden md:flex gap-8">

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

        {/* Resume */}

        <a
          href="/resume.pdf"
          download
          className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 px-5 py-2 rounded-xl font-semibold transition-all duration-300 shadow-lg"
        >
          Resume
        </a>

      </div>
    </nav>
  );
}

export default Navbar;