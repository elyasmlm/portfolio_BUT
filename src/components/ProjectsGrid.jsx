import { useState } from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    title: "Green Circle",
    year: "2024 - 2025",
    image: "./image_project/green_circle.png",
    skills: ["Réaliser", "Administrer", "Gérer", "Conduire", "Collaborer"],
    technologies: ["react", "node-js", "database", "js", "html5", "css3-alt", "python"],
    status: "En cours",
    github: "https://github.com/ChamsedineAmouche/SAE_BUT3",
    type: "Universitaire",
    description: `
      C'est un site dédié aux entreprises pour se donner des meubles pour une économie circulaire. Le site permet aussi d'acheter des e-learnings, participer à des événements et de lire des articles pour pouvoir en apprendre plus sur l'écologie et l'économie circulaire.
      Le projet repose sur React pour le front-end et Node.js côté serveur. J’ai contribué à l’intégration des données issues d’une API interne, à la gestion de données sensibles avec une base de données partagée et à l'élaboration d'un chatbot en Python.
    `
  },
  {
    title: "Wacky Monkey Word",
    year: "2023 - 2024",
    image: "./image_project/wackymonkey.png",
    skills: ["Réaliser", "Administrer", "Gérer", "Conduire", "Collaborer"],
    technologies: ["java", "php", "js", "html5", "css3-alt", "c"],
    status: "Terminé",
    github: "https://github.com/abdelrkb/SAE_SEMANTIC",
    type: "Universitaire",
    description: `
      Ce site est un jeu en ligne dont le but est de créer une chaine de mots avec une ressemblance forte entre eux, le score de la ressemblance entre ces deux mots est calculée avec des aspects linguisitiques ou orthographiques. Le site permettait aussi aux joueurs de jouer en ligne simultanément.*
      La ressemblance entre les mots est définie grâce à un moteur de calcul codé en C, le moteur de score définissant le score final en Java et le site web en PHP. Nous avons pu gérer les websockets avec du Python afin de créer des parties en ligne.
    `
  },
  {
    title: "Visualisateur de contrôles CNIL",
    year: "2024",
    image: "./image_project/cnil.png",
    skills: ["Réaliser", "Gérer", "Collaborer"],
    technologies: ["php", "js", "html5", "css3-alt", "database"],
    status: "Terminé",
    github: "https://github.com/elyasmlm/controles_cnil",
    type: "Universitaire",
    description: `
      Outil web permettant d'afficher les contrôles effectués par la CNIL sur le territoire français. À partir de données ouvertes, l’application offre une interface cartographique pour visualiser la localisation, le type de contrôle et les entités concernées. 
      Nous avons dû gérer le traitement des données, leur structuration en base, et développer l’interface utilisateur en PHP et JavaScript.
    `
  },
  {
    title: "Blaze2Fou",
    year: "2024",
    image: "./image_project/blaze2fou.png",
    skills: ["Réaliser", "Administrer", "Gérer", "Conduire", "Collaborer"],
    technologies: ["php", "js", "html5", "css3-alt", "database"],
    status: "En cours",
    github: "https://github.com/abdelrkb/blaz2fou",
    type: "Personnel",
    description: `
      Site communautaire centré sur la culture urbaine et l'humour pour entrer des noms marrants, avec des profils utilisateurs, un espace de publication et un système de likes/commentaires.
      Le back-end en PHP gère la sécurité, les permissions et les contenus, tandis que le front permet une navigation fluide entre les différentes rubriques. J’ai participé à la conception des fonctionnalités principales, au développement de l’interface, et à la structuration de la base de données.
    `
  },
  {
    title: "eBrigade",
    year: "2023 - 2024",
    image: "./image_project/ebrigade.png",
    skills: ["Réaliser", "Administrer", "Gérer", "Administrer", "Conduire", "Collaborer"],
    technologies: ["php", "js", "html5", "css3-alt", "database"],
    link: "https://ebrigade.fr",
    status: "Terminé",
    type: "Professionnel",
    description: `
      ERP destiné à la gestion des plannings, interventions et formations pour les professionnels de la sécurité civile. Durant mon alternance, j’ai pris en charge la maintenance de plusieurs modules, la correction de bugs remontés par les utilisateurs, et l’ajout de nouvelles fonctionnalités, comme des filtres dynamiques ou des exports de données. Le projet s’appuie sur PHP, JavaScript en utilisant des requêtes AJAX, et une base de données relationnelle.
    `
  },
  {
    title: "Monkey Bank",
    year: "2023",
    image: "./image_project/monkeybank.png",
    skills: ["Gérer", "Collaborer"],
    technologies: ["php", "database", "html5", "css3-alt"],
    status: "Terminé",
    github: "https://github.com/abdelrkb/ProjetBanque",
    type: "Universitaire",
    description: `
      Application bancaire simulée développée dans un cadre universitaire. Elle permet aux utilisateurs de créer un compte, de consulter leur solde, d'effectuer des virements et de visualiser l'historique des opérations.
      Le site a été conçu en PHP avec une base de données relationnelle pour stocker les informations client. L'objectif principal était de comprendre les mécanismes de gestion des flux financiers dans une interface sécurisée.
    `
  },
  {
    title: "Backpack Hero",
    year: "2023",
    image: "./image_project/bckpckhero.png",
    skills: ["Réaliser", "Collaborer"],
    technologies: ["java"],
    status: "Terminé",
    type: "Universitaire",
    description: `
      Jeu rogue-like développé en Java, dans lequel le joueur doit gérer un sac à dos stratégique pour optimiser ses combats contre des ennemis générés aléatoirement.
      Le gameplay repose sur la logique d'inventaire, la répartition des objets et les effets de ceux-ci. Ce projet a permis d’explorer la programmation orientée objet, la gestion des états de jeu et l’algorithme de génération procédurale.
    `
  },
  {
    title: "Les Visiteurs",
    year: "2023",
    image: "./image_project/visiteurs.png",
    skills: ["Réaliser", "Conduire", "Collaborer"],
    technologies: ["figma", "palette"],
    status: "Terminé",
    type: "Universitaire",
    link: "https://www.figma.com/design/LOjjiOwNjLhFMT3JoBnmeM/Les-Visiteurs?node-id=0-1&p=f&t=ZbZQ26oBvWVffggi-0",
    description: `
      Projet de design UX/UI visant à repenser l'expérience d'un site de visite de monuments historiques. Nous avons imaginé une navigation immersive et intuitive, en utilisant des maquettes interactives conçues sur Figma.
      Le travail s’est concentré sur la recherche utilisateur, le zoning des pages, la hiérarchisation de l’information et le choix d’une charte graphique cohérente. L’accent a été mis sur l’accessibilité et la clarté.
    `
  },
  {
    title: "Primeurs Passion",
    year: "2022-2023",
    image: "./image_project/primeurspassion.png",
    skills: ["Administrer", "Gérer", "Collaborer"],
    technologies: ["php", "database", "html5", "css3-alt"],
    status: "Terminé",
    type: "Universitaire",
    description: `
      Site vitrine pour une entreprise fictive de vente de fruits et légumes locaux. Il présente les produits, les horaires de marchés et une section de commande simplifiée.
      J’ai participé à la gestion du back-office, à la conception des pages en HTML/CSS, à la mise en place d’un formulaire de commande et à la configuration de la base de données pour stocker les retours clients.
    `
  },
  {
    title: "Les Rives de la Seine",
    year: "2022-2023",
    image: "./image_project/rds.png",
    skills: ["Réaliser", "Conduire", "Collaborer"],
    technologies: ["html5", "css3-alt", "php", "database"],
    status: "Terminé",
    github: "https://github.com/abdelrkb/UnescoRiveDeSeine",
    link: "https://rives-de-seine.netlify.app",
    type: "Universitaire",
    description: `
      Projet web autour de la présentation des bords de Seine en collaboration avec l'UNESCO. Le site propose un agenda des animations, des informations pratiques et une billetterie.
      Le site a été développé en PHP avec gestion dynamique des événements via une base MySQL. L’interface front-end a été stylisée en HTML/CSS pour refléter l’identité visuelle du projet.
    `
  },
  {
    title: "Balls Game",
    year: "2022-2024",
    image: "./image_project/balls_game.png",
    skills: ["Réaliser", "Collaborer"],
    technologies: ["python"],
    status: "Terminé",
    github: "https://github.com/abdelrkb/jeuBoule",
    type: "Universitaire",
    description: `
      Balls Game est un jeu développé en Python dans lequel les joueurs peuvent cliquer pour créer des boules ou diviser celles de l’adversaire. Il comporte plusieurs modes de jeu que l’on peut activer ou désactiver selon les préférences.
      Ce projet met en œuvre une gestion fine des collisions, des événements souris, ainsi que des systèmes de règles dynamiques activables à la volée. Il a été conçu pour être modulable, interactif et visuellement fluide grâce à l’utilisation de Tkinter.
    `
  }
];

  

const ProjectsGrid = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("Tous");
  const [selectedStatus, setSelectedStatus] = useState("Tous");
  const [selectedTech, setSelectedTech] = useState("Tous");
  const [selectedSkill, setSelectedSkill] = useState("Tous");
  const [sortOption, setSortOption] = useState("date-desc");

  const allTechnologies = [...new Set(projectsData.flatMap(p => p.technologies))];
  const allTypes = [...new Set(projectsData.map(p => p.type))];
  const allStatuses = [...new Set(projectsData.map(p => p.status))];
  const allSkills = [...new Set(projectsData.map(p => p.skills).flat())];

  const filteredProjects = projectsData
    .filter(p => 
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(p => selectedType === "Tous" || p.type === selectedType)
    .filter(p => selectedStatus === "Tous" || p.status === selectedStatus)
    .filter(p => selectedTech === "Tous" || p.technologies.includes(selectedTech))
    .filter(p => selectedSkill === "Tous" || p.skills.includes(selectedSkill))    
    .sort((a, b) => {
      if (sortOption === "alpha-asc") return a.title.localeCompare(b.title);
      if (sortOption === "alpha-desc") return b.title.localeCompare(a.title);
      if (sortOption === "date-asc") return a.year.localeCompare(b.year);
      if (sortOption === "date-desc") return b.year.localeCompare(a.year);
      return 0;
    });


  return (
    <section className="py-20 w-full flex flex-col items-center overflow-y-scroll h-screen">
      <h1 className="text-4xl font-bold mb-10">Projets</h1>

       {/* 🔍 Barre de recherche + filtres */}
       <div className="w-4/5 mb-6 text-right">
        <input
          type="text"
          placeholder="Rechercher un projet..."
          className="border border-gray-300 rounded px-4 py-2 w-full"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
       </div>
       
       <div className="w-4/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)} className="border px-4 py-2 rounded">
          <option value="Tous">Tous les types</option>
          {allTypes.map((type, i) => (
            <option key={i} value={type}>{type}</option>
          ))}
        </select>

        <select value={selectedStatus} onChange={(e) => setSelectedStatus(e.target.value)} className="border px-4 py-2 rounded">
          <option value="Tous">Tous les statuts</option>
          {allStatuses.map((status, i) => (
            <option key={i} value={status}>{status}</option>
          ))}
        </select>

        <select value={selectedTech} onChange={(e) => setSelectedTech(e.target.value)} className="border px-4 py-2 rounded">
          <option value="Tous">Toutes les technos</option>
          {allTechnologies.map((tech, i) => (
            <option key={i} value={tech}>{tech}</option>
          ))}
        </select>

        <select value={selectedSkill} onChange={(e) => setSelectedSkill(e.target.value)} className="border px-4 py-2 rounded">
          <option value="Tous">Toutes les compétences</option>
          {allSkills.map((skill, i) => (
            <option key={i} value={skill}>{skill}</option>
          ))}
        </select>

      </div>

      {/* 📊 Options de tri */}
      <div className="w-4/5 mb-6 text-right">
        <select value={sortOption} onChange={(e) => setSortOption(e.target.value)} className="border px-4 py-2 rounded">
          <option value="date-desc">Du plus récent au plus ancien</option>
          <option value="date-asc">Du plus ancien au plus récent</option>
          <option value="alpha-asc">Ordre alphabétique A-Z</option>
          <option value="alpha-desc">Ordre alphabétique Z-A</option>
        </select>
      </div>

      {/* 🧱 Grille des projets */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-4/5">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsGrid;