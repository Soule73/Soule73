# 🚀 Portfolio Soule73

Un portfolio personnel moderne, dynamique et professionnel construit avec les dernières technologies web.

![Portfolio Preview](https://via.placeholder.com/800x400/1e40af/ffffff?text=Portfolio+Soule73)

## ✨ Fonctionnalités

- **Design Moderne** : Interface utilisateur élégante avec des animations fluides
- **Mode Sombre** : Basculement entre thème clair et sombre
- **Responsive Design** : Optimisé pour tous les appareils (mobile, tablette, desktop)
- **Performance** : Chargement rapide et optimisé
- **Animations** : Transitions et effets visuels attrayants
- **Accessibilité** : Conforme aux standards d'accessibilité web

## 🛠️ Technologies Utilisées

- **Frontend Framework** : React 18 avec TypeScript
- **Build Tool** : Vite 5 pour un développement ultra-rapide
- **Styling** : Tailwind CSS v4 pour un design system moderne
- **Animations** : CSS Animations et Transitions personnalisées
- **Icons** : Heroicons et SVG personnalisés

## 📁 Structure du Projet

```
src/
├── components/          # Composants React
│   ├── Header.tsx      # Navigation et menu
│   ├── Hero.tsx        # Section d'accueil
│   ├── About.tsx       # Section à propos
│   ├── Skills.tsx      # Compétences techniques
│   ├── Projects.tsx    # Portfolio de projets
│   ├── Contact.tsx     # Formulaire de contact
│   └── Footer.tsx      # Pied de page
├── App.tsx             # Composant principal
├── main.tsx           # Point d'entrée
└── index.css          # Styles globaux et animations
```

## 🚀 Installation et Démarrage

### Prérequis
- Node.js (version 18+)
- npm ou yarn

### Installation
```bash
# Cloner le repository
git clone https://github.com/Soule73/portfolio.git
cd portfolio

# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev
```

### Scripts Disponibles
```bash
# Développement
npm run dev

# Build de production
npm run build

# Preview du build
npm run preview

# Linting
npm run lint
```

## 🎨 Personnalisation

### Couleurs et Thème
Les couleurs principales sont définies dans Tailwind CSS et peuvent être personnalisées dans les composants.

### Contenu Personnel
Modifiez les informations dans chaque composant :
- `Hero.tsx` : Nom, titre et description
- `About.tsx` : Biographie et statistiques
- `Skills.tsx` : Compétences techniques
- `Projects.tsx` : Portfolio de projets
- `Contact.tsx` : Informations de contact

## 📱 Sections du Portfolio

### 🏠 Accueil (Hero)
- Animation de texte avec effet typewriter
- Boutons d'action avec animations
- Design attractif avec background animé

### 👤 À Propos
- Présentation personnelle
- Statistiques dynamiques
- Points forts et valeurs

### 💻 Compétences
- Barres de progression animées
- Catégories organisées (Frontend, Backend, Outils)
- Technologies récentes et en apprentissage

### 🎯 Projets
- Galerie de projets avec filtres
- Projets mis en avant
- Liens vers démos et code source

### 📞 Contact
- Formulaire de contact fonctionnel
- Informations de contact
- Liens vers réseaux sociaux

## 🌟 Optimisations

- **Performance** : Bundle optimisé avec Vite
- **SEO** : Meta tags et structure sémantique
- **Accessibilité** : Navigation au clavier, ARIA labels
- **Responsive** : Design adaptatif mobile-first

## 🚀 Déploiement

### Vercel (Recommandé)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Netlify
```bash
# Build
npm run build

# Deploy dist/ folder to Netlify
```

### GitHub Pages
```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts
"deploy": "npm run build && gh-pages -d dist"

# Deploy
npm run deploy
```

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📧 Contact

- **Email** : soule.soumare@mediaschool.me
- **LinkedIn** : [linkedin.com/in/soulé-soumaré](https://linkedin.com/in/soulé-soumaré)
- **GitHub** : [github.com/Soule73](https://github.com/Soule73)
- **Blog** : [sds-codeur.com](https://sds-codeur.com)

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

---

⭐ **Si ce portfolio vous a été utile, n'hésitez pas à lui donner une étoile !** ⭐
