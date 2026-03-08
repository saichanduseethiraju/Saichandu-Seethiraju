import { motion } from "framer-motion";
import IronManScene from "./IronManModel";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* 3D Scene */}
      <div className="absolute inset-0 z-0">
        <IronManScene />
      </div>

      {/* Gradient overlays for text readability */}
      <div className="absolute inset-0 z-10" style={{
        background: "linear-gradient(105deg, hsl(220 20% 4% / 0.95) 0%, hsl(220 20% 4% / 0.85) 35%, hsl(220 20% 4% / 0.4) 55%, transparent 70%)"
      }} />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent z-10" />
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background/50 to-transparent z-10" />

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 z-[11] grid-pattern opacity-40" />

      {/* Content */}
      <div className="relative z-20 section-container">
        <div className="max-w-2xl">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "hsl(142 70% 55%)" }} />
              <span className="text-xs font-display tracking-[0.2em] text-primary/90 uppercase">
                Available for Opportunities
              </span>
            </span>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <p className="font-display text-sm tracking-[0.35em] text-muted-foreground mb-3 uppercase">
              AI Engineer & ML Specialist
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-[0.95] mb-2">
              <span className="text-foreground block">SAICHANDU</span>
              <span className="gradient-text block mt-1">SEETHIRAJU</span>
            </h1>
          </motion.div>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="origin-left my-6"
          >
            <div className="h-px w-32 bg-gradient-to-r from-primary via-secondary to-transparent" />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8 max-w-lg font-body"
          >
            Transforming complex data into{" "}
            <span className="text-foreground font-medium">intelligent systems</span> that drive
            real-world impact. Specializing in machine learning, deep learning,
            and scalable AI solutions — from concept to deployment on{" "}
            <span className="text-foreground font-medium">cloud-native infrastructure</span>.
          </motion.p>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.6 }}
            className="flex gap-8 mb-10"
          >
            {[
              { value: "3+", label: "Internships" },
              { value: "5+", label: "Certifications" },
              { value: "MS", label: "AI & Robotics" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-2xl font-bold gradient-text">{stat.value}</p>
                <p className="text-[10px] font-display tracking-[0.2em] text-muted-foreground uppercase mt-0.5">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="group relative px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-display text-sm tracking-[0.15em] uppercase overflow-hidden transition-all duration-300 hover-glow glow-border"
            >
              <span className="relative z-10">Let's Connect</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </a>
            <a
              href="#experience"
              className="px-8 py-3.5 rounded-lg border border-border/60 text-foreground font-display text-sm tracking-[0.15em] uppercase hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
            >
              Explore My Work
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-[9px] font-display tracking-[0.3em] text-muted-foreground uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-primary/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}
