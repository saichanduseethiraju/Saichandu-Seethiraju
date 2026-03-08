import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

const contactItems = [
  { icon: Mail, label: "Email", value: "Saichanduseethiraju@gmail.com", href: "mailto:Saichanduseethiraju@gmail.com" },
  { icon: Phone, label: "Phone", value: "+44 7539 663 123", href: "tel:+447539663123" },
  { icon: MapPin, label: "Location", value: "Luton, United Kingdom", href: "https://maps.google.com/?q=Luton,United+Kingdom" },
  { icon: Linkedin, label: "LinkedIn", value: "Connect on LinkedIn", href: "https://www.linkedin.com/in/saichandu-seethiraju-b73813396" },
];

export default function ContactSection() {
  return (
    <section id="contact" className="relative grid-pattern">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p className="font-display text-xs tracking-[0.3em] text-primary mb-2 uppercase">Get in Touch</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            LET'S <span className="gradient-text">CONNECT</span>
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto grid sm:grid-cols-2 gap-4">
          {contactItems.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-5 flex items-center gap-4 hover-glow group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-body">{item.label}</p>
                <p className="text-sm text-foreground font-body">{item.value}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground font-body">
            © 2026 Saichandu Seethiraju. Built with passion and AI.
          </p>
        </div>
      </div>
    </section>
  );
}
