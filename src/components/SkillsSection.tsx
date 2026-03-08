import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Programming",
    skills: ["Python", "Java", "C"],
    color: "primary",
  },
  {
    title: "AI & ML",
    skills: ["Machine Learning", "Deep Learning", "NLP", "TensorFlow", "XGBoost", "MobileNetV2"],
    color: "secondary",
  },
  {
    title: "Cloud & Automation",
    skills: ["Google Cloud (GCP)", "UiPath Studio", "RPA", "Vertex AI"],
    color: "primary",
  },
  {
    title: "Data & Tools",
    skills: ["SQL", "NumPy", "Pandas", "Matplotlib"],
    color: "secondary",
  },
];

const certifications = [
  "Google Generative AI — AICTE",
  "UiPath RPA Developer — AICTE",
  "Salesforce Developer — Salesforce",
  "Deep Learning, Python, C — Infosys",
  "Network Essentials, Cybersecurity — Cisco",
];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative grid-pattern">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="font-display text-xs tracking-[0.3em] text-primary mb-2 uppercase">Expertise</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            SKILLS & <span className="gradient-text">CERTIFICATIONS</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 hover-glow"
            >
              <h3 className="font-heading text-lg font-bold text-foreground mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1.5 rounded-md text-xs font-body tracking-wide border ${
                      cat.color === "primary"
                        ? "border-primary/30 text-primary bg-primary/5"
                        : "border-secondary/30 text-secondary bg-secondary/5"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-6"
        >
          <h3 className="font-heading text-lg font-bold text-foreground mb-4">Certifications</h3>
          <div className="grid md:grid-cols-2 gap-3">
            {certifications.map((cert) => (
              <div key={cert} className="flex items-center gap-3 text-sm text-muted-foreground font-body">
                <span className="w-2 h-2 rounded-full bg-secondary flex-shrink-0" />
                {cert}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
