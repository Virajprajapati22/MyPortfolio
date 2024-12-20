import { motion } from "framer-motion";

const researchProjects = [
  {
    title: "Recommendation System for Brand and Micro-Influencer Collaboration",
    description:
      "A research paper focusing on recommending the best-fit micro-influencers for brands based on detailed profile analysis and data-driven insights.",
    duration: "Jan 2024 - Apr 2024",
    status: "In progress",
  },
  {
    title: "Gender Classification from Instagram User Profiles",
    description:
      "A study on classifying user gender by analyzing Instagram profiles, leveraging NLP and computer vision techniques.",
    duration: "Jul 2024 - Oct 2024",
    status: "In progress",
  },
];

const Research = () => {
  return (
    <section id="research" className="py-16 px-6 bg-[#eef2f5] text-gray-800">
      <div className="container mx-auto">
        <h2
          className="text-3xl font-light text-center mb-12"
          style={{ letterSpacing: "0.05em" }}
        >
          RESEARCH WORK
        </h2>
        <div className="relative border-l-4 border-blue-500 pl-8">
          {researchProjects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.03,
                boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
              }}
              className="mb-12 flex flex-col relative"
            >
              <div className="absolute -left-8 bg-blue-500 w-6 h-6 rounded-full border-4 border-white"></div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-600 mb-2 font-medium">
                  {project.duration}
                </p>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <span className="text-sm font-medium text-blue-600">
                  {project.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
