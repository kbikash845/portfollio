import {
  motion,
  useInView,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, ChevronRight } from "lucide-react";

const PROJECTS = [
  {
    id: 1,
    title: "Large-Scale Micro-Frontend Operations Platform",
    description:
      "A high-throughput enterprise platform built with micro-frontend architecture combining React.js on the frontend and Go (Golang) + PostgreSQL microservices on the backend.",
    features: [
      "Engineered Outlet Setup, Multi-Geofencing, and Region Management serving zones with high spatial precision.",
      "Integrated Google Maps & Places APIs for real-time location management, delivery boundaries, and interactive map views.",
      "Optimized performance using Redux Toolkit, RESTful APIs, lazy loading, and efficient re-rendering strategies.",
    ],
    tech: [
      "React.js",
      "Go (Golang)",
      "PostgreSQL",
      "Micro-frontends",
      "Redux Toolkit",
      "Google Maps API",
    ],
    link: "#",
    github: "#",
  },
  {
    id: 2,
    title: "Real-Time Driver Tracking & AI Streaming App",
    description:
      "A cross-platform web and mobile application suite featuring real-time driver tracking, dashcam live streaming, and AI-powered fault code diagnosis.",
    features: [
      "Integrated Google Maps APIs for real-time driver location tracking, route visualization, and smart location search with auto-suggestions.",
      "Developed dashcam live streaming in React Native and an AI-powered fault code detection system using REST APIs.",
      "Boosted app performance by 20% with Redux Toolkit and implemented multi-language (i18n) support (Spanish, French, Russian).",
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
    link: "#",
    github: "#",
  },
  {
    id: 3,
    title: "Responsive Web Apps & API Integration Suite",
    description:
      "Modular, user-friendly web applications built with modern frontend frameworks, structured state management, and optimized UI rendering.",
    features: [
      "Crafted responsive user interfaces using React, Next.js, TypeScript, Material UI, and Tailwind CSS.",
      "Integrated Firebase services, REST APIs, and client-side optimization patterns to enhance user experience.",
    ],
    tech: [
      "React",
      "Next.js",
      "TypeScript",
      "Redux",
      "Firebase",
      "Material UI",
      "Tailwind CSS",
    ],
    link: "#",
    github: "#",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

function ProjectCard({ project, variants }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      variants={variants}
      onMouseMove={handleMouseMove}
      className="glass relative group rounded-2xl overflow-hidden hover:border-amber-500/20 transition-colors duration-500"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-500 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(245, 158, 11, 0.05),
              transparent 80%
            )
          `,
        }}
      />

      {/* Content - Aggressively reduced padding */}
      <div className="relative z-10 p-6 md:p-8">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
          <h3 className="text-2xl font-heading font-bold text-white group-hover:text-amber-400 transition-colors duration-300">
            {project.title}
          </h3>

          {/* Action Buttons - Smaller */}
          <div className="flex items-center gap-3 shrink-0">
            {project.github !== "#" && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.08] hover:border-white/[0.1] text-white/50 hover:text-white transition-all duration-300"
                aria-label="Source Code"
              >
                <Github size={18} />
              </a>
            )}
            {project.link !== "#" && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 hover:bg-amber-500 hover:text-black transition-all duration-300 font-semibold text-xs uppercase tracking-wide"
              >
                Live Demo
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>

        <p className="text-white/60 text-base leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Key Features Grid - Tighter Spacing, smaller fonts */}
        <div className="space-y-3 mb-6">
          {project.features.map((feature, i) => (
            <div key={i} className="flex gap-3 items-start group/feature">
              <div className="mt-1 shrink-0">
                <ChevronRight
                  size={16}
                  className="text-amber-500/40 group-hover/feature:text-amber-500 transition-colors duration-300"
                />
              </div>
              <p className="text-white/50 group-hover/feature:text-white/70 transition-colors duration-300 leading-relaxed font-light text-sm">
                {feature}
              </p>
            </div>
          ))}
        </div>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1.5 rounded-full bg-black/40 border border-white/[0.05] text-xs font-medium text-white/40 group-hover:text-amber-400 group-hover:border-amber-400/20 transition-all duration-500"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="projects"
      className="section-padding px-4 md:px-8 max-w-5xl mx-auto"
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
          Selected <span className="text-gradient">Works.</span>
        </h2>
        <p className="text-white/50 text-lg font-light max-w-xl">
          Deep dives into complex architectures I've built.
        </p>
      </motion.div>

      {/* Project cards container */}
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="space-y-6"
      >
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            variants={cardVariants}
          />
        ))}
      </motion.div>
    </section>
  );
}
