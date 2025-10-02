"use client";

import { motion } from "framer-motion";

interface SkillPoint {
  title: string;
  points: string[];
}

export default function CompetencesSection() {
  const skills: SkillPoint[] = [
    {
      title: "Développement commercial & vente B2B",
      points: [
        "Prospection, qualification et closing",
        "Gestion de pipeline et CRM",
        "Stratégie d’acquisition multi-canale",
        "Négociation et partenariats",
      ],
    },
    {
      title: "Gestion de projet & coordination d’équipe",
      points: [
        "Planification, priorisation et suivi des objectifs",
        "Communication transversale et coordination opérationnelle",
        "Pilotage d’indicateurs de performance",
        "Documentation des processus",
      ],
    },
    {
      title: "Stratégie commerciale & marketing digital",
      points: [
        "Positionnement, offres et go-to-market",
        "Campagnes Meta Ads / social, copywriting orienté conversion",
        "Analyse de marché et veille concurrentielle",
        "Optimisation de funnels et rétention",
      ],
    },
    {
      title: "IA appliquée & automatisation low-code",
      points: [
        "Agents IA (voix/web) et intégrations (Vapi, Retell, Make)",
        "Automatisation de workflows (prospection, support, back-office)",
        "Outils no-code/low-code (Make, Zapier, Airtable, Notion)",
        "Mesure de la performance et amélioration continue",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <section id="competences" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Compétences</h2>
          <p className="mt-4 max-w-[700px] mx-auto text-gray-500 md:text-xl dark:text-gray-400">
            Un socle hybride alliant développement commercial, gestion de projet, stratégie et IA appliquée.
          </p>
        </div>
        <motion.div 
          className="grid gap-8 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border dark:border-gray-700"
              variants={itemVariants}
            >
              <h3 className="text-xl font-semibold mb-4">{skill.title}</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                {skill.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 