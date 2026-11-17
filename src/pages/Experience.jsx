import React from "react";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";
import PageWrapper from "../components/PageWrapper";
import { EXPERIENCE } from "../data/portfolioData";

export default function Experience() {
  return (
    <PageWrapper>
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-3xl mb-14">
          <span className="font-cursive text-2xl text-[#1B7D8C] dark:text-[#B8E3E9]">
            hands-on industry exposure
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#0A1D2B] dark:text-[#F7FAFA] mt-1">
            Experience &amp; Training
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#0A1D2B]/80 dark:text-[#F7FAFA]/80">
            Structured technical training focused on practical machine learning workflows and Python-driven data preparation.
          </p>
        </div>

        <div className="space-y-8">
          {EXPERIENCE.map((item) => (
            <div
              key={item.organization}
              className="rounded-3xl border border-[#0A1D2B]/10 dark:border-[#B8E3E9]/15 bg-[#F7FAFA] dark:bg-[#1B7D8C]/10 p-7 sm:p-10 transition-all hover:border-[#1B7D8C]"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#0A1D2B]/10 dark:border-[#B8E3E9]/15">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#1B7D8C] text-[#F7FAFA] flex items-center justify-center shrink-0">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="inline-block px-3 py-0.5 rounded-full text-xs font-semibold bg-[#B8E3E9]/55 dark:bg-[#0A1D2B] text-[#0A1D2B] dark:text-[#B8E3E9] mb-1.5">
                      {item.type}
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0A1D2B] dark:text-[#F7FAFA]">
                      {item.role}
                    </h2>
                    <p className="text-base sm:text-lg font-medium text-[#1B7D8C] dark:text-[#B8E3E9]">
                      {item.organization}
                    </p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#B8E3E9]/40 dark:bg-[#0A1D2B] text-sm font-semibold text-[#0A1D2B] dark:text-[#F7FAFA] self-start sm:self-center">
                  <Calendar className="w-4 h-4 text-[#1B7D8C] dark:text-[#B8E3E9]" />
                  <span>{item.duration}</span>
                </div>
              </div>

              <p className="mt-6 text-base leading-relaxed text-[#0A1D2B]/80 dark:text-[#F7FAFA]/80">
                {item.description}
              </p>

              <div className="mt-7">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-[#0A1D2B]/70 dark:text-[#F7FAFA]/70 mb-4">
                  Core Learning Areas
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {item.learningAreas.map((area) => (
                    <div
                      key={area}
                      className="flex items-center gap-2.5 p-3.5 rounded-xl bg-[#B8E3E9]/30 dark:bg-[#0A1D2B] border border-[#1B7D8C]/20 text-sm font-medium text-[#0A1D2B] dark:text-[#F7FAFA]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#1B7D8C] dark:text-[#B8E3E9] shrink-0" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}
