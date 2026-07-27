import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Cyberbells ITES Services Pvt. Ltd.",
    location: "Chandigarh",
    role: "Software Engineer",
    period: "Sep 2025 — Present",
    description:
      "Worked on a large-scale operations platform using micro-frontend architecture, contributing to frontend development with React.js and backend services with Go (Golang) and PostgreSQL.",
    bullets: [
      "Developed core modules supporting complex business workflows across multiple outlets and regions.",
      "Developed Location & Region Management features including outlet setup, multi-geofencing, and serving zones.",
      "Integrated Google Maps & Places APIs for map views, delivery boundaries, and real-time location management.",
      "Implemented Redux Toolkit, integrated REST APIs, and optimized performance through lazy loading and efficient rendering.",
      "Contributed to backend API development and database operations using Go (Golang) and PostgreSQL.",
    ],
    tech: [
      "React.js",
      "Go (Golang)",
      "PostgreSQL",
      "Micro-frontends",
      "Redux Toolkit",
      "Google Maps API",
      "REST APIs",
    ],
    current: true,
  },
  {
    company: "Asrit Technologies Pvt. Ltd.",
    location: "Mohali, Chandigarh",
    role: "Frontend Developer",
    period: "March 2024 — August 2025",
    description:
      "Built responsive web and mobile apps using React, React Native, TypeScript, Redux Toolkit, and Material UI with performance optimizations.",
    bullets: [
      "Integrated Google Maps APIs for real-time driver tracking, route visualization, and smart location search with auto-suggestions.",
      "Developed dashcam live streaming in React Native and an AI-powered fault code detection system using REST APIs.",
      "Improved app performance by 20% with Redux Toolkit and implemented multi-language (i18n) support (Spanish, French, Russian).",
    ],
    tech: [
      "React",
      "React Native",
      "TypeScript",
      "Redux Toolkit",
      "Material UI",
      "Google Maps API",
      "AI & i18n",
    ],
    current: false,
  },
  {
    company: "CodeXcelerate",
    location: "Remote / Hybrid",
    role: "Intern — Frontend Developer",
    period: "Feb 2023 — Feb 2024",
    description:
      "Frontend Developer with expertise in building responsive, user-friendly web applications using HTML, CSS, JavaScript, React, Next.js, Redux, Firebase, Bootstrap, and Material UI.",
    bullets: [
      "Skilled in UI optimization, state management, and API integration to enhance user experience and performance.",
      "Built cross-browser responsive interfaces using React, Next.js, Redux, and modern styling libraries.",
    ],
    tech: [
      "HTML/CSS",
      "JavaScript",
      "React",
      "Next.js",
      "Redux",
      "Firebase",
      "Bootstrap",
      "Material UI",
      "Git",
    ],
    current: false,
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="experience"
      className="section-padding px-4 md:px-8 max-w-6xl mx-auto"
    >
      {/* Section heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mb-12"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-white mb-3">
          Experience<span className="text-gradient">.</span>
        </h2>
        <p className="text-white/50 text-lg font-light max-w-xl">
          Where I've worked and what I've built.
        </p>
      </motion.div>

      {/* Timeline */}
      <div ref={ref} className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-amber-500/50 via-amber-500/20 to-amber-500/10" />

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: i * 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative pl-12 md:pl-20"
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-8 top-8 -translate-x-1/2">
                <div className="w-3 h-3 rounded-full bg-amber-400 shadow-[0_0_12px_rgba(245,158,11,0.6)]" />
              </div>

              {/* Card */}
              <div className="glass rounded-2xl p-6 md:p-8 group hover:border-amber-500/20 transition-colors duration-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Briefcase size={16} className="text-amber-400" />
                        <h3 className="text-xl font-heading font-bold text-white">
                          {exp.company}
                        </h3>
                        <span className="text-white/40 text-xs font-mono">
                          • {exp.location}
                        </span>
                        {exp.current && (
                          <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400 font-medium">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-white/70 font-medium">{exp.role}</p>
                    </div>
                    <span className="text-white/40 text-sm font-mono">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-white/60 font-light leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {exp.bullets && (
                    <ul className="space-y-2 mb-6">
                      {exp.bullets.map((bullet, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 text-sm text-white/50 font-light leading-relaxed"
                        >
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-400/60 mt-2 shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-xs font-medium text-white/50"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
