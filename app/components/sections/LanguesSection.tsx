"use client";

import { motion } from "framer-motion";

interface Lang {
  nom: string;
  niveau: string;
}

export default function LanguesSection(): JSX.Element {
  const langues: Lang[] = [
    { nom: "Anglais", niveau: "C1" },
    { nom: "Français", niveau: "C2 – natif" },
    { nom: "Espagnol", niveau: "B2" },
  ];

  const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };
  const item = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.4 } } };

  return (
    <section id="langues" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Langues</h2>
          <p className="mt-4 max-w-[700px] mx-auto text-gray-500 md:text-xl dark:text-gray-400">
            Capacités linguistiques utiles en contexte international.
          </p>
        </div>

        <motion.div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          {langues.map((l, idx) => (
            <motion.div key={idx} variants={item} className="rounded-2xl border dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow flex items-center justify-between">
              <span className="text-lg font-semibold">{l.nom}</span>
              <span className="rounded-full bg-blue-600 text-white px-3 py-1 text-sm">{l.niveau}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 