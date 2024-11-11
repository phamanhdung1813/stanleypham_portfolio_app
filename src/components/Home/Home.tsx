import { FaGithub, FaLinkedin } from "react-icons/fa";
import CopyToClipboard from "./Copy";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const [textWriter] = useTypewriter({
    words: ["Cloud Developer", "Software Developer", "DevOps Developer"],
    loop: true,
    typeSpeed: 120,
    delaySpeed: 50,
  });

  return (
    <section id="home">
      <div className="mt-16 min-h-screen bg-neutral-100 dark:bg-neutral-800 container mx-auto flex px-6 py-16 lg:py-20 flex-col md:flex-row items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col items-center md:items-start text-center md:text-left mb-12 md:mb-0">
          <h1 className="title-font text-2xl sm:text-4xl lg:text-5xl font-medium dark:text-white text-neutral-800 mb-4">
            Hi, I'm Stanley Pham{" "}
            <span className="animate-wave inline-block">👋</span>
            <br className="hidden lg:inline-block" />I am a{" "}
            <span className="dark:text-green-400 text-green-600">
              {textWriter}
            </span>
            <Cursor cursorStyle="<" />
          </h1>

          {/* Social Icons and Email */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/phamanhdung1813"
              className="dark:text-neutral-400 dark:hover:text-white text-neutral-500 hover:text-neutral-800 transition-colors"
            >
              <FaGithub className="w-8 h-8 sm:w-10 sm:h-10" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/anh-dung-pham-38830b1a6/"
              className="dark:text-neutral-400 dark:hover:text-white text-neutral-500 hover:text-neutral-800 transition-colors"
            >
              <FaLinkedin className="w-8 h-8 sm:w-10 sm:h-10" />
              <span className="sr-only">LinkedIn</span>
            </a>

            <span className="text-neutral-400 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-white transition-colors">
              <CopyToClipboard textToCopy="phamanhdung@gmail.com" />
            </span>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row sm:space-x-4 mt-6">
            <Link
              to="/resume"
              className="px-4 py-2 bg-neutral-500 text-white font-semibold rounded-lg hover:bg-green-600 dark:hover:bg-green-400  transition duration-300 transform hover:scale-105"
            >
              View My Resume
            </Link>
            <Link
              to="aboutMe"
              className="mt-4 sm:mt-0 px-4 py-2 bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-white font-semibold hover:text-green-600 dark:hover:text-green-400 hover:underline transition duration-300 transform hover:scale-105"
            >
              Explore more about me
            </Link>
          </div>
        </div>

        {/* Profile Image */}
        <div className="w-4/5 sm:w-2/3 md:w-1/2 lg:w-1/3 mx-auto lg:max-w-xs mt-6 md:mt-0">
          <img
            className="object-cover object-center rounded-full w-full h-full"
            alt="hero"
            src="/images/Home/my-avatar.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
