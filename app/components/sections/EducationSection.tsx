"use client";

import { motion } from "framer-motion";

interface EducationItem {
  ecole: string;
  diplome: string;
  periode: string;
  lieu: string;
}

export default function EducationSection(): JSX.Element {
  const cursus: EducationItem[] = [
    {
      ecole: "Telfer School of Management — University of Ottawa",
      diplome: "Baccalauréat en sciences commerciales spécialisées",
      periode: "2023 – 2025",
      lieu: "Ottawa, Canada",
    },
    {
      ecole: "Kedge Business School",
      diplome: "Programme EBP International",
      periode: "2021 – 2022",
      lieu: "Bordeaux, France",
    },
  ];

  const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };
  const item = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.4 } } };

  return (
    <section id="education" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Éducation</h2>
          <p className="mt-4 max-w-[700px] mx-auto text-gray-500 md:text-xl dark:text-gray-400">
            Parcours académique international orienté business et management.
          </p>
        </div>
        <motion.div className="grid gap-6 md:grid-cols-2" variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          {cursus.map((c, idx) => (
            <motion.div key={idx} variants={item} className="rounded-2xl border dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow">
              <h3 className="text-xl font-semibold">{c.ecole}</h3>
              <p className="mt-1 text-gray-600 dark:text-gray-300">{c.diplome}</p>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{c.periode} • {c.lieu}</p>
            </motion.div>
          ))}
        </motion.div>
        {null}
      </div>
    </section>
  );
} 