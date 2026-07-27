import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, GraduationCap, Calendar, CheckCircle2 } from "lucide-react";

export default function Writing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="writing"
      className="section-padding px-4 md:px-8 max-w-5xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mb-12"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-white mb-3">
          Credentials<span className="text-gradient">.</span>
        </h2>
        <p className="text-white/50 text-lg font-light max-w-xl">
          Certifications & Academic Background.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Certificate Card */}
        <div className="glass rounded-2xl p-8 group hover:border-amber-500/20 transition-colors duration-500 relative overflow-hidden flex flex-col justify-between">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
                <Award size={24} />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-amber-400/80 font-semibold">
                  Certification
                </span>
                <h3 className="text-xl font-heading font-bold text-white">
                  Certified Frontend Developer (React)
                </h3>
              </div>
            </div>
            <p className="text-white/60 font-light text-base mb-4 leading-relaxed">
              Certified by HackerRank verifying advanced proficiency in React.js, component architecture, state management, and modern JavaScript.
            </p>
          </div>
          <div className="relative z-10 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-white/40 font-mono">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-emerald-400" />
              ID: 3EF0D8C4AF76
            </span>
            <span className="px-2.5 py-1 rounded-full bg-white/[0.04] text-amber-300">
              HackerRank
            </span>
          </div>
        </div>

        {/* Education Card */}
        <div className="glass rounded-2xl p-8 group hover:border-amber-500/20 transition-colors duration-500 relative overflow-hidden flex flex-col justify-between">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400">
                <GraduationCap size={24} />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-sky-400/80 font-semibold">
                  Education
                </span>
                <h3 className="text-xl font-heading font-bold text-white">
                  Bachelor of Technology (B.Tech)
                </h3>
              </div>
            </div>
            <p className="text-white/70 font-medium text-base mb-1">
              Punjab Technical University
            </p>
            <p className="text-white/50 font-light text-sm mb-4">
              7.27 CGPA
            </p>
          </div>
          <div className="relative z-10 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-white/40 font-mono">
            <span className="flex items-center gap-1.5">
              <Calendar size={13} />
              Jun 2016 — Oct 2020
            </span>
            <span className="px-2.5 py-1 rounded-full bg-white/[0.04] text-sky-300">
              B.Tech
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
