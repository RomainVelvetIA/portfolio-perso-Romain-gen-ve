"use client";

import { motion } from "framer-motion";

export default function PourquoiPasDeMasterSection(): JSX.Element {
  return (
    <section id="pourquoi-pas-de-master" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Pourquoi pas de Master
          </h2>
          <div className="mt-4 max-w-[800px] mx-auto text-gray-600 dark:text-gray-300 md:text-xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              Après l’obtention de mon Bachelor, j’ai pris la décision stratégique de ne pas poursuivre immédiatement un Master afin de me lancer directement dans la vie active. Mon objectif est d’acquérir une expérience concrète et significative sur le terrain, de développer rapidement mes compétences et de progresser efficacement au sein de l’entreprise. Ce choix me permet également d’assumer pleinement le coût de mes études tout en construisant une carrière solide et ambitieuse à Genève, où je compte gravir les échelons grâce à ma détermination, mon engagement et ma capacité à produire des résultats tangibles.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}


