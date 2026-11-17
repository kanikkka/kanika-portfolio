import React from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer className="border-t border-[#0A1D2B]/10 dark:border-[#B8E3E9]/15 bg-[#F7FAFA] dark:bg-[#0A1D2B] transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <Link to="/" className="font-serif font-bold text-xl text-[#0A1D2B] dark:text-[#F7FAFA]">
              Kanika Rajput
            </Link>
            <p className="mt-1.5 text-sm text-[#0A1D2B]/70 dark:text-[#F7FAFA]/70 max-w-md">
              Computer Science Engineering Undergraduate &bull; Aspiring Software Engineer &amp; AI/ML Developer.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-5 text-sm font-medium text-[#0A1D2B]/80 dark:text-[#F7FAFA]/80">
            <Link to="/about" className="hover:text-[#1B7D8C] dark:hover:text-[#B8E3E9] transition-colors">
              About
            </Link>
            <Link to="/skills" className="hover:text-[#1B7D8C] dark:hover:text-[#B8E3E9] transition-colors">
              Skills
            </Link>
            <Link to="/projects" className="hover:text-[#1B7D8C] dark:hover:text-[#B8E3E9] transition-colors">
              Projects
            </Link>
            <Link to="/experience" className="hover:text-[#1B7D8C] dark:hover:text-[#B8E3E9] transition-colors">
              Experience
            </Link>
            <Link to="/contact" className="hover:text-[#1B7D8C] dark:hover:text-[#B8E3E9] transition-colors">
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              aria-label="Email Kanika Rajput"
              className="p-2.5 rounded-full border border-[#0A1D2B]/15 dark:border-[#B8E3E9]/20 text-[#0A1D2B] dark:text-[#F7FAFA] hover:bg-[#1B7D8C] hover:text-[#F7FAFA] hover:border-[#1B7D8C] transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-full border border-[#0A1D2B]/15 dark:border-[#B8E3E9]/20 text-[#0A1D2B] dark:text-[#F7FAFA] hover:bg-[#1B7D8C] hover:text-[#F7FAFA] hover:border-[#1B7D8C] transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-full border border-[#0A1D2B]/15 dark:border-[#B8E3E9]/20 text-[#0A1D2B] dark:text-[#F7FAFA] hover:bg-[#1B7D8C] hover:text-[#F7FAFA] hover:border-[#1B7D8C] transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[#0A1D2B]/10 dark:border-[#B8E3E9]/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#0A1D2B]/60 dark:text-[#F7FAFA]/60">
          <p>&copy; {new Date().getFullYear()} Kanika Rajput. Crafted with precision.</p>
          <p className="font-cursive text-base text-[#1B7D8C] dark:text-[#B8E3E9]">
            Thoughtful engineering, clean design.
          </p>
        </div>
      </div>
    </footer>
  );
}
