import { Link } from "react-scroll";

function Navbar() {
  const menuItems = [
    "about",
    "skills",
    "projects",
    "education",
    "certificates",
    "contact",
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        <h1 className="text-2xl font-bold text-cyan-400">
          Sai Deep
        </h1>

        <ul className="hidden md:flex gap-8">

          {menuItems.map((item) => (
            <li key={item}>
              <Link
                to={item}
                smooth={true}
                duration={500}
                offset={-70}
                className="cursor-pointer capitalize text-gray-300 hover:text-cyan-400 transition"
              >
                {item}
              </Link>
            </li>
          ))}

        </ul>

        <a
          href="/resume.pdf"
          download
          className="bg-cyan-500 hover:bg-cyan-400 px-5 py-2 rounded-lg font-semibold transition"
        >
          Resume
        </a>

      </div>
    </nav>
  );
}

export default Navbar;