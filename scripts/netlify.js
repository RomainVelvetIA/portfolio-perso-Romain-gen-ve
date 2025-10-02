// Ce script est utilisé pour préparer les fichiers pour Netlify
const fs = require('fs');
const path = require('path');

// Assurez-vous que le dossier scripts existe
if (!fs.existsSync(path.join(process.cwd(), 'scripts'))) {
  fs.mkdirSync(path.join(process.cwd(), 'scripts'));
}

// Assurez-vous que le fichier _redirects existe dans out
const redirectsPath = path.join(process.cwd(), 'out', '_redirects');
if (!fs.existsSync(redirectsPath)) {
  // Contenu amélioré pour _redirects
  fs.writeFileSync(redirectsPath, `
# Redirection pour SPA
/*  /index.html  200

# Redirections spécifiques pour Next.js
/projets/*  /index.html  200
  `);
  console.log('✅ Fichier _redirects créé avec succès');
}

// Vérifiez si le fichier netlify.toml existe à la racine
const netlifyTomlPath = path.join(process.cwd(), 'netlify.toml');
if (!fs.existsSync(netlifyTomlPath)) {
  // Si le fichier n'existe pas, créez-le
  const netlifyTomlContent = `[build]
  command = "npm run build"
  publish = "out"

[build.environment]
  NODE_VERSION = "18.17.0"
  NEXT_USE_NETLIFY_EDGE = "true"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
    
[[headers]]
  for = "/_next/static/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"`;

  fs.writeFileSync(netlifyTomlPath, netlifyTomlContent);
  console.log('✅ Fichier netlify.toml créé avec succès');
}

// Créer un fichier netlify.js vide à la racine du dossier out pour signaler que c'est un déploiement Next.js
fs.writeFileSync(path.join(process.cwd(), 'out', '.nojekyll'), '');
console.log('✅ Fichier .nojekyll créé');

console.log('✅ Configuration Netlify terminée'); 