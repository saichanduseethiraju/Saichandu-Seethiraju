import { motion } from "framer-motion";
import { Brain, Cpu, Cloud, Database } from "lucide-react";

const highlights = [
  { icon: Brain, label: "Machine Learning", desc: "TensorFlow, XGBoost, Deep Learning" },
  { icon: Cpu, label: "AI Solutions", desc: "NLP, Computer Vision, GenAI" },
  { icon: Cloud, label: "Cloud & MLOps", desc: "GCP, Vertex AI, Cloud Run" },
  { icon: Database, label: "Data Engineering", desc: "SQL, Pandas, NumPy" },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative grid-pattern">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="font-display text-xs tracking-[0.3em] text-primary mb-2 uppercase">About</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            WHO I <span className="gradient-text">AM</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <p className="text-muted-foreground leading-relaxed font-body">
              Motivated AI Engineer with a strong foundation in machine learning, deep learning, 
              and data analysis. Skilled in Python, TensorFlow, and scikit-learn, with hands-on 
              experience building and evaluating predictive models.
            </p>
            <p className="text-muted-foreground leading-relaxed font-body">
              Passionate about applying AI solutions to real-world problems and continuously 
              learning emerging technologies. Currently pursuing MS in AI & Robotics at the 
              University of Hertfordshire, UK.
            </p>
            <div className="flex gap-4 pt-2">
              <div className="glass-card px-5 py-3 text-center">
                <p className="text-2xl font-display font-bold text-primary">3+</p>
                <p className="text-xs text-muted-foreground font-body">Internships</p>
              </div>
              <div className="glass-card px-5 py-3 text-center">
                <p className="text-2xl font-display font-bold text-secondary">5+</p>
                <p className="text-xs text-muted-foreground font-body">Certifications</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, i) => (
              <div
                key={item.label}
                className="glass-card p-5 hover-glow group cursor-default"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <item.icon className="w-8 h-8 text-primary mb-3 group-hover:text-secondary transition-colors" />
                <h3 className="font-heading text-lg font-semibold text-foreground mb-1">{item.label}</h3>
                <p className="text-xs text-muted-foreground font-body">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
