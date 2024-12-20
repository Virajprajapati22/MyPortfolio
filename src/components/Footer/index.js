import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logowhite.svg";
import insta from "../../../public/instagram-dark.png";
import linkedin from "../../../public/linkedin_dark.png";
import github from "../../../public/github_dark.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-8 mb-8">
          {/* Logo */}
          <div className="mb-6 md:mb-0">
            <Link href="/">
              <Image
                src={logo?.src} // Replace with your logo path
                alt="Viraj Prajapati"
                width={150}
                height={50}
                className="cursor-pointer"
              />
            </Link>
          </div>

          {/* Contact Details */}
          <div className="space-y-2 text-center md:text-left">
            <p>
              Email:{" "}
              <a
                href="mailto:prajapativiraj234@gmail.com"
                className="text-blue-500 hover:underline"
              >
                prajapativiraj234@gmail.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a
                href="tel:+919510470074"
                className="text-blue-500 hover:underline"
              >
                +91 9510470074
              </a>
            </p>
            <p>Location: Surat, India - 395004</p>
          </div>
        </div>

        {/* Social Media Icons (Optional) */}
        <div className="flex justify-center md:justify-start space-x-6 mb-8">
          <a
            href="https://www.instagram.com/__viraj22__/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={insta?.src} // Replace with your icon path
              alt="Instagram"
              width={24}
              height={24}
              className="hover:opacity-75"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/viraj-prajapati-22jan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={linkedin?.src} // Replace with your icon path
              alt="LinkedIn"
              width={24}
              height={24}
              className="hover:opacity-75"
            />
          </a>
          <a
            href="https://github.com/Virajprajapati22"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={github?.src} // Replace with your icon path
              alt="GitHub"
              width={24}
              height={24}
              className="hover:opacity-75"
            />
          </a>
        </div>

        {/* Bottom Section */}
        <div className="text-center text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Viraj Prajapati. All rights
            reserved.
          </p>
          <p>Designed with ❤️ using Next.js and Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
