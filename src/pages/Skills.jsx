import React from "react";
import { Code2, Layers, Database, Wrench, Cpu } from "lucide-react";
import PageWrapper from "../components/PageWrapper";
import { SKILL_CATEGORIES } from "../data/portfolioData";

const ICON_MAP = {
  Code2,
  Layers,
  Database,
  Wrench,
  Cpu,
};

export default function Skills() {
  return (
    <PageWrapper>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-3xl mb-14">
          <span className="font-cursive text-2xl text-[#1B7D8C] dark:text-[#B8E3E9]">
            technical toolkit
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#0A1D2B] dark:text-[#F7FAFA] mt-1">
            Skills &amp; Core Competencies
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#0A1D2B]/80 dark:text-[#F7FAFA]/80">
            Organized across programming languages, backend and frontend frameworks, relational databases, developer tooling, and computer science fundamentals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILL_CATEGORIES.map((group) => {
            const Icon = ICON_MAP[group.iconName] || Code2;
            return (
              <div
                key={group.category}
                className="rounded-2xl border border-[#0A1D2B]/10 dark:border-[#B8E3E9]/15 bg-[#F7FAFA] dark:bg-[#1B7D8C]/10 p-6 sm:p-8 transition-all duration-300 hover:border-[#1B7D8C] hover:shadow-md"
              >
                <div className="flex items-center gap-3.5 mb-6">
                  <div className="w-11 h-11 rounded-xl bg-[#B8E3E9]/55 dark:bg-[#1B7D8C] text-[#0A1D2B] dark:text-[#F7FAFA] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#0A1D2B] dark:text-[#F7FAFA]">
                    {group.category}
                  </h2>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-xl text-sm font-medium border border-[#1B7D8C]/25 bg-[#B8E3E9]/30 dark:bg-[#0A1D2B] text-[#0A1D2B] dark:text-[#F7FAFA] transition-all duration-200 hover:bg-[#1B7D8C] hover:text-[#F7FAFA] hover:border-[#1B7D8C] cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </PageWrapper>
  );
}
