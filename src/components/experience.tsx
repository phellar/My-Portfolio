'use client'

import Resume from "./resume";
const resumeUrl = '/pdf/DevJachi.pdf';
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section className="relative pt-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#130b1c] via-[#130b1c]/80 to-transparent opacity-30" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="text-[#6f1cd7] text-sm tracking-[0.25em] uppercase mb-4 block font-medium">Experience</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-clashbold text-white mb-6 tracking-tight">
            Professional Journey
          </h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-[#6f1cd7] to-transparent mb-8" />
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 md:left-12 top-0 w-[1px] h-full bg-gradient-to-b from-[#6f1cd7]/40 via-[#6f1cd7]/20 to-transparent" />

          <div className="space-y-12">
            {[
             {
              title: "Creative Designer & Software Developer",
              company: "9ine Movies",
              location: "Remote",
              period: "May 2025 – Present",
              description: [
                "Contributing to the design and development of the platform’s backend architecture for large-scale movie streaming and downloads.",
                "Integrated external movie data APIs and optimized backend performance using Node.js and MongoDB while implementing secure coding practices."
              ]
            },
            {
              title: "Lead Developer",
              company: "Jachi Tech, Nigeria",
              location: "Remote",
              period: "Jan 2023 – Jun 2024",
              description: [
                "Designed and maintained visually appealing, responsive websites for clients to enhance online visibility and scalability.",
                "Collaborated with frontend and backend teams to integrate APIs and improve functionality.",
                "Optimized website performance, increasing load speed and user experience across devices."
              ]
            },
            {
              title: "Software Engineer",
              company: "Ugwu Tutorials, Enugu, Nigeria",
              location: "Enugu, Nigeria",
              period: "May 2023 – Dec 2023",
              description: [
                "Developed and tested internal dashboards enabling seamless communication between students and teachers.",
                "Built and maintained backend systems using Node.js and Express.js.",
                "Created automated email systems for congratulatory, rejection, and confirmation notifications.",
                "Implemented admin dashboards for tutors to create exams and students to access personalized exams.",
                "Utilized Git and GitHub for version control and collaborative development."
              ]
            },
            {
              title: "Quivo",
              company: "Solo Developer",
              location: "Remote",
              period: "2024",
              description: [
                "Built an AI-powered job finder analyzing CV content and recommending tailored job listings.",
                "Implemented Redis caching to store job results for 24hrs, reducing latency and repeated API requests.",
                "Added a rate limiter to prevent multiple concurrent requests and reduce server load.",
                "Integrated Gemini AI for CV parsing and Adzuna API for real-time job data."
              ]
            },
            {
              title: "Kix CLI",
              company: "Solo Developer",
              location: "Remote",
              period: "2024",
              description: [
                "Developed a CLI tool to instantly scaffold MongoDB + Express.js projects and initialize GitHub repositories.",
                "Automated project setup, allowing developers to focus on building rather than configuration.",
                "Extending the tool to spin up full MERN applications with best practices such as .env and .gitignore."
              ]
            },
            {
              title: "Chain Arena",
              company: "Fullstack Developer",
              location: "Remote",
              period: "2024",
              description: [
                "Built a platform enabling Web2 games to integrate Web3 features without rebuilding infrastructure.",
                "Implemented tokenized assets, NFT badges, and in-game staking using MERN, Ethers.js, and Solidity.",
                "Designed secure and scalable backend and smart contract architecture for Web3 gaming integration."
              ]
            },
            {
              title: "Spltz",
              company: "Founder / Developer",
              location: "Remote",
              period: "2024",
              description: [
                "Developed an on-chain payment splitting system enabling users to pay in stablecoins and receive funds in fiat currency.",
                "Implemented secure smart contracts and backend logic for automated fund distribution.",
                "Showcases practical Web3 fintech experience and decentralized payment solutions."
              ]
            }
            ].map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative pl-6 md:pl-24"
              >
                <motion.div
                  className="absolute left-0 top-3 transform -translate-x-1/2"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-5 h-5 rounded-full bg-[#130b1c] border-2 border-[#6f1cd7] shadow-lg shadow-[#6f1cd7]/20" />
                </motion.div>

                <motion.div
                  whileHover={{
                    scale: 1.02,
                    backgroundColor: 'rgba(111, 28, 215, 0.08)'
                  }}
                  className="group relative bg-[#130b1c]/60 backdrop-blur-sm border border-[#ffffff08] p-8 rounded-sm transition-all duration-500"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#6f1cd7]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  <div className="relative z-10">
                    <h3 className="text-2xl md:text-3xl font-clashbold text-white mb-3">
                      {experience.title}
                    </h3>
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-6">
                      <p className="text-[#6f1cd7] font-medium tracking-wide">{experience.company}</p>
                      <div className="flex items-center gap-4">
                        <span className="hidden md:inline text-[#FFFFFF40]">•</span>
                        <span className="text-[#FFFFFF99] text-sm">{experience.location}</span>
                        <span className="text-[#FFFFFF40]">•</span>
                        <span className="text-[#FFFFFF99] text-sm tracking-wider">{experience.period}</span>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {experience.description.map((item, i) => (
                        <li key={i} className="text-[#FFFFFF99] leading-relaxed font-light flex items-start">
                          <span className="text-[#6f1cd7] mr-3 mt-1.5">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 pl-16 md:pl-24"
          >
            <Resume
              pdfUrl={resumeUrl}
              fileName="DevJachi.pdf"
              buttonText="Download Resume"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
