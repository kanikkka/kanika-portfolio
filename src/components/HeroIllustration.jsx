import React, { useState } from "react";
import { motion } from "framer-motion";

export default function HeroIllustration() {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      animate={{ scale: hovered ? 1.03 : 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="relative w-full max-w-[420px] mx-auto select-none cursor-pointer"
      aria-label="Original animated geometric digital companion illustration"
    >
      {/* Ambient Radial Aura */}
      <div className="absolute inset-8 rounded-full bg-[#B8E3E9]/45 dark:bg-[#1B7D8C]/25 blur-3xl pointer-events-none" />

      <svg
        viewBox="0 0 420 420"
        className="relative z-10 w-full h-auto drop-shadow-sm"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#B8E3E9" stopOpacity="0.6" />
            <stop offset="65%" stopColor="#1B7D8C" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#0A1D2B" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="visorGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0A1D2B" />
            <stop offset="100%" stopColor="#13334A" />
          </linearGradient>
          <linearGradient id="shellGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F7FAFA" />
            <stop offset="100%" stopColor="#B8E3E9" />
          </linearGradient>
        </defs>

        {/* Soft Halo */}
        <circle cx="210" cy="210" r="175" fill="url(#coreGlow)" />

        {/* Outer Orbital Ring */}
        <g className="animate-orbit">
          <circle
            cx="210"
            cy="210"
            r="164"
            stroke="#1B7D8C"
            strokeOpacity="0.35"
            strokeWidth="1.25"
            strokeDasharray="6 8"
          />
          <circle cx="210" cy="46" r="5.5" fill="#1B7D8C" />
          <circle cx="374" cy="210" r="4" fill="#B8E3E9" stroke="#1B7D8C" strokeWidth="1.5" />
          <polygon points="46,210 52,204 58,210 52,216" fill="#1B7D8C" />
        </g>

        {/* Inner Tilted Orbital Ellipse */}
        <g className="animate-orbit-reverse">
          <ellipse
            cx="210"
            cy="210"
            rx="132"
            ry="118"
            transform="rotate(-18 210 210)"
            stroke="#1B7D8C"
            strokeOpacity="0.45"
            strokeWidth="1.5"
          />
          <circle cx="102" cy="142" r="4.5" fill="#1B7D8C" />
          <circle cx="322" cy="274" r="6" fill="#B8E3E9" stroke="#0A1D2B" strokeWidth="1.5" />
        </g>

        {/* Twinkling Four-Point Geometric Stars */}
        <g className="animate-pulse-soft" fill="#1B7D8C">
          <path d="M84 82L87 91L96 94L87 97L84 106L81 97L72 94L81 91L84 82Z" />
          <path d="M336 96L338 102L344 104L338 106L336 112L334 106L328 104L334 102L336 96Z" />
          <path d="M326 320L329 328L337 331L329 334L326 342L323 334L315 331L323 328L326 320Z" />
          <path d="M88 310L90 316L96 318L90 320L88 326L86 320L80 318L86 316L88 310Z" />
        </g>

        {/* Floating Cute & Sophisticated Digital Companion */}
        <g className="animate-float-slow">
          {/* Antenna / Logic Node */}
          <line
            x1="210"
            y1="104"
            x2="210"
            y2="128"
            stroke="#1B7D8C"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle
            cx="210"
            cy="98"
            r="7"
            fill={hovered ? "#B8E3E9" : "#1B7D8C"}
            stroke="#0A1D2B"
            strokeWidth="2"
          />

          {/* Side Ear Pods */}
          <rect
            x="118"
            y="186"
            width="14"
            height="36"
            rx="7"
            fill="#1B7D8C"
            stroke="#0A1D2B"
            strokeWidth="2"
          />
          <rect
            x="288"
            y="186"
            width="14"
            height="36"
            rx="7"
            fill="#1B7D8C"
            stroke="#0A1D2B"
            strokeWidth="2"
          />

          {/* Main Head Chassis */}
          <rect
            x="130"
            y="128"
            width="160"
            height="132"
            rx="54"
            fill="url(#shellGrad)"
            stroke="#0A1D2B"
            strokeWidth="2.5"
          />

          {/* Inner Screen Visor */}
          <rect
            x="148"
            y="150"
            width="124"
            height="86"
            rx="34"
            fill="url(#visorGrad)"
            stroke="#1B7D8C"
            strokeWidth="2"
          />

          {/* Expressive Glowing Eyes */}
          <g
            transform={`translate(${hovered ? 3 : 0}, ${hovered ? -2 : 0})`}
            className="transition-transform duration-300"
          >
            {/* Left Eye */}
            <circle cx="184" cy="190" r="11" fill="#B8E3E9" />
            <circle cx="187" cy="187" r="3.5" fill="#F7FAFA" />

            {/* Right Eye */}
            <circle cx="236" cy="190" r="11" fill="#B8E3E9" />
            <circle cx="239" cy="187" r="3.5" fill="#F7FAFA" />

            {/* Subtle Rosy-Teal Cheeks */}
            <ellipse cx="169" cy="204" rx="6" ry="3" fill="#1B7D8C" fillOpacity="0.65" />
            <ellipse cx="251" cy="204" rx="6" ry="3" fill="#1B7D8C" fillOpacity="0.65" />

            {/* Gentle Smile Arc */}
            <path
              d="M202 206C205.5 211 214.5 211 218 206"
              stroke="#B8E3E9"
              strokeWidth="2.6"
              strokeLinecap="round"
            />
          </g>

          {/* Minimal Geometric Torso / Collar */}
          <path
            d="M172 272C172 264.268 178.268 258 186 258H234C241.732 258 248 264.268 248 272V284C248 292.837 240.837 300 232 300H188C179.163 300 172 292.837 172 284V272Z"
            fill="#F7FAFA"
            stroke="#0A1D2B"
            strokeWidth="2.2"
          />
          {/* Teal Tie / Core Diamond */}
          <polygon points="210,268 218,279 210,290 202,279" fill="#1B7D8C" />

          {/* Floating Little Hands */}
          <circle
            cx="148"
            cy="278"
            r="9"
            fill="#B8E3E9"
            stroke="#0A1D2B"
            strokeWidth="2"
          />
          <circle
            cx="272"
            cy="278"
            r="9"
            fill="#B8E3E9"
            stroke="#0A1D2B"
            strokeWidth="2"
          />
        </g>

        {/* Bottom Subtle Shadow */}
        <ellipse cx="210" cy="336" rx="54" ry="8" fill="#1B7D8C" fillOpacity="0.2" />
      </svg>
    </motion.div>
  );
}
