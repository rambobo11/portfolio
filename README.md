# Portfolio Alternance - Mohamed Idzim

Portfolio professionnel pour la recherche d'alternance en Management & Conseil des Systèmes d'Information (AMOA/PMO/SIRH/BI).

## 🚀 Installation

1. **Installer les dépendances :**
```bash
npm install
```

2. **Lancer le serveur de développement :**
```bash
npm run dev
```

3. **Ouvrir dans le navigateur :**
Le site sera accessible à l'adresse : http://localhost:3000

## 📝 Personnalisation

### Modifier les informations personnelles

Ouvre le fichier `src/App.jsx` et modifie l'objet `data` :

```javascript
const data = {
  name: "Votre Nom",
  email: "votre.email@exemple.com",
  linkedin: "https://www.linkedin.com/in/votre-profil/",
  cvUrl: "https://lien-vers-votre-cv.pdf",
  // ... autres informations
};
```

### Ajouter vos projets

Dans la section `projects` de l'objet `data`, ajoutez vos propres projets :

```javascript
projects: [
  {
    title: "Nom de votre projet",
    desc: "Description détaillée du projet",
    link: "https://lien-vers-le-projet.com",
    tag: "Catégorie (ex: BI / Reporting)",
  },
  // ... autres projets
],
```

### Modifier les compétences

Ajustez les sections `skills.fortes` et `skills.outils` selon vos compétences :

```javascript
skills: {
  fortes: [
    "Votre compétence 1",
    "Votre compétence 2",
    // ...
  ],
  outils: [
    "Outil 1",
    "Outil 2",
    // ...
  ],
},
```

## 🎨 Technologies utilisées

- **React 18** - Framework JavaScript
- **Tailwind CSS** - Framework CSS utilitaire
- **Lucide React** - Icônes modernes
- **Vite** - Outil de build rapide

## 📦 Build pour production

Pour créer une version optimisée pour la production :

```bash
npm run build
```

Les fichiers de production seront générés dans le dossier `dist/`.

## 🌐 Déploiement

### Netlify (recommandé)
1. Connectez votre repository GitHub à Netlify
2. Configurez la commande de build : `npm run build`
3. Définissez le dossier de publication : `dist`

### GitHub Pages
1. Ajoutez `"homepage": "https://votre-username.github.io/votre-repo"` dans `package.json`
2. Installez `gh-pages` : `npm install --save-dev gh-pages`
3. Ajoutez le script : `"deploy": "gh-pages -d dist"`
4. Déployez : `npm run build && npm run deploy`

## 📱 Responsive Design

Le portfolio est entièrement responsive et s'adapte à tous les écrans :
- Mobile (320px+)
- Tablet (768px+)
- Desktop (1024px+)

## 🔧 Structure du projet

```
portfolio-alternance/
├── src/
│   ├── App.jsx          # Composant principal
│   ├── main.jsx         # Point d'entrée
│   └── index.css        # Styles globaux
├── public/              # Assets statiques
├── package.json         # Dépendances
├── tailwind.config.js   # Configuration Tailwind
├── vite.config.js       # Configuration Vite
└── README.md           # Documentation
```

## 📞 Support

Pour toute question ou suggestion, n'hésitez pas à ouvrir une issue sur GitHub.

---

**Bon courage pour votre recherche d'alternance ! 🎯**
