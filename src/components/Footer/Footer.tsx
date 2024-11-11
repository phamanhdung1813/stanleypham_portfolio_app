import { FaGithub, FaLinkedin } from "react-icons/fa"; //

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-neutral-800">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm  sm:text-center dark:text-neutral-500">
            © 2024{" "}
            <a href="https://stanleypham.com" className="hover:underline ">
              Stanley Pham, Toronto, Canada
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/phamanhdung1813"
              className="text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
            >
              <FaGithub className="w-7 h-7" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/anh-dung-pham-38830b1a6/"
              className="text-neutral-500 hover:text-neutral-900 dark:hover:text-white ms-5"
            >
              <FaLinkedin className="w-7 h-7" />
              <span className="sr-only">Linkedin</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
