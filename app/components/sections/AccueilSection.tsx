"use client";

import { Button } from "../ui/button";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AccueilSection() {
  return (
    <section id="accueil" className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <motion.h1 
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Romain Auroux <br />
                Développement commercial & innovation digitale — Genève
              </motion.h1>
              <motion.p 
                className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Fort d’un parcours international entre l’Europe et l’Amérique du Nord, j’ai évolué dans des environnements variés : retail premium, immobilier, entrepreneuriat et technologies. Ces expériences m’ont permis de développer une polyvalence rare, alliant business development, gestion de projets, relation client et création de solutions digitales innovantes.
              </motion.p>
              <motion.p 
                className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
              >
                Entrepreneur dans l’IA et diplômé en sciences commerciales, j’ai cofondé une entreprise spécialisée dans l’automatisation pour les PME, contribué à des projets de croissance immobilière au Canada, et piloté un business d’achat/revente avec développement SaaS. Ces expériences m’ont appris à conjuguer rigueur analytique, sens commercial et esprit entrepreneurial pour générer de la performance durable.
              </motion.p>
              <motion.p 
                className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                Installé à Genève, je souhaite mettre cette pluralité de compétences au service d’une entreprise ambitieuse, en apportant innovation, structuration et excellence opérationnelle.
              </motion.p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Button asChild size="lg">
                  <a href="#projets">Mes expériences</a>
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Button asChild size="lg" variant="outline">
                  <a href="#contact">Me contacter</a>
                </Button>
              </motion.div>
            </div>
          </div>
          <motion.div 
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative w-[320px] h-[420px] sm:w-[360px] sm:h-[480px] rounded-full overflow-hidden shadow-lg">
              <Image
                src="/images/IMG_7355.jpg"
                alt="Photo professionnelle de Romain Auroux"
                fill
                sizes="(min-width: 1024px) 500px, (min-width: 640px) 360px, 320px"
                className="object-cover object-[45%_top]"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 