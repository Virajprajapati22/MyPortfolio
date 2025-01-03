// import resume from "../../../public/Viraj_Prajapati_Resume.pdf";
import pdficon from "../../../public/pdficon.svg";

import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="py-4 top-0 w-full z-10">
      <nav className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-3xl font-bold text-black">
          <svg
            width="141"
            height="41"
            viewBox="0 0 181 81"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M102.057 67V74.3535H79.5859V67H102.057ZM105.66 24.3438H120.25C123.102 24.3438 125.572 24.832 127.662 25.8086C129.752 26.7852 131.354 28.2305 132.467 30.1445C133.6 32.0586 134.166 34.4219 134.166 37.2344C134.166 39.6758 133.854 41.7168 133.229 43.3574C132.623 44.998 131.764 46.3555 130.65 47.4297C129.537 48.4844 128.229 49.3535 126.725 50.0371L123.473 51.9414H112.018L111.959 44.002H120.016C120.934 44.002 121.695 43.7676 122.301 43.2988C122.906 42.8301 123.355 42.166 123.648 41.3066C123.961 40.4277 124.117 39.3828 124.117 38.1719C124.117 36.9414 123.971 35.8867 123.678 35.0078C123.385 34.1289 122.955 33.4551 122.389 32.9863C121.842 32.5176 121.129 32.2832 120.25 32.2832H115.68V67H105.66V24.3438ZM124.557 67L116.998 48.1328L127.604 48.0742L135.309 66.5605V67H124.557ZM152.623 59.0312V45.0859C152.623 44.1875 152.555 43.5039 152.418 43.0352C152.281 42.5469 152.057 42.2051 151.744 42.0098C151.451 41.7949 151.012 41.6875 150.426 41.6875C149.957 41.6875 149.576 41.8047 149.283 42.0391C148.99 42.2734 148.785 42.6348 148.668 43.123C148.551 43.6113 148.492 44.2559 148.492 45.0566H138.854C138.854 43.5918 139.137 42.2344 139.703 40.9844C140.27 39.7148 141.08 38.6113 142.135 37.6738C143.189 36.7363 144.449 36.0137 145.914 35.5059C147.398 34.9785 149.059 34.7148 150.895 34.7148C153.062 34.7148 155.006 35.0664 156.725 35.7695C158.443 36.4531 159.801 37.5566 160.797 39.0801C161.812 40.6035 162.32 42.625 162.32 45.1445V59.002C162.32 61.0723 162.428 62.6445 162.643 63.7188C162.857 64.7734 163.15 65.7012 163.521 66.502V67H153.912C153.463 66.0234 153.131 64.832 152.916 63.4258C152.721 62 152.623 60.5352 152.623 59.0312ZM153.707 47.6348L153.766 52.9082H151.275C150.67 52.9082 150.152 53.0547 149.723 53.3477C149.293 53.6211 148.932 53.9922 148.639 54.4609C148.365 54.9297 148.17 55.457 148.053 56.043C147.936 56.6094 147.877 57.1953 147.877 57.8008C147.877 58.6602 147.965 59.2852 148.141 59.6758C148.336 60.0664 148.57 60.3203 148.844 60.4375C149.137 60.5352 149.459 60.584 149.811 60.584C150.553 60.584 151.168 60.4277 151.656 60.1152C152.164 59.7832 152.525 59.3926 152.74 58.9434C152.955 58.4941 153.014 58.1133 152.916 57.8008L153.912 61.668C153.58 62.3906 153.258 63.1035 152.945 63.8066C152.633 64.4902 152.242 65.125 151.773 65.7109C151.305 66.2773 150.729 66.7266 150.045 67.0586C149.361 67.4102 148.502 67.5859 147.467 67.5859C145.826 67.5859 144.303 67.2539 142.896 66.5898C141.51 65.9258 140.387 64.9004 139.527 63.5137C138.688 62.127 138.268 60.3691 138.268 58.2402C138.268 56.7754 138.492 55.4082 138.941 54.1387C139.41 52.8496 140.143 51.7168 141.139 50.7402C142.135 49.7637 143.473 49.002 145.152 48.4551C146.852 47.9082 148.922 47.6348 151.363 47.6348H153.707ZM168.033 35.3008H177.643V68.0254C177.643 70.5645 177.213 72.7031 176.354 74.4414C175.494 76.1992 174.254 77.5273 172.633 78.4258C171.012 79.3438 169.078 79.8027 166.832 79.8027C166.051 79.8027 165.357 79.7637 164.752 79.6855C164.127 79.627 163.414 79.5 162.613 79.3047L162.584 71.834C163.053 71.9121 163.463 71.9707 163.814 72.0098C164.166 72.0684 164.547 72.0977 164.957 72.0977C165.621 72.0977 166.178 71.9512 166.627 71.6582C167.076 71.3652 167.418 70.916 167.652 70.3105C167.906 69.7051 168.033 68.9434 168.033 68.0254V35.3008ZM167.389 27.127C167.389 25.7207 167.867 24.5684 168.824 23.6699C169.801 22.7715 171.061 22.3223 172.604 22.3223C174.146 22.3223 175.396 22.7715 176.354 23.6699C177.33 24.5684 177.818 25.7207 177.818 27.127C177.818 28.5332 177.33 29.6855 176.354 30.584C175.396 31.4824 174.146 31.9316 172.604 31.9316C171.061 31.9316 169.801 31.4824 168.824 30.584C167.867 29.6855 167.389 28.5332 167.389 27.127Z"
              fill="black"
            />
            <path
              d="M39.6066 69.341L5.37688 17.8907L72.9242 17.2954L39.6066 69.341Z"
              fill="#0495FA"
            />
          </svg>
        </h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <a
              href="#about"
              className="text-black font-400 hover:text-gray-800 transition duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="text-black hover:text-gray-800 transition duration-300"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-black hover:text-gray-800 transition duration-300"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#research"
              className="text-black hover:text-gray-800 transition duration-300"
            >
              Research
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-black hover:text-gray-800 transition duration-300"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="/Viraj_Prajapati_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-black hover:text-gray-800 transition duration-300"
            >
              <img src="/pdficon.svg" alt="PDF Icon" className="w-4 h-4" />
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <ul className="md:hidden bg-white shadow-md py-2 px-4 space-y-4">
          <li>
            <a
              href="#about"
              className="block text-black hover:text-gray-800 transition duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="block text-black hover:text-gray-800 transition duration-300"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="block text-black hover:text-gray-800 transition duration-300"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#research"
              className="block text-black hover:text-gray-800 transition duration-300"
            >
              Research
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="block text-black hover:text-gray-800 transition duration-300"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="/Viraj_Prajapati_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-black hover:text-gray-800 transition duration-300"
            >
              <img src="/pdficon.svg" alt="PDF Icon" className="w-4 h-4" />
              Resume
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
