import React from "react";
import { Award, ShieldCheck } from "lucide-react";
import PageWrapper from "../components/PageWrapper";
import { CERTIFICATIONS } from "../data/portfolioData";

export default function Certifications() {
  return (
    <PageWrapper>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-3xl mb-14">
          <span className="font-cursive text-2xl text-[#1B7D8C] dark:text-[#B8E3E9]">
            verified learning milestones
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#0A1D2B] dark:text-[#F7FAFA] mt-1">
            Certifications
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#0A1D2B]/80 dark:text-[#F7FAFA]/80">
            Completed credentials across machine learning, Python for data science, cloud operations, Linux systems, and generative AI fundamentals.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, index) => (
            <div
              key={`${cert.title}-${index}`}
              className="group rounded-2xl border border-[#0A1D2B]/10 dark:border-[#B8E3E9]/15 bg-[#F7FAFA] dark:bg-[#1B7D8C]/10 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-[#1B7D8C] hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#B8E3E9]/55 dark:bg-[#0A1D2B] text-[#1B7D8C] dark:text-[#B8E3E9] flex items-center justify-center">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-[#1B7D8C] dark:text-[#B8E3E9]">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Completed</span>
                  </span>
                </div>

                <h2 className="font-serif text-xl font-bold text-[#0A1D2B] dark:text-[#F7FAFA] group-hover:text-[#1B7D8C] dark:group-hover:text-[#B8E3E9] transition-colors">
                  {cert.title}
                </h2>
              </div>

              <div className="mt-6 pt-4 border-t border-[#0A1D2B]/10 dark:border-[#B8E3E9]/10">
                <p className="text-xs uppercase tracking-wider text-[#0A1D2B]/60 dark:text-[#F7FAFA]/60">
                  Issuing Organization
                </p>
                <p className="mt-0.5 text-sm font-semibold text-[#0A1D2B] dark:text-[#F7FAFA]">
                  {cert.issuer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}
