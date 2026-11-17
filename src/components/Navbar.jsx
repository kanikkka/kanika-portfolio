import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import BulbThemeSwitcher from "./BulbThemeSwitcher";

const NAV_ITEMS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Skills", path: "/skills" },
  { label: "Projects", path: "/projects" },
  { label: "Experience", path: "/experience" },
  { label: "Certifications", path: "/certifications" },
  { label: "Achievements", path: "/achievements" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar({ isDark, onToggleTheme }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#0A1D2B]/10 dark:border-[#B8E3E9]/15 bg-[#F7FAFA]/90 dark:bg-[#0A1D2B]/90 backdrop-blur-md transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Monogram */}
        <Link
          to="/"
          className="flex items-center gap-2.5 group focus:outline-none"
          onClick={() => setMobileOpen(false)}
        >
          <span className="w-9 h-9 rounded-xl bg-[#0A1D2B] dark:bg-[#1B7D8C] text-[#F7FAFA] flex items-center justify-center font-serif font-bold text-lg tracking-tight transition-transform duration-300 group-hover:scale-105">
            KR
          </span>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-lg leading-none text-[#0A1D2B] dark:text-[#F7FAFA]">
              Kanika Rajput
            </span>
            <span className="font-cursive text-sm text-[#1B7D8C] dark:text-[#B8E3E9] leading-tight">
              software &amp; ai/ml
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Main Navigation">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `relative px-3.5 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                  isActive
                    ? "text-[#1B7D8C] dark:text-[#B8E3E9]"
                    : "text-[#0A1D2B]/75 dark:text-[#F7FAFA]/75 hover:text-[#0A1D2B] dark:hover:text-[#F7FAFA]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>{item.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-[#1B7D8C] dark:bg-[#B8E3E9]"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Right Controls: Bulb Theme Switcher + Mobile Hamburger */}
        <div className="flex items-center gap-3">
          <BulbThemeSwitcher isDark={isDark} onToggle={onToggleTheme} />

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2 rounded-lg border border-[#0A1D2B]/15 dark:border-[#B8E3E9]/20 text-[#0A1D2B] dark:text-[#F7FAFA] hover:bg-[#B8E3E9]/30 dark:hover:bg-[#1B7D8C]/20 transition-colors"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Navigation */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            aria-label="Mobile Navigation"
            className="lg:hidden overflow-hidden border-t border-[#0A1D2B]/10 dark:border-[#B8E3E9]/15 bg-[#F7FAFA] dark:bg-[#0A1D2B]"
          >
            <div className="px-4 py-4 flex flex-col gap-1.5">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/"}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-[#1B7D8C] text-[#F7FAFA]"
                        : "text-[#0A1D2B]/80 dark:text-[#F7FAFA]/80 hover:bg-[#B8E3E9]/30 dark:hover:bg-[#1B7D8C]/20"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
