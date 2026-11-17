import React from "react";
import { GraduationCap, Compass, Code, BookOpen, Sparkles } from "lucide-react";
import PageWrapper from "../components/PageWrapper";
import { EDUCATION } from "../data/portfolioData";

const PILLARS = [
  {
    icon: Compass,
    title: "Technical Interests",
    text: "Focused on software development, data science, machine learning, and retrieval-augmented systems that turn structured and unstructured data into practical tools.",
  },
  {
    icon: Code,
    title: "Development Philosophy",
    text: "Prioritize clarity, modular architecture, and honest engineering—ensuring every backend API, ML pipeline, and user interface serves a clear functional purpose.",
  },
  {
    icon: Sparkles,
    title: "Problem-Solving Approach",
    text: "Break complex problems down into testable components, grounded in consistent practice across data structures, algorithms, and systematic model evaluation.",
  },
  {
    icon: BookOpen,
    title: "Learning Mindset",
    text: "Continuously bridging academic computer science foundations with hands-on implementation—from Linux command-line workflows to full-stack AI applications.",
  },
];

export default function About() {
  return (
    <PageWrapper>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* Header */}
        <div className="max-w-3xl">
          <span className="font-cursive text-2xl text-[#1B7D8C] dark:text-[#B8E3E9]">
            get to know me
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#0A1D2B] dark:text-[#F7FAFA] mt-1">
            About Kanika Rajput
          </h1>
          <p className="mt-6 text-lg sm:text-xl leading-relaxed text-[#0A1D2B] dark:text-[#F7FAFA] font-medium">
            I&apos;m Kanika Rajput, a Computer Science Engineering undergraduate who enjoys turning ideas into practical software solutions.
          </p>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#0A1D2B]/80 dark:text-[#F7FAFA]/80">
            I am interested in software development, data science, machine learning and building applications that solve real-world problems.
          </p>
        </div>

        {/* Four Engineering Pillars */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          {PILLARS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-2xl border border-[#0A1D2B]/10 dark:border-[#B8E3E9]/15 bg-[#B8E3E9]/20 dark:bg-[#1B7D8C]/10 p-6 sm:p-8 transition-colors hover:border-[#1B7D8C]"
              >
                <div className="w-11 h-11 rounded-xl bg-[#1B7D8C] text-[#F7FAFA] flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h2 className="font-serif text-xl font-bold text-[#0A1D2B] dark:text-[#F7FAFA]">
                  {item.title}
                </h2>
                <p className="mt-2.5 text-sm sm:text-base leading-relaxed text-[#0A1D2B]/80 dark:text-[#F7FAFA]/80">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>

        {/* Education Timeline */}
        <div className="mt-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-[#0A1D2B] dark:bg-[#1B7D8C] text-[#F7FAFA] flex items-center justify-center">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <span className="font-cursive text-xl text-[#1B7D8C] dark:text-[#B8E3E9] block leading-none">
                academic background
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0A1D2B] dark:text-[#F7FAFA]">
                Education
              </h2>
            </div>
          </div>

          <div className="space-y-4">
            {EDUCATION.map((edu, index) => (
              <div
                key={index}
                className="rounded-2xl border border-[#0A1D2B]/10 dark:border-[#B8E3E9]/15 bg-[#F7FAFA] dark:bg-[#0A1D2B] p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all hover:border-[#1B7D8C]"
              >
                <div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#0A1D2B] dark:text-[#F7FAFA]">
                    {edu.degree}
                  </h3>
                  <p className="mt-1 text-sm sm:text-base text-[#0A1D2B]/75 dark:text-[#F7FAFA]/75">
                    {edu.institution}
                  </p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <span className="px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-[#B8E3E9]/45 dark:bg-[#1B7D8C]/20 text-[#0A1D2B] dark:text-[#F7FAFA]">
                    {edu.period}
                  </span>
                  <span className="px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-[#1B7D8C] text-[#F7FAFA]">
                    {edu.score}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
