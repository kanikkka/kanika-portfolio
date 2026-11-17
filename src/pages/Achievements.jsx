import React from "react";
import { Trophy } from "lucide-react";
import PageWrapper from "../components/PageWrapper";
import { ACHIEVEMENTS } from "../data/portfolioData";

export default function Achievements() {
  return (
    <PageWrapper>
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-3xl mb-14">
          <span className="font-cursive text-2xl text-[#1B7D8C] dark:text-[#B8E3E9]">
            hackathons &amp; problem solving
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#0A1D2B] dark:text-[#F7FAFA] mt-1">
            Achievements
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#0A1D2B]/80 dark:text-[#F7FAFA]/80">
            Recognitions across national hackathons, competitive problem-solving platforms, and technical assessments.
          </p>
        </div>

        <div className="relative border-l-2 border-[#1B7D8C]/40 ml-4 sm:ml-6 space-y-8">
          {ACHIEVEMENTS.map((item, idx) => (
            <div key={idx} className="relative pl-8 sm:pl-10">
              <span className="absolute -left-[13px] top-6 w-6 h-6 rounded-full bg-[#1B7D8C] text-[#F7FAFA] flex items-center justify-center ring-4 ring-[#F7FAFA] dark:ring-[#0A1D2B]">
                <Trophy className="w-3.5 h-3.5" />
              </span>

              <div className="rounded-2xl border border-[#0A1D2B]/10 dark:border-[#B8E3E9]/15 bg-[#F7FAFA] dark:bg-[#1B7D8C]/10 p-6 sm:p-7 transition-all hover:border-[#1B7D8C]">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#0A1D2B] dark:text-[#F7FAFA]">
                    {item.title}
                  </h2>
                  <span className="px-3.5 py-1 rounded-full text-xs sm:text-sm font-semibold bg-[#1B7D8C] text-[#F7FAFA]">
                    {item.highlight}
                  </span>
                </div>
                <p className="mt-2.5 text-sm sm:text-base text-[#0A1D2B]/80 dark:text-[#F7FAFA]/80">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}
