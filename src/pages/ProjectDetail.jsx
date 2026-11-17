import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Github, CheckCircle2, Layers } from "lucide-react";
import PageWrapper from "../components/PageWrapper";
import { PROJECTS } from "../data/portfolioData";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return (
      <PageWrapper>
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="font-serif text-3xl font-bold text-[#0A1D2B] dark:text-[#F7FAFA]">
            Project Not Found
          </h1>
          <p className="mt-3 text-[#0A1D2B]/75 dark:text-[#F7FAFA]/75">
            The project page you requested does not exist.
          </p>
          <Link
            to="/projects"
            className="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#1B7D8C] text-[#F7FAFA] font-semibold text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Projects</span>
          </Link>
        </section>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#1B7D8C] dark:text-[#B8E3E9] hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Projects</span>
        </Link>

        <div className="rounded-3xl border border-[#0A1D2B]/10 dark:border-[#B8E3E9]/15 bg-[#F7FAFA] dark:bg-[#1B7D8C]/10 p-7 sm:p-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#1B7D8C] dark:text-[#B8E3E9]">
              {project.category}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#B8E3E9]/60 dark:bg-[#0A1D2B] text-[#0A1D2B] dark:text-[#B8E3E9] border border-[#1B7D8C]/25">
              Status: {project.status}
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#0A1D2B] dark:text-[#F7FAFA]">
            {project.title}
          </h1>

          <p className="mt-5 text-base sm:text-lg leading-relaxed text-[#0A1D2B]/85 dark:text-[#F7FAFA]/85">
            {project.overview}
          </p>

          <div className="mt-7">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#1B7D8C] text-[#F7FAFA] font-semibold text-sm hover:bg-[#0A1D2B] dark:hover:bg-[#B8E3E9] dark:hover:text-[#0A1D2B] transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>View Repository on GitHub</span>
            </a>
          </div>

          {/* Core Features & Capabilities */}
          <div className="mt-10 pt-8 border-t border-[#0A1D2B]/10 dark:border-[#B8E3E9]/15">
            <h2 className="font-serif text-2xl font-bold text-[#0A1D2B] dark:text-[#F7FAFA] mb-5">
              Key Features &amp; Architecture Scope
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 p-4 rounded-xl bg-[#B8E3E9]/25 dark:bg-[#0A1D2B]/80 border border-[#1B7D8C]/15 text-sm sm:text-base text-[#0A1D2B] dark:text-[#F7FAFA]"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#1B7D8C] dark:text-[#B8E3E9] shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="mt-10 pt-8 border-t border-[#0A1D2B]/10 dark:border-[#B8E3E9]/15">
            <div className="flex items-center gap-2 mb-4">
              <Layers className="w-5 h-5 text-[#1B7D8C] dark:text-[#B8E3E9]" />
              <h2 className="font-serif text-2xl font-bold text-[#0A1D2B] dark:text-[#F7FAFA]">
                Technology Stack
              </h2>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-xl text-sm font-medium bg-[#B8E3E9]/45 dark:bg-[#0A1D2B] text-[#0A1D2B] dark:text-[#F7FAFA] border border-[#1B7D8C]/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
