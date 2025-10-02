"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "./button";
import Image from "next/image";
import React from "react";

interface Project {
  id: number;
  titre: string;
  description: string;
  image: string;
  details: string[];
  competences: string[];
  icone: React.ReactNode;
  lien?: string;
}

interface ProjectCardProps {
  projet: Project;
}

export default function ProjectCard({ projet }: ProjectCardProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <div className="cursor-pointer group relative overflow-hidden rounded-lg border bg-background transition-shadow hover:shadow-lg">
          <div className="aspect-video relative overflow-hidden">
            <Image
              src={projet.image}
              alt={projet.titre}
              fill
              className="object-cover transition-transform group-hover:scale-105"
              onError={(e) => {
                // En cas d'erreur de chargement d'image, utiliser une image par défaut
                const target = e.target as HTMLImageElement;
                target.onerror = null; // Prévenir les boucles d'erreur
                target.src = "/images/romain.jpg"; // Utiliser une image qui existe déjà
              }}
            />
          </div>
          <div className="p-6">
            <div className="mb-4 flex items-center space-x-2">
              <span className="text-primary">{projet.icone}</span>
              <h3 className="text-xl font-bold">{projet.titre}</h3>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">{projet.description}</p>
          </div>
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content className="fixed inset-0 m-auto max-w-lg rounded-lg bg-background p-6 shadow-lg">
          <Dialog.Close asChild>
            <button aria-label="Fermer" className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
              &times;
            </button>
          </Dialog.Close>
          <div className="mt-4">
            <div className="mb-4 flex items-center space-x-2">
              <span className="text-primary">{projet.icone}</span>
              <h3 className="text-2xl font-bold">{projet.titre}</h3>
            </div>
            <p className="mb-4 text-gray-500 dark:text-gray-400">{projet.description}</p>
            {projet.details.length > 0 ? (
              <ul className="mb-4 list-disc list-inside space-y-1">
                {projet.details.map((detail, index) => (
                  <li key={index} className="text-gray-700 dark:text-gray-300">{detail}</li>
                ))}
              </ul>
            ) : (
              <p className="mb-4 text-gray-500 dark:text-gray-400">Détails à venir.</p>
            )}
            {projet.competences.length > 0 && (
              <div>
                <h4 className="font-semibold mb-2">Compétences clés acquises :</h4>
                <ul className="list-disc list-inside space-y-1">
                  {projet.competences.map((skill, index) => (
                    <li key={index} className="text-gray-700 dark:text-gray-300">{skill}</li>
                  ))}
                </ul>
              </div>
            )}
            {projet.lien && (
              <div className="mt-6">
                <Button asChild>
                  <a href={projet.lien} target="_blank" rel="noopener noreferrer">Voir le projet</a>
                </Button>
              </div>
            )}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
} 