import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

import fahleviImg from "@/assets/penasihat/fahlevi-maizano.png";
import ritaImg from "@/assets/penasihat/rita-suryani.png";
import langgengImg from "@/assets/penasihat/langgeng-suprapto.png";

const penasihatList = [
  { name: "H. Fahlvei Maizano", image: fahleviImg },
  { name: "Hj. Rita Suryani", image: ritaImg },
  { name: "Langgeng Suprapto", image: langgengImg },
];

export function PenasihatSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-20 bg-background">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--gold)) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div ref={ref} className="relative container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <Star className="w-8 h-8 text-gold mx-auto mb-4" />
          <span className="text-gold text-sm uppercase tracking-widest mb-4 block">
            Masa Bakti 2021 s/d 2026
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground section-title">
            Penasihat Pengda Sumsel
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Penasihat Pengurus Daerah IKS PI Kera Sakti Sumatera Selatan
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {penasihatList.map((penasihat, index) => (
            <motion.div
              key={penasihat.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="member-card text-center"
            >
              <div className="w-40 h-40 mx-auto mb-5 rounded-full overflow-hidden border-3 border-gold/40 hover:border-gold transition-colors shadow-lg shadow-gold/10">
                <img
                  src={penasihat.image}
                  alt={penasihat.name}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <span className="inline-block px-3 py-1 bg-gold/10 text-gold text-xs font-semibold rounded-full mb-2 uppercase tracking-wider">
                Penasihat
              </span>
              <h4 className="font-heading text-lg font-semibold text-foreground mt-1 leading-tight">
                {penasihat.name}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
