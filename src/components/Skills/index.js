import { motion } from "framer-motion";
import Image from "next/image";
import react from "../../../public/react.png";
import javascript from "../../../public/javascript.png";
import tailwind from "../../../public/tailwind.png";
import node from "../../../public/node.png";
import python from "../../../public/python.png";
import cpp from "../../../public/cpp.png";
import git from "../../../public/git.png";
import docker from "../../../public/docker.png";
import graphql from "../../../public/graphql.png";
import posgresql from "../../../public/posgresql.png";
import typescript from "../../../public/typescript.png";
import nlp from "../../../public/nlp.png";
import ml from "../../../public/ml.png";
import pytorch from "../../../public/pytorch.png";
import mongodb from "../../../public/mongodb.png";
import tf from "../../../public/tf.png";

const skills = [
  {
    name: "Machine Learning",
    logo: ml?.src,
    proficiency: "Intermediate",
  },
  { name: "NLP", logo: nlp?.src, proficiency: "Intermediate" },
  { name: "Pytorch", logo: pytorch?.src, proficiency: "Intermediate" },
  { name: "TensorFlow", logo: tf?.src, proficiency: "Intermediate" },
  { name: "Python", logo: python?.src, proficiency: "Advanced" },
  { name: "C++", logo: cpp?.src, proficiency: "Intermediate" },
  { name: "React JS", logo: react?.src, proficiency: "Intermediate" },
  { name: "Node JS", logo: node?.src, proficiency: "Intermediate" },
  { name: "JavaScript", logo: javascript?.src, proficiency: "Advanced" },
  {
    name: "TypeScript",
    logo: typescript?.src,
    proficiency: "Intermediate",
  },
  // { name: "Next JS", logo: "/nextjs-logo.png", proficiency: "Intermediate" },
  { name: "Tailwind", logo: tailwind?.src, proficiency: "Advanced" },
  { name: "Git", logo: git?.src, proficiency: "Advanced" },
  { name: "Docker", logo: docker?.src, proficiency: "Beginner" },
  // { name: "AWS", logo: "/aws-logo.png", proficiency: "Intermediate" },
  { name: "GraphQL", logo: graphql?.src, proficiency: "Beginner" },
  { name: "PostgresSQL", logo: posgresql?.src, proficiency: "Intermediate" },
  { name: "MongoDB", logo: mongodb?.src, proficiency: "Intermediate" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const Skills = () => {
  return (
    <section id="skills" className="py-16 px-4">
      <h2
        className="text-3xl font-light text-center mb-12 open-sans-custom text-gray-800"
        style={{ letterSpacing: "0.05em" }}
      >
        SKILLS
      </h2>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 20px rgba(99, 102, 241, 0.5)",
            }}
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center transition-all duration-150"
          >
            <Image
              src={skill.logo}
              alt={`${skill.name} logo`}
              width={64}
              height={64}
              className="mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              {skill.name}
            </h3>
            <p className="text-gray-600 mt-2">
              Proficiency: {skill.proficiency}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
