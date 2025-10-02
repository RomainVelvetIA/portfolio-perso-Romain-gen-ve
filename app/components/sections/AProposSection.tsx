"use client";

import { motion } from "framer-motion";

export default function AProposSection(): JSX.Element {
  return (
    <section id="apropos" className="relative py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      {/* Cercles décoratifs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full transform -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/10 rounded-full transform translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 text-gray-800 dark:text-gray-200 relative">
        <div className="mb-12 text-center">
          <motion.h2
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            À propos de moi
          </motion.h2>
          <motion.div
            className="w-16 h-1 bg-primary mx-auto mb-8"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
        </div>
        <div className="space-y-8 max-w-3xl mx-auto">
          <motion.p
            className="leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Curieux, adaptable et orienté résultats, j’ai développé au fil de mes expériences une solide expertise en business development, gestion de projets et innovation digitale. Mon parcours entrepreneurial et international m’a permis d’affiner des qualités clés :
          </motion.p>

          <motion.ul
            className="list-disc list-inside space-y-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            <li>
              <span className="font-semibold">Leadership & esprit d’équipe</span> : capacité à fédérer, former et motiver dans des environnements multiculturels.
            </li>
            <li>
              <span className="font-semibold">Esprit entrepreneurial</span> : aptitude à identifier des opportunités, concevoir des solutions et les transformer en leviers de croissance.
            </li>
            <li>
              <span className="font-semibold">Rigueur analytique</span> : aisance avec la donnée, les outils digitaux et l’optimisation de processus.
            </li>
            <li>
              <span className="font-semibold">Excellence relationnelle</span> : sens du client, écoute active et communication interculturelle.
            </li>
          </motion.ul>

          <motion.p
            className="leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Aujourd’hui installé à Genève, je souhaite mettre ces compétences au service d’une entreprise ambitieuse, avec pour objectif d’apporter innovation, performance et impact durable.
          </motion.p>

          <motion.div
            className="mt-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <p className="font-semibold mb-2">Domaines d’intérêt</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Finance (banques privées, asset management)</li>
              <li>FMCG (Nestlé, Richemont, P&G)</li>
              <li>Consulting (Big4, cabinets stratégiques)</li>
              <li>Organisations internationales (ONU, OMS, OMC), Tech & IA</li>
            </ul>
          </motion.div>

          <motion.p
            className="mt-2 text-sm opacity-80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Références disponibles sur demande (Remax du Cartier, Velvet IA).
          </motion.p>
        </div>
      </div>
    </section>
  );
} 