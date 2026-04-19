"use client";
import { motion } from "framer-motion";


const resumeUrl = "/pdf/devdami.pdf";

const Experience = () => {
  const experienceData = [
    {
      title: "Full-Stack Engineer",
      company: "VamooveGo",
      location: "Remote",
      period: "2025 – Present",
      description: [
        "Developed the backend architecture for a campus-focused food delivery platform serving FUTA and Akure.",
        "Built vendor onboarding, menu management, order processing, and cart features using Node.js and Supabase.",
        "Implemented delivery fee calculation using geolocation-based distance metrics with Leaflet maps.",
        "Designed a responsive React frontend enabling users to browse vendors, place orders, and track deliveries.",
        "Integrated secure payment workflows and optimized data fetching for better performance."
      ]
    },
    {
      title: "Backend Engineer Intern",
      company: "Grit Technology",
      location: "Remote",
      period: "Aug 2025 – Sep 2025",
      description: [
        "Developed RESTful APIs that served as the core mechanism for client data synchronization.",
        "Collaborated closely with frontend developers to optimize API contracts and ensure efficient integration.",
        "Integrated third-party services to enable real-time data display, expanding the application's core features."
      ]
    },
    {
      title: "Frontend Developer",
company: "Swift Ticket Enterprise",
location: "Remote",
period: "May 2024 – Sep 2024",
description: [
  "Built and maintained WordPress pages with responsive UI.",
  "Customized themes using HTML, CSS, JavaScript, and PHP.",
  "Integrated and managed site features and plugins.",
  "Worked on DNS, subdomains, and basic hosting setup.",
  "Fixed UI issues and improved overall site performance."
]
    },
    {
      title: "Frontend Developer",
      company: "Taadax Digital Solutions",
      location: "Remote",
      period: "Nov 2023 – Mar 2024",
      description: [
        "Led weekly knowledge-sharing sessions that improved team collaboration and problem-solving efficiency.",
        "Worked with APIs to connect frontend components to backend data sources.",
        "Tested backend endpoints and optimized data flow across the application.",
        "Designed and built a full HR employee dashboard using React, CSS, and JavaScript."
      ]
    },
    {
      title: "Web Developer",
      company: "Ikechoice Couture",
      location: "Remote",
      period: "Oct 2022 – May 2023",
      description: [
        "Implemented API-based product display for couture listings.",
        "Collaborated with designers to build visually appealing website layouts.",
        "Developed responsive UI components using HTML, CSS, and JavaScript.",
        "Applied SEO best practices to increase search engine ranking and organic traffic."
      ]
    }
  ];

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
          <span className="text-[#6f1cd7] text-sm tracking-[0.25em] uppercase mb-4 block font-medium">
            Experience
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-clashbold text-white mb-6 tracking-tight">
            Professional Journey
          </h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-[#6f1cd7] to-transparent mb-8" />
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 md:left-12 top-0 w-[1px] h-full bg-gradient-to-b from-[#6f1cd7]/40 via-[#6f1cd7]/20 to-transparent" />

          <div className="space-y-12">
            {experienceData.map((experience, index) => (
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
                    backgroundColor: "rgba(111, 28, 215, 0.08)"
                  }}
                  className="group relative bg-[#130b1c]/60 backdrop-blur-sm border border-[#ffffff08] p-8 rounded-sm transition-all duration-500"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#6f1cd7]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  <div className="relative z-10">
                    <h3 className="text-2xl md:text-3xl font-clashbold text-white mb-3">
                      {experience.title}
                    </h3>

                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-6">
                      <p className="text-[#6f1cd7] font-medium tracking-wide">
                        {experience.company}
                      </p>
                      <div className="flex items-center gap-4">
                        <span className="hidden md:inline text-[#FFFFFF40]">
                          •
                        </span>
                        <span className="text-[#FFFFFF99] text-sm">
                          {experience.location}
                        </span>
                        <span className="text-[#FFFFFF40]">•</span>
                        <span className="text-[#FFFFFF99] text-sm tracking-wider">
                          {experience.period}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {experience.description.map((item, i) => (
                        <li
                          key={i}
                          className="text-[#FFFFFF99] leading-relaxed font-light flex items-start"
                        >
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

          
        </div>
      </div>
    </section>
  );
};

export default Experience;
