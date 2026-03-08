import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Generative AI Intern",
    company: "Google Cloud Training (Remote)",
    period: "Jul 2024 — Sept 2024",
    location: "Hyderabad, India",
    highlights: [
      "Designed Generative AI workflows on GCP using Vertex AI, Cloud Run, and Python",
      "Built reproducible Jupyter notebooks and lightweight REST APIs",
      "Applied prompt optimization techniques for enhanced response accuracy",
      "Gained hands-on experience with MLOps and cloud-based AI deployment",
    ],
  },
  {
    title: "RPA Developer Intern",
    company: "UiPath (AICTE Virtual Internship)",
    period: "Apr 2024 — Jun 2024",
    location: "Hyderabad, India",
    highlights: [
      "Designed RPA workflows using UiPath Studio for business process automation",
      "Automated data extraction, validation, and report generation",
      "Applied REFramework concepts for scalable automation solutions",
    ],
  },
  {
    title: "Salesforce Developer Intern",
    company: "Salesforce (Remote)",
    period: "Oct 2024 — Nov 2024",
    location: "Hyderabad, India",
    highlights: [
      "Developed Salesforce apps using Apex, SOQL, and Lightning components",
      "Implemented custom objects, validation rules, and process automation",
      "Wrote and executed unit tests for deployment standards",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="font-display text-xs tracking-[0.3em] text-primary mb-2 uppercase">Career</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            WORK <span className="gradient-text">EXPERIENCE</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent hidden md:block" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex gap-6"
              >
                {/* Timeline dot */}
                <div className="hidden md:flex flex-shrink-0 w-10 h-10 rounded-full bg-muted border-2 border-primary items-center justify-center">
                  <Briefcase className="w-4 h-4 text-primary" />
                </div>

                <div className="glass-card p-6 flex-1 hover-glow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <div>
                      <h3 className="font-heading text-xl font-bold text-foreground">{exp.title}</h3>
                      <p className="text-primary text-sm font-body">{exp.company}</p>
                    </div>
                    <div className="text-right mt-2 md:mt-0">
                      <p className="text-xs text-secondary font-display tracking-wider">{exp.period}</p>
                      <p className="text-xs text-muted-foreground font-body">{exp.location}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="text-sm text-muted-foreground font-body flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
