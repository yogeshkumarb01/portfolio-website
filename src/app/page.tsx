"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFileAlt,
} from "react-icons/fa";

const Portfolio = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-opacity-80 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="text-xl font-bold"
            >
              YK
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {[
                "About",
                "Experience",
                "Projects",
                "Skills",
                "Education",
                "Contact",
              ].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-purple-400 transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section
        initial="initial"
        animate="animate"
        variants={fadeInUp}
        className="min-h-screen flex items-center justify-center text-center px-4"
      >
        <div>
          <h1 className="text-6xl font-bold mb-6 leading-normal bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
            Yogesh Kumar B
          </h1>
          <div className="my-8"></div>
          <p className="text-xl mb-6 max-w-2xl mx-auto text-gray-300">
            Software Development Engineer specializing in enterprise-grade
            backend systems
          </p>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-400">
            Building scalable microservices architecture with Java & Spring
            Boot. Proven track record across{" "}
            <strong> 5+ production-level projects </strong>
            including payment integrations, banking systems, and distributed
            applications.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-full font-semibold"
            onClick={() =>
              window.open(
                "https://github.com/yogeshkumarb01?tab=repositories",
                "_blank"
              )
            }
          >
            View My Work
          </motion.button>
        </div>
      </motion.section>

      <section id="experience" className="py-20 px-4 bg-gray-900">
        <h2 className="text-4xl font-bold text-center mb-12">
          Work Experience
        </h2>
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Anteriad Pvt Ltd Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-800 p-8 rounded-xl shadow-xl"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div>
                <h3 className="text-2xl font-bold text-purple-400">
                  Anteriad Pvt Ltd
                </h3>
                <p className="text-gray-400">Software Development Engineer</p>
              </div>
              <p className="text-gray-400">02/2025 - Present</p>
            </div>

            <div className="space-y-4">
              {[
                "Worked on leads generation product, implementing load balancer configurations and Splunk logs monitoring for system observability",
                "Developed and maintained actuators for application health monitoring and metrics collection",
                "Applied advanced data structures and algorithms to optimize performance and solve complex business problems",
                "Implemented threading concepts including semaphores, join operations, yield mechanisms, synchronization, and exception handling for robust concurrent processing",
                "Integrated third-party services and APIs to enhance product functionality and user experience",
              ].map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <span className="text-purple-400 mr-4">▹</span>
                  <p className="text-gray-300">{point}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Load Balancer",
                "Splunk Logs",
                "Actuators",
                "Data Structures",
                "Algorithms",
                "Threading",
                "Synchronization",
                "Exception Handling",
                "3rd Party Integration",
              ].map((tech, index) => (
                <span
                  key={index}
                  className="bg-purple-900 px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* RCS Tech LLP Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-800 p-8 rounded-xl shadow-xl"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div>
                <h3 className="text-2xl font-bold text-purple-400">
                  RCS Tech LLP
                </h3>
                <p className="text-gray-400">Full Stack Developer</p>
              </div>
              <p className="text-gray-400">10/2024 - 02/2025</p>
            </div>

            <div className="space-y-4">
              {[
                "Designing and implementing key modules for the RBL Banking System, aimed at streamlining financial operations and enhancing customer experience",
                "Developed robust and secure microservices using Spring Boot, adhering to industry standards for modularity and scalability",
                "Designed database schemas and optimized queries for MySQL ensuring efficient data retrieval and storage",
                "Built efficient JOIN queries to fetch and aggregate data across multiple tables, optimizing performance for complex business requirements",
                "Used JPA for mapping Java objects to database tables, streamlining database operations and enhancing code maintainability",
                "Implemented comprehensive email notification system using Spring Email Service for real-time transaction alerts and user communications",
                "Integrated automated email alerts throughout the application for critical events, enhancing user engagement and system monitoring",
              ].map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <span className="text-purple-400 mr-4">▹</span>
                  <p className="text-gray-300">{point}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Spring Boot",
                "Microservices",
                "MySQL",
                "JPA",
                "REST APIs",
              ].map((tech, index) => (
                <span
                  key={index}
                  className="bg-purple-900 px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="projects" className="py-20 px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            {
              title: "PayPal Payment Integration System",
              company: "HulkHire Technologies - Internship",
              period: "09/2024 - 10/2024",
              description: [
                "Spearheaded the integration of PayPal Payment Gateway with enhanced Spring Boot microservices architecture",
                "Integrated OAuth mechanism for secure authentication and authorization",
                "Achieved 98% code quality rating using SonarLint and maintaining industry best practices",
                "Accelerated development by 40% using GitHub Copilot",
              ],
              tech: [
                "Spring Boot",
                "PayPal API",
                "OAuth",
                "SonarLint",
                "Microservices",
              ],
              contact: "tausiefs@hulkhiretech.com",
            },
            {
              title: "Stripe Payment Integration System",
              company: "HulkHire Technologies - Internship",
              period: "07/2024 - 09/2024",
              description: [
                "Developed and deployed scalable Stripe payment integration system for Toycuddle.com",
                "Improved API interactions by 25% through custom exception handling",
                "Reduced transaction discrepancies by 40% through automated reconciliation",
                "Optimized architecture using Factory and Singleton patterns",
              ],
              tech: [
                "Spring Boot",
                "Stripe API",
                "REST",
                "Design Patterns",
                "Gson",
              ],
              contact: "7842717511",
            },
            {
              title: "Brain Tumor Detector",
              description: [
                "Developed an advanced CNN model for medical imaging analysis",
                "Implemented U-Net architecture for precise tumor segmentation",
                "Achieved high accuracy in tumor detection and classification",
              ],
              tech: ["Python", "TensorFlow", "CNN", "U-Net", "Medical Imaging"],
            },
          ].map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-gray-800 p-6 rounded-xl"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              {project.company && (
                <p className="text-purple-400 mb-2">{project.company}</p>
              )}
              {project.period && (
                <p className="text-gray-400 mb-3">{project.period}</p>
              )}
              <div className="mb-4">
                {project.description.map((point, i) => (
                  <p key={i} className="text-gray-400 mb-2">
                    • {point}
                  </p>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-purple-900 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {project.contact && (
                <p className="mt-4 text-gray-400 text-sm">
                  Contact: {project.contact}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      <section id="skills" className="py-20 px-4 bg-gray-900">
        <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>

        {/* Technical Skills */}
        <div className="max-w-7xl mx-auto mb-16">
          <h3 className="text-2xl font-semibold text-center mb-8">
            Technical Skills
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Java Spring Boot",
              "React.js",
              "Next.js",
              "Microservices",
              "AWS",
              "REST APIs",
              "SQL",
              "Git",
              "Bit Bucket",
              "Email Service",
              "Source Tree",
              "Builders Pattern",
              "Joins",
              "JPA",
              "Agile",
              "Load Balancer",
              "Splunk Logs",
              "Actuators",
              "Data Structures",
              "Algorithms",
              "Threading",
              "Synchronization",
              "Exception Handling",
              "3rd Party Integration",
              "TensorFlow",
              "CNN",
              "Keras",
              "Pandas",
              "Numpy",
              "Matplotlib",
              "U-Net",
              "Deep Learning",
              "Python",
            ].map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-purple-800 to-purple-900 p-4 rounded-lg text-center"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-semibold text-center mb-8">
            Soft Skills
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "Communication",
              "Teamwork",
              "Fast Learner",
              "Problem Solver",
              "Creative Thinker",
              "Continuous Learning",
            ].map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-blue-800 to-blue-900 p-4 rounded-lg text-center"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 bg-gray-900">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            Education Journey
          </h2>
          <div className="space-y-8">
            {[
              {
                degree: "Master in Computer Application (Data Science)",
                institution: "Presidency College (Autonomous)",
                location: "Bengaluru",
                period: "09/2021 - 09/2023",
                achievements: [
                  "Developed a Brain Tumor Detector model using U Net CNN and Python",
                  "Built a Bank Management System using Java Spring",
                ],
                gradient: "from-purple-600 to-purple-800",
              },
              {
                degree: "Bachelor of Computer Application",
                institution: "Presidency College",
                location: "Bengaluru",
                period: "08/2017 - 08/2020",
                achievements: [
                  "Designed a Book Store Application using JSP",
                  "Designed an Inventory Management System using Java",
                ],
                gradient: "from-purple-800 to-purple-900",
              },
            ].map((edu, index) => (
              <motion.div
                key={index}
                initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`bg-gradient-to-r ${
                  edu.gradient
                } p-8 rounded-2xl shadow-xl 
            transform hover:-translate-y-2 transition-all duration-300
            ${index % 2 === 0 ? "rotate-1" : "-rotate-1"}`}
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                  {edu.degree}
                </h3>
                <div className="flex flex-wrap items-center gap-3 mb-6 text-white/90">
                  <span className="font-semibold">{edu.institution}</span>
                  <span className="w-2 h-2 rounded-full bg-white/50" />
                  <span>{edu.location}</span>
                  <span className="w-2 h-2 rounded-full bg-white/50" />
                  <span>{edu.period}</span>
                </div>
                <ul className="space-y-3">
                  {edu.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start text-white/90">
                      <span className="mr-2 text-xl">✦</span>
                      <span className="text-lg">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Let&#39;s Connect</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 p-6 rounded-xl"
            >
              <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
              <div className="space-y-3">
                <p className="flex items-center justify-center gap-2">
                  <FaEnvelope className="text-purple-400" />
                  <a
                    href="mailto:yogeshoffi01@gmail.com"
                    className="hover:text-purple-400"
                  >
                    yogeshoffi01@gmail.com
                  </a>
                </p>
                <p className="flex items-center justify-center gap-2">
                  <FaPhone className="text-purple-400" />
                  <a href="tel:+917760471339" className="hover:text-purple-400">
                    +91 7760471339
                  </a>
                </p>
                <p className="flex items-center justify-center gap-2">
                  <FaMapMarkerAlt className="text-purple-400" />
                  <span>Bengaluru, Karnataka, India</span>
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 p-6 rounded-xl"
            >
              <h3 className="text-xl font-semibold mb-4">Professional Links</h3>
              <div className="space-y-3">
                <p>
                  <a
                    href="https://linkedin.com/in/KBYogesh01"
                    className="hover:text-purple-400 flex items-center justify-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className="text-2xl text-purple-400" /> LinkedIn
                  </a>
                </p>
                <p>
                  <a
                    href="https://github.com/yogeshkumarb01?tab=repositories"
                    className="hover:text-purple-400 flex items-center justify-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="text-2xl text-purple-400" /> GitHub
                  </a>
                </p>
                <p>
                  <a
                    href="https://doi.org/10.1109/ICACCTech61146.2023.00049"
                    className="hover:text-purple-400 flex items-center justify-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFileAlt className="text-purple-400" /> Research
                    Publication
                  </a>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Portfolio;
