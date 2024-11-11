import { useTypewriter, Cursor } from "react-simple-typewriter";

const AboutMe: React.FC = () => {
  const [textWriter] = useTypewriter({
    words: ["$ whoami"],
    loop: true,
    typeSpeed: 50,
  });

  return (
    <section id="aboutMe">
      <div className="mt-16 min-h-screen dark:bg-neutral-800 bg-neutral-100 container bg-inherit mx-auto px-10 py-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="w-full flex justify-center flex-col items-center">
          <img
            className="object-cover object-center rounded-full w-64 h-64"
            alt="hero"
            src="/images/Home/my-avatar.jpg"
          />
          <p className="text-neutral-800 dark:text-white font-bold mt-3 ml-1 flex items-center">
            Anh Dung (Stanley), Pham
          </p>
          <p className="text-white mt-3 ml-1 flex items-center">
            <img
              className="ml-0 w-6 h-4 object-cover animate-wave inline-block"
              alt="Canada Flag"
              src="/images/AboutMe/Flag_of_Canada.svg" // Canada flag URL
            />
            <img
              className="ml-2 w-6 h-4 object-cover animate-wave inline-block"
              alt="VietNam Flag"
              src="/images/AboutMe/Flag_of_Vietnam.svg" // Vietnam flag URL
            />
          </p>
        </div>
        <div className="text-center md:text-left">
          <h1 className="title-font sm:text-3xl text-3xl mb-4 font-medium dark:text-white text-neutral-800">
            <span className="dark:text-green-400 text-green-600">
              {textWriter}
            </span>
            <Cursor cursorStyle="<" />
            <br />
            <br />

            <p className="text-base text-left">
              My name is Anh Pham (Stanley), and I am currently a Software
              Developer with 2.5 year of experience. I am passionate about
              building Back-end System with Distributed Microservices and
              Serverless. Furthermore, I have a strong interest in Cloud
              Computing especially Amazon AWS and Containerized languages, with
              a goal of utilizing its capabilities to enhance both the
              functionality and user experience.
            </p>
            <br />
            <p className="text-base">
              After completing my high school program in Vietnam, I decided to
              pursue my education in Canada. I discovered my passion for math
              and technology, which led me to enroll in the Computer Systems
              Technology program at Seneca College in 2018, where I graduated in
              2021. During my studies at Seneca, I gained valuable knowledge in
              various areas of computer systems, including Windows Server,
              Linux, and Amazon AWS.
            </p>
            <br />
            <p className="text-base">
              Following that, I took the initiative to self-learn how to build
              end-to-end applications, as well as expanded my understanding of
              Data Structures & Algorithms, Design Patterns through Distributed
              System, Object-Oriented Programming, and Deploy Application with
              Containerized services. As an ambitious individual, I always
              strive for excellence in both my academic and personal pursuits,
              which is reflected in my final GPA of 3.8/4.0.
            </p>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
