import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Master of Science (MS)",
    field: "Artificial Intelligence and Robotics",
    school: "University of Hertfordshire",
    period: "Sept 2025 — Nov 2027",
    location: "Hatfield, UK",
    coursework: "Machine Learning, Deep Learning, NLP, Computer Vision, Reinforcement Learning, Robotics, MLOps",
  },
  {
    degree: "Bachelor of Technology (BTech)",
    field: "Computer Science (AI & ML)",
    school: "Vignana Bharathi Institute of Technology",
    period: "2021 — 2025",
    location: "Hyderabad, India",
    coursework: "Data Structures & Algorithms, Machine Learning, AI, Cloud Computing, DBMS, Software Engineering",
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="font-display text-xs tracking-[0.3em] text-primary mb-2 uppercase">Academic</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            MY <span className="gradient-text">EDUCATION</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass-card p-6 hover-glow"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-secondary font-display tracking-wider mb-1">{edu.period}</p>
                  <h3 className="font-heading text-xl font-bold text-foreground">{edu.degree}</h3>
                  <p className="text-primary text-sm font-body mb-1">{edu.field}</p>
                  <p className="text-sm text-muted-foreground font-body mb-3">
                    {edu.school} — {edu.location}
                  </p>
                  <p className="text-xs text-muted-foreground font-body leading-relaxed">
                    <span className="text-foreground/70 font-medium">Coursework:</span> {edu.coursework}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
