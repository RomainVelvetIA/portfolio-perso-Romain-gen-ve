import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t bg-background">
      <div className="container px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-bold">Romain Auroux</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Récemment diplômé en gestion mondiale de l'Université d'Ottawa, passionné par l'IA et l'entrepreneuriat.
            </p>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-bold">Liens rapides</h3>
            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <li>
                <Link href="#accueil" className="hover:text-primary">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="#projets" className="hover:text-primary">
                  Projets
                </Link>
              </li>
              <li>
                <Link href="#processus" className="hover:text-primary">
                  Processus
                </Link>
              </li>
              <li>
                <Link href="#competences" className="hover:text-primary">
                  Compétences
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-bold">Légal</h3>
            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <li>
                <Link href="#" className="hover:text-primary">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Conditions d'utilisation
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-bold">Contact</h3>
            <address className="not-italic">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Rue Abraham-Gevray 6, 1201 Genève<br />
                Suisse
              </p>
              <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                Email: romain.auroux@icloud.com<br />
                Tél: +33 640083249
              </p>
            </address>
          </div>
        </div>
        
        <div className="mt-12 flex flex-col justify-between gap-4 border-t pt-6 md:flex-row">
          <p className="text-center text-sm text-gray-500 dark:text-gray-400 md:text-left">
            &copy; {currentYear} Romain Auroux. Tous droits réservés.
          </p>
          
          <div className="flex justify-center space-x-4 md:justify-end">
            <Link href="#" className="text-gray-500 hover:text-primary dark:text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </Link>
            <Link href="#" className="text-gray-500 hover:text-primary dark:text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </Link>
            <Link href="#" className="text-gray-500 hover:text-primary dark:text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </Link>
            <Link href="https://www.linkedin.com/in/romain-auroux-41425323a/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary dark:text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 