import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Github, ArrowRight } from "lucide-react";
import PageWrapper from "../components/PageWrapper";
import { PROJECTS } from "../data/portfolioData";

const FILTERS = ["All", "Completed", "In Progress", "Concept", "Additional Project"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) =>
          activeFilter === "Concept"
            ? p.status.includes("Concept")
            : p.status === activeFilter
        );

  return (
    <PageWrapper>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-3xl mb-10">
          <span className="font-cursive text-2xl text-[#1B7D8C] dark:text-[#B8E3E9]">
            engineering portfolio
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#0A1D2B] dark:text-[#F7FAFA] mt-1">
            Projects
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#0A1D2B]/80 dark:text-[#F7FAFA]/80">
            A transparent showcase of completed applications, ongoing research platforms, and architectural concepts across AI/ML, data science, and web engineering.
          </p>
        </div>

        {/* Status Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-10" role="group" aria-label="Filter projects by status">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === filter
                  ? "bg-[#1B7D8C] text-[#F7FAFA] shadow-sm"
                  : "bg-[#B8E3E9]/35 dark:bg-[#1B7D8C]/15 text-[#0A1D2B] dark:text-[#F7FAFA] hover:bg-[#B8E3E9]/60 dark:hover:bg-[#1B7D8C]/30"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {filteredProjects.map((project) => (
            <article
              key={project.slug}
              className="group rounded-2xl border border-[#0A1D2B]/10 dark:border-[#B8E3E9]/15 bg-[#F7FAFA] dark:bg-[#1B7D8C]/10 p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-[#1B7D8C] hover:shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#1B7D8C] dark:text-[#B8E3E9]">
                    {project.category}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#B8E3E9]/55 dark:bg-[#0A1D2B] text-[#0A1D2B] dark:text-[#B8E3E9] border border-[#1B7D8C]/20">
                    {project.status}
                  </span>
                </div>

                <h2 className="font-serif text-2xl font-bold text-[#0A1D2B] dark:text-[#F7FAFA] group-hover:text-[#1B7D8C] dark:group-hover:text-[#B8E3E9] transition-colors">
                  {project.title}
                </h2>

                <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#0A1D2B]/80 dark:text-[#F7FAFA]/80">
                  {project.summary}
                </p>

                <ul className="mt-4 space-y-1.5 text-sm text-[#0A1D2B]/75 dark:text-[#F7FAFA]/75">
                  {project.features.slice(0, 3).map((feat) => (
                    <li key={feat} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1B7D8C] dark:bg-[#B8E3E9] mt-2 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-5 border-t border-[#0A1D2B]/10 dark:border-[#B8E3E9]/15">
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-[#B8E3E9]/40 dark:bg-[#0A1D2B] text-[#0A1D2B] dark:text-[#F7FAFA]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3">
                  <Link
                    to={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#1B7D8C] text-[#F7FAFA] text-sm font-semibold hover:bg-[#0A1D2B] dark:hover:bg-[#B8E3E9] dark:hover:text-[#0A1D2B] transition-colors"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-[#0A1D2B]/20 dark:border-[#B8E3E9]/25 text-sm font-semibold text-[#0A1D2B] dark:text-[#F7FAFA] hover:border-[#1B7D8C] hover:text-[#1B7D8C] dark:hover:text-[#B8E3E9] transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}
