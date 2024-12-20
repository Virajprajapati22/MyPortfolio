import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "GitFix",
    description:
      "A GitHub repository management application using Octokit REST API to organize and track issues efficiently.",
    tools: "Next.js, React Redux, Firebase, GitHub Octokit REST API",
    link: "https://github.com/Virajprajapati22/GitFix",
  },
  {
    title: "AgriLeaf",
    description:
      "A platform for identifying crop diseases through images and providing solutions using ML and LLMs.",
    tools: "Next.js, Python, FASTApi, Machine Learning, LLM, Firebase",
    link: "https://github.com/Virajprajapati22/Agrileaf",
  },
  {
    title: "Social Media Influencer Analysis",
    description:
      "A system to recommend micro-influencers for brands using Instagram data and machine learning.",
    tools: "Machine Learning (IR, NLP, Recommendation System)",
    link: "https://github.com/Virajprajapati22/Micro-Influencer-Recommendations",
  },
  {
    title: "CollabNET",
    description:
      "A database management system for employee and project tracking with advanced relational models.",
    tools: "PostgreSQL, SQL",
    link: "https://github.com/Virajprajapati22/CNET-DBMS",
  },
];

const nlpProjects = [
  {
    title: "Icare24x7",
    description:
      "A chatbot providing emotional support and mental health resources, fine-tuned using the HOPE dataset.",
    tools: "Python, Pytorch, DialoGPT",
    link: "https://github.com/Virajprajapati22/Icare24x7",
  },
  {
    title: "Review Disagreement Analyzer",
    description:
      "A system to detect contradictions and disagreements in reviewer comments using the DISAPERE dataset.",
    tools: "Python, Pytorch, BERT/T5",
    link: "https://github.com/Virajprajapati22/Review-Disagreement-Analysis",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-6 bg-[#f8f9fa] text-gray-800">
      <div className="container mx-auto">
        <h2
          className="text-3xl font-light text-center mb-12"
          style={{ letterSpacing: "0.05em" }}
        >
          PROJECTS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...projects, ...nlpProjects].map((project, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
              }}
              className="bg-white rounded-lg shadow-md flex flex-col justify-between p-6 h-full"
            >
              <div>
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{project.tools}</p>
                <p className="text-gray-700">{project.description}</p>
              </div>
              <div className="mt-6">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-blue-600 text-white font-medium py-2 px-4 rounded hover:bg-blue-700 transition"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
