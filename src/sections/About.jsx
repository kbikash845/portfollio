import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  MapPin,
  Code2,
  Globe,
  Award,
  GraduationCap,
  CheckCircle2,
} from "lucide-react";

const techGroups = [
  {
    label: "FRONTEND",
    accent: "amber",
    count: "87",
    items: [
      { name: "React", dotColor: "bg-sky-400" },
      { name: "Next.js", dotColor: "bg-white" },
      { name: "TypeScript", dotColor: "bg-blue-400" },
      { name: "React Native", dotColor: "bg-cyan-400" },
      { name: "Redux", dotColor: "bg-purple-400" },
      { name: "Tailwind", dotColor: "bg-teal-400" },
      { name: "Material UI", dotColor: "bg-blue-500" },
    ],
  },
  {
    label: "BACKEND",
    accent: "sky",
    count: "85",
    items: [
      { name: "Node.js", dotColor: "bg-emerald-400" },
      { name: "Go (Golang)", dotColor: "bg-cyan-300" },
      { name: "Python", dotColor: "bg-amber-300" },
      { name: "REST APIs", dotColor: "bg-orange-400" },
      { name: "Firebase", dotColor: "bg-yellow-400" },
    ],
  },
  {
    label: "DATABASE",
    accent: "emerald",
    count: "84",
    items: [
      { name: "PostgreSQL", dotColor: "bg-blue-400" },
      { name: "MongoDB", dotColor: "bg-emerald-500" },
      { name: "Firebase", dotColor: "bg-amber-400" },
      { name: "MySQL", dotColor: "bg-sky-400" },
    ],
  },
  {
    label: "TOOLING",
    accent: "violet",
    count: "86",
    items: [
      { name: "Git", dotColor: "bg-red-400" },
      { name: "GitHub", dotColor: "bg-white" },
      { name: "Bitbucket", dotColor: "bg-blue-500" },
      { name: "Jira", dotColor: "bg-blue-400" },
      { name: "VS Code", dotColor: "bg-sky-400" },
      { name: "Google Maps API", dotColor: "bg-emerald-400" },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
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
          About<span className="text-gradient">.</span>
        </h2>
        <p className="text-white/50 text-lg font-light max-w-xl">
          Skills, Location, Education & Certifications.
        </p>
      </motion.div>

      {/* Bento Grid */}
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-3 gap-5"
      >
        {/* Tech Stack Card — spans 2 cols */}
        <motion.div
          variants={cardVariants}
          className="glass rounded-2xl p-6 md:p-8 md:col-span-2 group hover:border-amber-500/20 transition-colors duration-500 relative overflow-hidden flex flex-col justify-between"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-6">
              <Code2 size={18} className="text-amber-400" />
              <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider font-mono">
                TECH STACK
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {techGroups.map((group) => (
                <div
                  key={group.label}
                  className="rounded-xl border border-white/[0.06] bg-black/40 p-4 relative"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.8)]" />
                      <span className="text-xs font-semibold uppercase tracking-wider text-white/80 font-heading">
                        {group.label}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-white/30">
                      {group.count}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {group.items.map((tech) => (
                      <motion.div
                        key={tech.name}
                        whileHover={{ y: -1, scale: 1.02 }}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] hover:border-amber-400/30 hover:bg-white/[0.08] transition-all duration-300 cursor-default"
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${tech.dotColor}`}
                        />
                        <span className="text-xs text-white/90 font-medium">
                          {tech.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Location Card — spans 1 col */}
        <motion.div
          variants={cardVariants}
          className="glass rounded-2xl p-8 flex flex-col items-center justify-center group hover:border-amber-500/20 transition-colors duration-500 relative overflow-hidden"
        >
          <Globe className="absolute -right-8 -bottom-8 w-44 h-44 text-white/[0.03] group-hover:text-amber-500/10 transition-colors duration-500 rotate-12" />
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative z-10 text-center">
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            >
              <MapPin size={32} className="text-amber-400 mx-auto mb-4" />
            </motion.div>
            <h3 className="text-3xl font-heading font-extrabold text-white mb-2">
              Delhi
            </h3>
            <p className="text-white/50 text-sm">Available for remote work</p>
          </div>
        </motion.div>

        {/* Education Card — spans 2 cols */}
        <motion.div
          variants={cardVariants}
          className="glass rounded-2xl p-6 md:p-8 md:col-span-2 group hover:border-amber-500/20 transition-colors duration-500 relative overflow-hidden flex flex-col justify-between"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap size={18} className="text-amber-400" />
              <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider font-mono">
                EDUCATION
              </span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <h3 className="text-xl md:text-2xl font-heading font-bold text-white mb-1">
                  Punjab Technical University
                </h3>
                <p className="text-white/60 text-sm font-light">
                  Bachelor of Technology (B.Tech) · 7.27 CGPA
                </p>
              </div>
              <span className="text-white/40 text-xs font-mono shrink-0">
                Jun 2016 — Oct 2020
              </span>
            </div>
          </div>
        </motion.div>

        {/* Certificate Card — spans 1 col */}
        <motion.div
          variants={cardVariants}
          className="glass rounded-2xl p-6 md:p-8 group hover:border-amber-500/20 transition-colors duration-500 relative overflow-hidden flex flex-col justify-between"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <Award size={18} className="text-amber-400" />
              <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider font-mono">
                CERTIFICATE
              </span>
            </div>
            <h3 className="text-lg font-heading font-bold text-white mb-1">
              Certified Frontend Developer (React)
            </h3>
            <p className="text-white/60 text-sm mb-3">HackerRank</p>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.04] text-[11px] font-mono text-white/40 border border-white/[0.06]">
              <CheckCircle2 size={12} className="text-emerald-400" />
              ID: 3EF0D8C4AF76
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
