"use client";

import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-[#0b0b14]">
      <div className="container px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">Contactez-moi</h2>
          <p className="mt-4 max-w-[700px] mx-auto text-gray-400 md:text-xl">
            Une idée de projet ? Une question ? N'hésitez pas à me contacter pour en discuter.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-8">
          <motion.div 
            className="flex items-center p-6 rounded-lg bg-[#131325] border-l-4 border-blue-500"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ x: 5, transition: { duration: 0.2 } }}
          >
            <motion.div 
              className="flex items-center justify-center rounded-full bg-blue-600 w-16 h-16 mr-6"
              whileHover={{ scale: 1.1, backgroundColor: "#4263eb" }}
              transition={{ duration: 0.2 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </motion.div>
            <div>
              <h3 className="text-xl font-bold text-blue-500">Email</h3>
              <p className="text-white text-lg">romain.auroux@icloud.com</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex items-center p-6 rounded-lg bg-[#131325] border-l-4 border-blue-500"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ x: 5, transition: { duration: 0.2 } }}
          >
            <motion.div 
              className="flex items-center justify-center rounded-full bg-blue-600 w-16 h-16 mr-6"
              whileHover={{ scale: 1.1, backgroundColor: "#4263eb" }}
              transition={{ duration: 0.2 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </motion.div>
            <div>
              <h3 className="text-xl font-bold text-blue-500">Téléphone</h3>
              <p className="text-white text-lg">+33 640083249</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex items-center p-6 rounded-lg bg-[#131325] border-l-4 border-blue-500"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ x: 5, transition: { duration: 0.2 } }}
          >
            <motion.div 
              className="flex items-center justify-center rounded-full bg-blue-600 w-16 h-16 mr-6"
              whileHover={{ scale: 1.1, backgroundColor: "#4263eb" }}
              transition={{ duration: 0.2 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </motion.div>
            <div>
              <h3 className="text-xl font-bold text-blue-500">Localisation</h3>
              <p className="text-white text-lg">Rue Abraham-Gevray 6, 1201 Genève, Suisse</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex items-center p-6 rounded-lg bg-[#131325] border-l-4 border-blue-500"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ x: 5, transition: { duration: 0.2 } }}
          >
            <motion.div 
              className="flex items-center justify-center rounded-full bg-blue-600 w-16 h-16 mr-6"
              whileHover={{ scale: 1.1, backgroundColor: "#4263eb" }}
              transition={{ duration: 0.2 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-white">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </motion.div>
            <div>
              <h3 className="text-xl font-bold text-blue-500">LinkedIn</h3>
              <a href="https://www.linkedin.com/in/romain-auroux-41425323a/" target="_blank" rel="noopener noreferrer" className="text-white text-lg hover:text-blue-400 transition-colors">
                linkedin.com/in/romain-auroux-41425323a/
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 