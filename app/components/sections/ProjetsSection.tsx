"use client";

import { motion } from "framer-motion";
import ProjectCard from "../ui/ProjectCard";
import { Building2, Headphones, Briefcase, Store } from "lucide-react";

const projetsMod = [
  {
    id: 1,
    titre: "Assistant Courtier Immobilier — Remax du Cartier",
    description: "2024 – 2024 | Montréal, Canada",
    image: "/images/REM_Logo_m_Ballon_RGB_quadratisch.jpg",
    details: [
      "Accompagnement des locataires dans leur recherche de logement à moyen et long terme.",
      "Communication avec les propriétaires et les clients internationaux.",
      "Participation à la stratégie de croissance de l'agence.",
      "Développement de la startup LOKA.",
      "Gestion d’un portefeuille de 20 biens immobiliers meublés (satisfaction client 95 %).",
      "Optimisation des processus de relocation et amélioration des taux de conversion.",
      "Contribution à la stratégie de croissance : élargissement du portefeuille de biens de +15 % en 6 mois.",
      "Collaboration sur une vente de 6 millions de dollars (avril 2024).",
    ],
    competences: [
      "Relation client et négociation",
      "Organisation et gestion CRM",
      "Reporting et suivi de performance",
    ],
    icone: <Building2 className="w-6 h-6" />,
  },
  {
    id: 2,
    titre: "Conseiller clientèle & gestion des opérations — LCBO",
    description: "2023 – 2023 | Ottawa, Canada",
    image: "/images/lcbo-awards.jpg",
    details: [
      "Accueil et conseil personnalisés auprès de 200+ clients par semaine dans un environnement premium.",
      "Suivi des ventes et gestion de stock avec une précision de 98 % lors des inventaires.",
      "Connaissance produit et formation express sur les réglementations et service client.",
      "Résolution de problèmes clients et recommandations adaptées (NPS élevé).",
      "Participation à des campagnes de promotion caritatives.",
    ],
    competences: [
      "Relation client et ventes",
      "Rigueur opérationnelle et gestion de stock",
      "Travail en équipe et communication",
    ],
    icone: <Headphones className="w-6 h-6" />,
  },
  {
    id: 3,
    titre: "Co-fondateur & responsable développement commercial — Velvet IA",
    description: "2024 – 2025 | Remote, France/Genève",
    image: "/images/page d'acceuil site velvet IA.png",
    details: [
      "Création et pilotage de solutions IA sur mesure pour les PME (automatisation des process métiers avec Make.com, Cursor AI).",
      "Stratégie d’acquisition client multi-plateformes (réseaux sociaux, prospection, publicité).",
      "Partenariats avec des fournisseurs technologiques (Askib, Twiny).",
      "Développement d’outils internes pour automatiser les processus (ScrapUp).",
    ],
    competences: [
      "Conception d’agents IA et automatisations",
      "Go-to-market B2B et offres",
      "Gestion de projet et priorisation",
    ],
    icone: <Briefcase className="w-6 h-6" />,
    lien: "https://velvet-ia.fr",
  },
  {
    id: 4,
    titre: "Entrepreneur — Business d’achat/revente & SaaS (SneakTrade)",
    description: "2021 – 2023 | Bordeaux, France",
    image: "/images/achat-revente.jpeg",
    details: [
      "Développement d’un business d’achat/revente à échelle locale et e-commerce : +500 paires revendues avec une marge moyenne de 35 %.",
      "Négociation et gestion des prix ; relation avec 5 fournisseurs français pour sécuriser les stocks et dénicher les meilleures paires.",
      "Conception d’un scraper Vinted permettant d’automatiser la détection d’opportunités rentables.",
      "Création et monétisation d’un SaaS distribué sur Discord, atteint plus de 50 abonnés payants en moins d’un an.",
    ],
    competences: [
      "Négociation & acquisition clients",
      "Automatisation et outils low-code",
      "Pilotage d’activité orienté marge",
    ],
    icone: <Store className="w-6 h-6" />,
  },
  {
    id: 5,
    titre: "Développeur — SaaS pour gestionnaires de patrimoine (CNCGP)",
    description: "2025 – En cours | France",
    image: "/images/page d'accueil saas.png",
    details: [
      "Conception d’une plateforme SaaS pour les gestionnaires de patrimoine membres CNCGP (process KYC, suivi portefeuille, conformité).",
      "Architecture front Next.js/TypeScript strict et API sécurisée ; intégration CRM et automatisations.",
      "Mise en place d’un design system réutilisable et d’un socle UI performant (accessibilité, SEO, performances).",
    ],
    competences: [
      "Product management et discovery",
      "Conception technique TypeScript/Next.js",
      "Sécurité, conformité et intégrations",
    ],
    icone: <Briefcase className="w-6 h-6" />,
  },
  {
    id: 6,
    titre: "Développement d’un SaaS d’automatisations — Scrapix",
    description: "2025 – En cours | Remote, France",
    image: "/images/scrapix-dashboard.png",
    details: [
      "Conception d’un SaaS connectant des agents IA autonomes pour automatiser les processus des entrepreneurs du digital.",
      "Architecture Next.js/TypeScript strict, intégrations API (auth, webhooks) et orchestrations d’agents.",
      "MVP orienté cas d’usage: prospection, support, back-office ; tableau de bord unifié.",
    ],
    competences: [
      "Conception d’agents IA et orchestrations",
      "Intégrations API et sécurité",
      "UX dashboard et product thinking",
    ],
    icone: <Briefcase className="w-6 h-6" />,
    lien: "https://scrapix.fr/dashboard",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

export default function ProjetsSection() {
  return (
    <section id="projets" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Expériences professionnelles</h2>
          <p className="mt-4 max-w-[700px] mx-auto text-gray-500 md:text-xl dark:text-gray-400">
            Une sélection de missions et projets clés menés au Canada et en France.
          </p>
        </div>
        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projetsMod.map((projet) => (
            <motion.div key={projet.id} variants={itemVariants}>
              <ProjectCard projet={projet} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 