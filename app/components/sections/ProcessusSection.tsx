"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface EtapeProps {
  numero: number;
  titre: string;
  description: string;
  icone: JSX.Element;
}

export default function ProcessusSection() {
  // Icône calendrier pour chaque étape
  const calendarIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v1.5M17.25 3v1.5M3 8.25h18M4.5 21h15a2.25 2.25 0 002.25-2.25V8.25A2.25 2.25 0 0019.5 6h-15A2.25 2.25 0 002.25 8.25v10.5A2.25 2.25 0 004.5 21z" />
    </svg>
  );

  const etapes: EtapeProps[] = [
    {
      numero: 1,
      titre: "Sept 2021 à Décembre 2022",
      description: "Première année du programme EBP International à Kedge Business School : Introduction à la gestion d'entreprise (notions de comptabilité, finance, Ressources Humaines, négociations, analyse des données)",
      icone: calendarIcon,
    },
    {
      numero: 2,
      titre: "Janv 2023 à Décembre 2023",
      description: "Deuxième année et début de bachelor de commerce international à l'Université d'Ottawa (Échange universitaire) : développement des notions de Big data, Mathématiques de gestion, Communications d'affaires, Business International",
      icone: calendarIcon,
    },
    {
      numero: 3,
      titre: "Fév 2024 à Juillet 2024",
      description: "Stage en entreprise en Immobilier à Remax du Cartier à Montréal, spécialisé dans le business development, visites des clients pour les locations, gestion du CRM, des campagnes de prospection, closing client, etc ; développement de la plateforme Loka.INC (responsable du système de vente)",
      icone: calendarIcon,
    },
    {
      numero: 4,
      titre: "Sept 2024 à Mai 2025",
      description: "Dernière année du bachelor de commerce international : compétences en Fintech, création d'entreprise, Management stratégique, gestion financière avancée",
      icone: calendarIcon,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="processus" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Mon éducation</h2>
          <p className="mt-4 max-w-[700px] mx-auto text-gray-500 md:text-xl dark:text-gray-400">
            Découvrez mon parcours éducatif : études, échange universitaire et expérience en entreprise.
          </p>
        </div>
        
        <motion.div
          className="relative mt-20 pl-8 md:pl-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Ligne verticale */}
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-800 md:left-8"></div>
          
          {etapes.map((etape) => (
            <motion.div 
              key={etape.numero} 
              className="relative mb-16 last:mb-0"
              variants={itemVariants}
            >
              {/* Cercle avec numéro */}
              <div className="absolute -left-8 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground md:-left-16">
                <span className="text-xl font-bold">{etape.numero}</span>
              </div>
              
              <div className="ml-10 rounded-lg border bg-background p-6 shadow-sm md:ml-6">
                <div className="mb-4 flex items-center space-x-4">
                  <div className="text-primary">{etape.icone}</div>
                  <h3 className="text-xl font-bold">{etape.titre}</h3>
                </div>
                <p className="text-gray-500 dark:text-gray-400">{etape.description}</p>
                {etape.numero === 3 && (
                  <div className="mt-4 flex flex-col space-y-2">
                    <Link
                      href="https://lokamontreal.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Consulter Loka Montréal
                    </Link>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 