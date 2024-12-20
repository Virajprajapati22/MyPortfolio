import Image from "next/image";
import myimg2 from "../../../public/myimg2.jpeg";
import insta from "../../../public/insta.png";
import github from "../../../public/github.png";
import linkedin from "../../../public/linkedin.png";

export default function About() {
  const professionDetails = [
    "DAIICT' 25",
    "M.Tech Student",
    "Software Engineer",
    "AI/ML Researcher",
  ];

  return (
    <section
      id="about"
      className="m-2 rounded-lg bg-[#0288e8] py-16 px-6 md:px-20"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Left Image Section */}
        <div className="flex flex-col items-center w-full md:w-1/3 text-center">
          <Image
            src={myimg2?.src}
            alt="Viraj Prajapati"
            className="rounded-full border-4 border-white shadow-lg"
            width={260} // Increased the size
            height={260} // Increased the size
          />

          {/* Social Links Section */}
          <div className="flex justify-center mt-6 space-x-6">
            <a
              href="https://www.linkedin.com/in/viraj-prajapati-22jan/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <Image
                src={linkedin?.src}
                alt="LinkedIn"
                width={48} // Slightly larger icons
                height={48}
                className="rounded-full"
              />
            </a>
            <a
              href="https://github.com/Virajprajapati22"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <Image
                src={github?.src}
                alt="GitHub"
                width={48} // Slightly larger icons
                height={48}
                className="rounded-full"
              />
            </a>
            <a
              href="https://www.instagram.com/__viraj22__/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <Image
                src={insta?.src}
                alt="Instagram"
                width={48} // Slightly larger icons
                height={48}
                className="rounded-full"
              />
            </a>
          </div>
        </div>

        {/* Right About Details Section */}
        <div className="w-full md:w-2/3 text-[#fff]">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Viraj Prajapati
          </h2>
          <p className="text-lg font-semibold leading-relaxed mb-4">
            {professionDetails.join(", ")}
          </p>
          <p className="text-lg font-normal leading-relaxed mb-6">
            I'm a passionate Machine Learning Engineer, Software Developer, and
            AI/ML Researcher. My expertise lies in solving real-world challenges
            through innovative solutions, including artificial intelligence and
            advanced computational technologies.
          </p>
          <p className="text-lg font-normal leading-relaxed">
            Currently, I'm pursuing a Master's degree in Computer Science with a
            focus on AI/ML, while actively contributing to impactful research in
            this space.
          </p>

          {/* Additional Info */}
          <div className="mt-6">
            <h3 className="font-semibold text-lg mb-2">
              Education & Certifications:
            </h3>
            <ul className="list-disc list-inside">
              <li className="font-semibold">
                Master of Engineering in Information and Communication
                Technology (Machine Learning)
              </li>
              <li className="font-semibold">
                Bachelor of Science in Computer Science and Engineering
              </li>
              <li className="font-normal">
                Certificate in Advanced Research in Artificial Intelligence and
                Machine Learning
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
