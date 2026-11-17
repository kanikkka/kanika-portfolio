import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Mail, Download, GraduationCap, Award, Code2, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";
import HeroIllustration from "../components/HeroIllustration";
import { PERSONAL_INFO, PROJECTS } from "../data/portfolioData";

export default function Home() {
  const featuredProjects = PROJECTS.slice(0, 3);

  const handleDownloadResume = () => {
    const resumeSummary = [
      "KANIKA RAJPUT",
      "Computer Science Engineering Undergraduate | Aspiring Software Engineer & AI/ML Developer",
      `Email: ${PERSONAL_INFO.email}`,
      `GitHub: ${PERSONAL_INFO.github}`,
      `LinkedIn: ${PERSONAL_INFO.linkedin}`,
      "",
      "EDUCATION",
      "- B.Tech — Computer Science Engineering, Chandigarh Group of Colleges, Landran (2024–2028) | CGPA: 8.9",
      "- Intermediate (CBSE, 2023–24) | 91.4%",
      "- Matriculation (CBSE, 2021–22) | 89%",
      "",
      "TRAINING",
      "- AI/ML Trainee — Grazitti Interactive (28-day training): Python, Data preprocessing, Machine learning fundamentals, Model training, Model evaluation",
      "",
      "PROJECTS",
      "- AgriSetu AI: Agricultural marketplace platform with Random Forest crop price prediction, attribute-based buyer matching, and OSRM distance analysis.",
      "- GapFinder AI (In Progress): Evidence-grounded research synthesis and gap discovery platform using RAG, PostgreSQL, Supabase, and Groq.",
      "- EcoLens AI: AI-powered sustainability platform using OCR and Computer Vision for packaging identification and recycling recommendations.",
      "- ModalGuard AI: ML reliability and model evaluation platform with classification metrics and robustness checks.",
      "- BLACKBOX AI: AI software flight recorder and memory engine concept for distributed systems.",
      "- PunjabiMandi.AI: Agricultural mandi price forecasting concept for Punjab farmers.",
      "",
      "ACHIEVEMENTS",
      "- Hack-A-Throne National Hackathon 2026 — Final Submission Round",
      "- Smart India Hackathon 2026 — Pre-Finalist",
      "- Code Nova Hackathon (PARIVARTAN) — 2nd Runner-Up",
      "- GeeksforGeeks — 300+ coding problems solved",
      "- NASSCOM Digital Edge — 97%",
    ].join("\n");

    const blob = new Blob([resumeSummary], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Kanika_Rajput_Resume_Summary.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 lg:pt-20 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-xs sm:text-sm font-semibold tracking-[0.22em] uppercase text-[#1B7D8C] dark:text-[#B8E3E9]"
            >
              HELLO, I&apos;M KANIKA
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.12] text-[#0A1D2B] dark:text-[#F7FAFA]"
            >
              Building{" "}
              <span className="font-cursive font-bold text-5xl sm:text-6xl lg:text-[4.25rem] text-[#1B7D8C] dark:text-[#B8E3E9] px-1">
                thoughtful
              </span>{" "}
              digital experiences.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="text-base sm:text-lg leading-relaxed text-[#0A1D2B]/80 dark:text-[#F7FAFA]/80 max-w-2xl"
            >
              {PERSONAL_INFO.description}
            </motion.p>

            {/* Key Academic & DSA Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.24 }}
              className="flex flex-wrap gap-3 pt-1"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-[#B8E3E9]/45 dark:bg-[#1B7D8C]/20 text-[#0A1D2B] dark:text-[#F7FAFA] border border-[#1B7D8C]/25">
                <GraduationCap className="w-4 h-4 text-[#1B7D8C] dark:text-[#B8E3E9]" />
                {PERSONAL_INFO.degree}
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-[#B8E3E9]/45 dark:bg-[#1B7D8C]/20 text-[#0A1D2B] dark:text-[#F7FAFA] border border-[#1B7D8C]/25">
                <Award className="w-4 h-4 text-[#1B7D8C] dark:text-[#B8E3E9]" />
                {PERSONAL_INFO.cgpa}
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-[#B8E3E9]/45 dark:bg-[#1B7D8C]/20 text-[#0A1D2B] dark:text-[#F7FAFA] border border-[#1B7D8C]/25">
                <Code2 className="w-4 h-4 text-[#1B7D8C] dark:text-[#B8E3E9]" />
                {PERSONAL_INFO.dsaStat}
              </span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.32 }}
              className="flex flex-wrap items-center gap-4 pt-3"
            >
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#1B7D8C] text-[#F7FAFA] font-semibold text-sm shadow-sm hover:bg-[#0A1D2B] dark:hover:bg-[#B8E3E9] dark:hover:text-[#0A1D2B] transition-all duration-300"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-[#1B7D8C] text-[#0A1D2B] dark:text-[#F7FAFA] font-semibold text-sm hover:bg-[#B8E3E9]/40 dark:hover:bg-[#1B7D8C]/25 transition-all duration-300"
              >
                <Mail className="w-4 h-4 text-[#1B7D8C] dark:text-[#B8E3E9]" />
                <span>Let&apos;s Connect</span>
              </Link>

              <button
                type="button"
                onClick={handleDownloadResume}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-[#0A1D2B]/20 dark:border-[#B8E3E9]/25 text-[#0A1D2B]/85 dark:text-[#F7FAFA]/85 font-medium text-sm hover:border-[#1B7D8C] hover:text-[#1B7D8C] dark:hover:text-[#B8E3E9] transition-all duration-300"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </button>
            </motion.div>
          </div>

          {/* Right Animated Illustration */}
          <div className="lg:col-span-5 flex justify-center">
            <HeroIllustration />
          </div>
        </div>
      </section>

      {/* Selected Engineering Work Preview */}
      <section className="border-t border-[#0A1D2B]/10 dark:border-[#B8E3E9]/15 bg-[#B8E3E9]/20 dark:bg-[#0A1D2B]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="font-cursive text-2xl text-[#1B7D8C] dark:text-[#B8E3E9]">
                featured engineering
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0A1D2B] dark:text-[#F7FAFA] mt-1">
                Selected Projects
              </h2>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1B7D8C] dark:text-[#B8E3E9] hover:underline"
            >
              <span>View all 8 projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <div
                key={project.slug}
                className="group rounded-2xl border border-[#0A1D2B]/10 dark:border-[#B8E3E9]/15 bg-[#F7FAFA] dark:bg-[#0A1D2B]/90 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-[#1B7D8C] hover:shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#1B7D8C] dark:text-[#B8E3E9]">
                      {project.category}
                    </span>
                    <span className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-[#B8E3E9]/50 dark:bg-[#1B7D8C]/25 text-[#0A1D2B] dark:text-[#B8E3E9]">
                      {project.status}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#0A1D2B] dark:text-[#F7FAFA] group-hover:text-[#1B7D8C] dark:group-hover:text-[#B8E3E9] transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-[#0A1D2B]/75 dark:text-[#F7FAFA]/75">
                    {project.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#0A1D2B]/10 dark:border-[#B8E3E9]/10">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs rounded-md bg-[#B8E3E9]/35 dark:bg-[#1B7D8C]/20 text-[#0A1D2B] dark:text-[#F7FAFA]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-sm font-semibold">
                    <Link
                      to={`/projects/${project.slug}`}
                      className="text-[#1B7D8C] dark:text-[#B8E3E9] hover:underline inline-flex items-center gap-1"
                    >
                      <span>Project Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0A1D2B]/70 dark:text-[#F7FAFA]/70 hover:text-[#1B7D8C] dark:hover:text-[#B8E3E9] inline-flex items-center gap-1"
                    >
                      <span>GitHub</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
