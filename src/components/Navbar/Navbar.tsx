import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoCodeSlashSharp } from "react-icons/io5";
import { useLocation, Link } from "react-router-dom";
import { MdLightMode, MdDarkMode } from "react-icons/md";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const location = useLocation();

  // Toggle the menu state
  const toggleMenu = () => setIsOpen((prev) => !prev);

  // Close the menu when a link is clicked
  const closeMenu = () => setIsOpen(false);

  // Dark mode state
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true" ||
      window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  // Toggle dark mode and save it in localStorage
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  // Apply/remove dark class to the <html> element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [darkMode]);

  return (
    <nav className="bg-neutral-100 dark:bg-neutral-800 fixed top-0 left-0 w-full z-50">
      <div className="flex flex-wrap items-center justify-between mx-auto p-2">
        {/* Logo and Home Link */}
        <Link
          to="/"
          className="flex items-center space-x-1 rtl:space-x-reverse"
        >
          <div className="flex items-center">
            <IoCodeSlashSharp className="h-7 ml-2 w-7 mr-2 text-green-600 dark:text-green-400" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-green-600 dark:text-green-400">
              Stanley Pham
            </span>
          </div>
        </Link>

        {/* Icons and Toggle Buttons */}
        <div className="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
          {/* GitHub Button */}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/phamanhdung1813"
            className="inline-flex items-center font-medium justify-center px-1 py-2 text-sm 
            text-neutral-600  dark:text-neutral-400
            hover:text-neutral-950 dark:hover:text-white
            rounded-lg cursor-pointer"
          >
            <FaGithub className="w-9 h-9 transition-transform duration-200 transform hover:scale-125" />
          </a>

          {/* LinkedIn Button */}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/anh-dung-pham-38830b1a6/"
            className="inline-flex items-center font-medium justify-center px-1 py-2 text-sm 
            text-neutral-600 dark:text-neutral-400
            hover:text-blue-500 dark:hover:text-blue-400 
            rounded-lg cursor-pointer"
          >
            <FaLinkedin className="w-9 h-9 transition-transform duration-200 transform hover:scale-125" />
          </a>

          {/* Dark Mode Toggle Button */}
          <button
            type="button"
            onClick={toggleDarkMode}
            className="inline-flex items-center font-medium justify-center px-1 py-2 text-sm 
            text-neutral-600 dark:text-neutral-400
            hover:text-yellow-500 dark:hover:text-yellow-500
             rounded-lg cursor-pointer"
          >
            {darkMode ? (
              <MdLightMode className="w-9 h-9 transition-transform duration-200 transform hover:scale-125" />
            ) : (
              <MdDarkMode className="w-9 h-9 transition-transform duration-200 transform hover:scale-125" />
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          type="button"
          className="flex items-center justify-center p-2 w-12 h-12 md:hidden text-sm dark:text-neutral-100 text-neutral-800 border-neutral-800 dark:border-neutral-100 rounded-lg border"
          aria-controls="navbar-language"
          aria-expanded={isOpen}
          aria-label="Open main menu"
        >
          <div className="relative w-8 h-4">
            <span
              className={`block absolute h-0.5 w-full bg-current transition-transform duration-500 ease-in-out ${
                isOpen ? "rotate-45 top-[0.4rem]" : "translate-y-0"
              }`}
            ></span>
            <span
              className={`block absolute h-0.5 w-full bg-current transition-transform duration-500 ease-in-out ${
                isOpen ? "opacity-0" : "translate-y-[0.4rem]"
              }`}
            ></span>
            <span
              className={`block absolute h-0.5 w-full bg-current transition-transform duration-500 ease-in-out ${
                isOpen ? "-rotate-45 top-[0.4rem]" : "translate-y-[0.8rem]"
              }`}
            ></span>
          </div>
        </button>

        {/* Navbar Links */}
        <div
          className={`items-center justify-between ${
            isOpen ? "flex" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
          id="navbar-language"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-neutral-800 rounded-lg bg-neutral-100 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-neutral-800 md:dark:bg-neutral-800 dark:border-neutral-100">
            {["/", "/aboutMe", "/resume", "/achievement"].map((path, index) => {
              const labels = [
                "🏠Home",
                "ℹ About Me",
                "📑Resume",
                "✅Achievement",
              ];
              return (
                <li key={index} className="group">
                  <Link
                    to={path}
                    onClick={closeMenu} // Close the menu when link is clicked
                    className={`block py-2 px-3 rounded md:p-0 relative transition-colors duration-300 ${
                      location.pathname === path
                        ? "dark:text-green-400 text-green-600"
                        : "ml-1 text-neutral-800 dark:text-white dark:hover:text-white hover:text-neutral-800"
                    } transition-transform duration-200 transform hover:scale-110`}
                  >
                    {labels[index]}
                    <span
                      className={`absolute bottom-0 left-1/2 h-[2px] transition-all duration-500 ease-out transform -translate-x-1/2 ${
                        location.pathname === path
                          ? "dark:bg-green-400 bg-green-600 w-full"
                          : "dark:bg-neutral-100 w-0 group-hover:w-full bg-neutral-800"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
