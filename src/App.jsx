import { Mail, Linkedin, MapPin, Calendar, Download, CheckCircle2, ExternalLink, Github, Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";

const data = {
  name: "Mohamed Idzim",
  title: "Alternance – Management & Conseil SI",
  availability: "Disponible dès septembre 2025 – Île‑de‑France",
  location: "Massy, France",
  email: "mohamedidzim11@gmail.com",
  linkedin: "https://www.linkedin.com/in/mohamedidzim/",
  github: "https://github.com/rambobo11",
  cvUrl: "https://drive.google.com/uc?export=download&id=1LVNUbHEFKOy5TWB-MHvIgkLnoyhTpZem",
  summary: "Étudiant à l'ESGI (Master Management & Conseil des Systèmes d'Information). Je cherche une alternance pour contribuer à des projets SI et apporter ma polyvalence technique et organisationnelle à votre équipe.",
  
  skills: {
    techniques: ["Python", "C", "SQL", "R", "React", "HTML", "CSS", "JavaScript"],
    methodologies: ["UML", "CI/CD", "POO"],
    outils: ["HOPEX", "Docker", "Power BI", "Git", "AWS"],
  },
  
  languages: [
    { name: "Français", level: "Maîtrise parfaite" },
    { name: "Anglais", level: "Maîtrise parfaite" },
    { name: "Arabe", level: "Langue maternelle" },
    { name: "Espagnol", level: "Notions" },
  ],
  
  projects: [
    {
      title: "Analyseur de langue",
      desc: "Développement d'un système d'analyse linguistique pour traiter des textes et améliorer la cohérence des résultats à partir des données d'entrée.",
      tag: "Python / IA",
    },
    {
      title: "Plateforme de Streaming Multimédia",
      desc: "Conception d'une plateforme pour diffuser des films et séries, avec fonctionnalités telles que les recommandations, le multi-profil, et la gestion de contenu.",
      tag: "Java / Web",
    },
    {
      title: "Gestionnaire de Serveurs pour Holding Corporative",
      desc: "Création d'une application pour optimiser la gestion de serveurs sous Linux/Unix, avec modules de synchronisation et continuité des opérations commerciales.",
      tag: "C / Linux",
    },
  ],
  
  education: [
    {
      school: "ESGI – École Supérieure de Génie Informatique",
      program: "Master Management & Conseil des Systèmes d'Information (M1)",
      years: "2025 – 2027",
    },
    {
      school: "O'Clock",
      program: "Formation Concepteur Développeur d'App",
      years: "2024 – 2025",
    },
    {
      school: "ISTY UVSQ Paris-Saclay",
      program: "1re année d'ingénierie à l'ISTY (UVSQ), filière architectures IT",
      years: "2023 – 2024",
    },
    {
      school: "Ecole Nationale des Sciences Appliquées",
      program: "2 ans du cycle préparatoire et 1 an du cycle d'ingénieur (Filière de l'Ingénierie des Technologies et Réseaux de Communication)",
      years: "2020 – 2023",
    },
    {
      school: "BAC International scientifique",
      program: "Mention Très Bien",
      years: "2019 – 2020",
    },
  ],
  
  experience: [
    {
      company: "BBALLERXCHANGE",
      position: "Fondateur & Dev Full-Stack",
      period: "Octobre 2024 - Présent",
      description: "Fondateur et développeur full-stack de la plateforme e-commerce BBX (bballerxchange.com) : conception de l'architecture globale, développement d'outils internes personnalisés (dashboard admin, gestion des données, automatisations), et création du site vitrine pour le lancement de la marque et l'acquisition d'utilisateurs.",
      technologies: ["React", "Node.js", "E-commerce", "Dashboard Admin"],
      website: "https://www.bballerxchange.com/",
    },
    {
      company: "Safran Aircraft Engines",
      position: "Alternance en Urbanisation des SI",
      period: "Octobre 2024 - Décembre 2024",
      description: "Lors de cette alternance chez Safran, j'ai acquis une compréhension solide des concepts clés comme le cycle de vie projet, Engineering 4.0, SPDM, et l'utilisation d'outils comme HOPEX pour la cartographie et l'urbanisation des systèmes d'information.",
      technologies: ["HOPEX", "Engineering 4.0", "SPDM", "Urbanisation SI"],
    },
    {
      company: "Pelagique Industrie",
      position: "Stage en Conception et Gestion de Bases de Données",
      period: "Juin 2023 - Juillet 2023",
      description: "Participation à la conception et l'optimisation d'une base de données pour la gestion des stocks et commandes. Création de requêtes SQL pour l'extraction et l'analyse de données, et exécution de tests pour assurer l'intégrité et les performances du système.",
      technologies: ["SQL", "Base de données", "Optimisation", "Tests"],
    },
    {
      company: "GDSC ENSAO",
      position: "Responsable Marketing",
      period: "Octobre 2022 - Octobre 2024",
      description: "En tant que Responsable Marketing au GDSC ENSAO, j'ai développé des compétences en gestion de projets marketing, communication stratégique, et création de contenus visuels avec des outils comme Adobe Premiere Pro et Adobe Illustrator. J'ai également collaboré avec des équipes pluridisciplinaires pour promouvoir les initiatives du groupe et atteindre les objectifs fixés.",
      technologies: ["Adobe Premiere Pro", "Adobe Illustrator", "Marketing", "Communication"],
    },
    {
      company: "Azarar Matériaux",
      position: "Stage en Développement Front-End Web",
      period: "Juin 2022 - Juillet 2022",
      description: "Participation à la création et à l'amélioration de l'interface utilisateur d'une application web dédiée à la gestion des commandes et des clients. Utilisation des technologies HTML, CSS, JavaScript, et intégration de fonctionnalités interactives pour améliorer l'expérience utilisateur.",
      technologies: ["HTML", "CSS", "JavaScript", "Front-End", "UX/UI"],
    },
  ],
};

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('darkMode') === 'true' || 
             window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-200">
      <Header darkMode={darkMode} onToggleDarkMode={toggleDarkMode} />
      <Hero />
      <About />
      <Skills />
      <Languages />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

function Header({ darkMode, onToggleDarkMode }) {
  return (
    <header className="sticky top-0 z-20 backdrop-blur bg-white/70 dark:bg-slate-900/70 border-b border-slate-200 dark:border-slate-700">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="font-semibold">{data.name}</div>
        <div className="flex items-center gap-6">
          <nav className="hidden sm:flex gap-6 text-sm text-slate-600 dark:text-slate-400">
            <a href="#about" className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">À propos</a>
            <a href="#skills" className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">Compétences</a>
            <a href="#experience" className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">Expérience</a>
            <a href="#projects" className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">Projets</a>
            <a href="#contact" className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">Contact</a>
          </nav>
          <button
            onClick={onToggleDarkMode}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            aria-label={darkMode ? "Passer au mode clair" : "Passer au mode sombre"}
          >
            {darkMode ? <Sun className="w-5 h-5 text-slate-600 dark:text-slate-400" /> : <Moon className="w-5 h-5 text-slate-600 dark:text-slate-400" />}
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800" />
      <div className="relative max-w-4xl mx-auto px-4 py-16 sm:py-20 text-center">
        <span className="inline-flex items-center gap-2 text-xs font-medium text-indigo-700 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 px-3 py-1 rounded-full border border-indigo-100 dark:border-indigo-800">
          <Calendar className="w-3.5 h-3.5" /> {data.availability}
        </span>
        <h1 className="mt-5 text-3xl sm:text-4xl font-bold leading-tight">{data.title}</h1>
        <p className="mt-4 text-slate-600 dark:text-slate-400">{data.summary}</p>
        
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a href={`mailto:${data.email}`} className="inline-flex items-center gap-2 rounded-xl px-4 py-2 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-200 transition">
            <Mail className="w-4 h-4" /> Me contacter
          </a>
          <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition">
            <Linkedin className="w-4 h-4" /> LinkedIn
          </a>
          <a href={data.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition">
            <Github className="w-4 h-4" /> GitHub
          </a>
                          <a href={data.cvUrl} download="CV_Mohamed_Idzim.pdf" className="inline-flex items-center gap-2 rounded-xl px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition">
                  <Download className="w-4 h-4" /> CV (PDF)
                </a>
        </div>
        
        <div className="mt-4 flex items-center justify-center gap-3 text-sm text-slate-500 dark:text-slate-400">
          <MapPin className="w-4 h-4" /> {data.location}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-4 py-10">
      <Card>
        <h2 className="text-xl font-bold mb-6">À propos</h2>
        <div>
          <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3">Ma vision</h3>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
            Je transforme les besoins métiers en solutions concrètes et mesurables. 
            Mon approche combine <strong>rigueur technique</strong> et <strong>agilité opérationnelle</strong> 
            pour maximiser l'adoption utilisateur et la valeur business.
          </p>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            Passionné par l'innovation technologique et la conduite du changement, 
            je m'épanouis dans des environnements où je peux contribuer à des projets 
            SI impactants avec des équipes pluridisciplinaires.
          </p>
        </div>
      </Card>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-4 py-6">
      <h2 className="text-xl font-bold mb-4">Compétences</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <h3 className="text-lg font-semibold mb-3">Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {data.skills.techniques.map((skill) => <Badge key={skill}>{skill}</Badge>)}
          </div>
        </Card>
        <Card>
          <h3 className="text-lg font-semibold mb-3">Méthodologies</h3>
          <div className="flex flex-wrap gap-2">
            {data.skills.methodologies.map((skill) => <Badge key={skill}>{skill}</Badge>)}
          </div>
        </Card>
        <Card>
          <h3 className="text-lg font-semibold mb-3">Outils</h3>
          <div className="flex flex-wrap gap-2">
            {data.skills.outils.map((skill) => <Badge key={skill}>{skill}</Badge>)}
          </div>
        </Card>
      </div>
    </section>
  );
}

function Languages() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-6">
      <h2 className="text-xl font-bold mb-4">Langues</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.languages.map((lang) => (
          <Card key={lang.name}>
            <div className="text-center">
              <div className="text-slate-700 dark:text-slate-300 font-medium">{lang.name}</div>
              <div className="text-slate-500 dark:text-slate-400 text-sm mt-1">{lang.level}</div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-xl font-bold mb-4">Projets / Livrables personnels</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {data.projects.map((project) => <ProjectCard key={project.title} {...project} />)}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-4 py-6">
      <h2 className="text-xl font-bold mb-4">Expérience professionnelle</h2>
      <div className="grid gap-6">
        {data.experience.map((exp, index) => (
          <Card key={index}>
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <div className="text-slate-700 dark:text-slate-300 font-medium">{exp.company}</div>
                  {exp.website && (
                    <a href={exp.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300">
                      <ExternalLink className="w-3 h-3" /> Site web
                    </a>
                  )}
                </div>
                <div className="text-slate-600 dark:text-slate-400 font-medium">{exp.position}</div>
                <div className="text-slate-500 dark:text-slate-500 text-sm mt-1">{exp.period}</div>
                <p className="text-slate-600 dark:text-slate-400 text-sm mt-3 leading-relaxed">{exp.description}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => <Badge key={tech}>{tech}</Badge>)}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-6">
      <h2 className="text-xl font-bold mb-4">Formation</h2>
      <div className="grid gap-4">
        {data.education.map((edu, index) => (
          <Card key={index}>
            <div className="text-slate-700 dark:text-slate-300 font-medium">{edu.school}</div>
            <div className="text-slate-600 dark:text-slate-400">{edu.program}</div>
            <div className="text-slate-500 dark:text-slate-500 text-sm mt-1">{edu.years}</div>
          </Card>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-4 py-12">
      <div className="bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-8 sm:p-12 shadow-sm">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">Prêt à collaborer ?</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Je suis disponible pour des opportunités d'alternance en Management & Conseil SI. 
            Discutons de vos projets et de comment je peux contribuer à votre équipe.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4">Informations de contact</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                  <Mail className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  <span>{data.email}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                  <MapPin className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  <span>{data.location}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                  <Calendar className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  <span>{data.availability}</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4">Disponibilité</h3>
              <div className="bg-white dark:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 mb-2">
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="font-medium">Disponible pour alternance</span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Recherche active d'opportunités en Île-de-France (hybride/présentiel)
                </p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4">Actions rapides</h3>
              <div className="space-y-3">
                <a href={`mailto:${data.email}?subject=Opportunité d'alternance - Portfolio Mohamed Idzim`} className="w-full inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-200 transition font-medium">
                  <Mail className="w-4 h-4" /> Envoyer un email
                </a>
                <a href={data.cvUrl} download="CV_Mohamed_Idzim.pdf" className="w-full inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition font-medium">
                  <Download className="w-4 h-4" /> Télécharger mon CV
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4">Réseaux professionnels</h3>
              <div className="flex gap-3">
                <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 bg-blue-600 text-white hover:bg-blue-700 transition font-medium">
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
                <a href={data.github} target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 bg-slate-800 dark:bg-slate-700 text-white hover:bg-slate-900 dark:hover:bg-slate-600 transition font-medium">
                  <Github className="w-4 h-4" /> GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700 text-center">
          <p className="text-sm text-slate-500 dark:text-slate-400">Réponse garantie sous 24h</p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-10 text-center text-xs text-slate-500 dark:text-slate-400">
      © {new Date().getFullYear()} {data.name} — Portfolio
    </footer>
  );
}

function Card({ children }) {
  return (
    <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 sm:p-8 shadow-sm transition-colors">
      {children}
    </div>
  );
}

function Badge({ children }) {
  return (
    <span className="inline-flex items-center gap-1 text-sm px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600 transition-colors">
      {children}
    </span>
  );
}

function ProjectCard({ title, desc, tag }) {
  return (
    <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-5 shadow-sm flex flex-col transition-colors">
      <div className="text-xs text-indigo-700 dark:text-indigo-400 font-medium mb-1">{tag}</div>
      <h4 className="font-semibold leading-snug">{title}</h4>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 flex-1">{desc}</p>
    </div>
  );
}
