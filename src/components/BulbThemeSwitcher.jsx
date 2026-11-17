import React from "react";
import { motion } from "framer-motion";

export default function BulbThemeSwitcher({ isDark, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to Crisp Off-White theme" : "Switch to Midnight Navy theme"}
      className="group relative flex items-center justify-center w-11 h-11 rounded-full border border-[#1B7D8C]/30 bg-[#B8E3E9]/25 dark:bg-[#0A1D2B] dark:border-[#B8E3E9]/30 transition-all duration-300 hover:border-[#1B7D8C] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B7D8C]"
    >
      {/* Subtle Ambient Glow */}
      <motion.span
        animate={{
          scale: isDark ? [1, 1.15, 1] : [1, 1.25, 1],
          opacity: isDark ? 0.35 : 0.75,
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute inset-0 rounded-full blur-md pointer-events-none ${
          isDark ? "bg-[#1B7D8C]" : "bg-[#B8E3E9]"
        }`}
      />

      {/* Custom SVG Hanging Bulb */}
      <svg
        viewBox="0 0 36 36"
        className="relative z-10 w-6 h-6 transition-transform duration-300 group-hover:scale-110"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Cord */}
        <line
          x1="18"
          y1="1"
          x2="18"
          y2="6"
          stroke={isDark ? "#B8E3E9" : "#0A1D2B"}
          strokeWidth="1.8"
          strokeLinecap="round"
        />

        {/* Light rays when lit (Light Mode) */}
        <g
          className={`transition-opacity duration-300 ${
            isDark ? "opacity-25" : "opacity-100"
          }`}
          stroke="#1B7D8C"
          strokeWidth="1.6"
          strokeLinecap="round"
        >
          <line x1="6" y1="16" x2="8.5" y2="16" />
          <line x1="27.5" y1="16" x2="30" y2="16" />
          <line x1="8.8" y1="9.5" x2="10.6" y2="11.3" />
          <line x1="25.4" y1="11.3" x2="27.2" y2="9.5" />
          <line x1="9.2" y1="23" x2="11" y2="21.2" />
          <line x1="25" y1="21.2" x2="26.8" y2="23" />
        </g>

        {/* Bulb Glass */}
        <path
          d="M12.5 16.5C12.5 13.4624 14.9624 11 18 11C21.0376 11 23.5 13.4624 23.5 16.5C23.5 18.65 22.25 20.5 20.5 21.45V23.5H15.5V21.45C13.75 20.5 12.5 18.65 12.5 16.5Z"
          fill={isDark ? "#1B7D8C" : "#B8E3E9"}
          fillOpacity={isDark ? "0.28" : "0.85"}
          stroke={isDark ? "#B8E3E9" : "#0A1D2B"}
          strokeWidth="1.7"
          strokeLinejoin="round"
        />

        {/* Filament */}
        <path
          d="M16.5 18.5L17.4 16L18.6 16L19.5 18.5"
          stroke={isDark ? "#B8E3E9" : "#1B7D8C"}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Socket Cap */}
        <rect
          x="15.2"
          y="23.5"
          width="5.6"
          height="2.4"
          rx="1"
          fill={isDark ? "#B8E3E9" : "#0A1D2B"}
        />
        <path
          d="M16.3 27.2H19.7"
          stroke={isDark ? "#B8E3E9" : "#0A1D2B"}
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
}
