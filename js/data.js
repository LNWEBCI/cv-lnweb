/**
 * Données par défaut du CV professionnel
 * N'GUESSAN KOUADIO PREVOSTE MAUREL
 */

const defaultProfile = {
  fullName: "N'GUESSAN KOUADIO PREVOSTE MAUREL",
  title: "Développeur Web & Créateur Digital",
  subtitle: "Spécialiste Vibe Coding, E-commerce, Montage Vidéo, Infographie & Marketing Digital",
  photo: "assets/profile.jpg",
  email: "prevostemaurel@gmail.com",
  phone: "+225 07 58 95 12 26 / 05 95 35 69 28",
  whatsapp: "2250758951226",
  location: "Abidjan, Côte d'Ivoire",
  availability: "Disponible pour projets & CDI",
  bio: "Développeur web passionné et créateur polyvalent combinant maîtrise technique, 'vibe coding' moderne, vision marketing et sensibilité graphique. Fort d'une solide expérience en création de plateformes performantes, en animation de communautés et en production de contenus multimédias percutants.",
  
  stats: [
    { label: "Années d'Expérience", value: "3+" },
    { label: "Projets Réalisés", value: "30+" },
    { label: "Clients Satisfaits", value: "100%" },
    { label: "Spécialités Clés", value: "7 en 1" }
  ],

  // Compétences structurées par domaines d'expertise
  skillsCategories: [
    {
      category: "Développement Web & Vibe Coding",
      icon: "code",
      skills: [
        { name: "Développement Web Moderne", level: 95 },
        { name: "Vibe Coding & IA appliquée", level: 92 },
        { name: "HTML5 / CSS3 / JavaScript ES6+", level: 90 },
        { name: "Création de sites E-commerce & Vitrines", level: 95 },
        { name: "Responsive & Mobile-First Design", level: 95 }
      ]
    },
    {
      category: "Multimédia & Création Visuelle",
      icon: "palette",
      skills: [
        { name: "Infographie & Design Graphique", level: 88 },
        { name: "Montage Vidéo & Storytelling", level: 85 },
        { name: "Création de Contenu Multimédia", level: 90 },
        { name: "Identité Visuelle & Branding", level: 88 }
      ]
    },
    {
      category: "Marketing Digital & Business",
      icon: "trending-up",
      skills: [
        { name: "Marketing Digital Stratégique", level: 85 },
        { name: "Community Management & Réseaux Sociaux", level: 90 },
        { name: "E-commerce & Conversion de Vente", level: 88 },
        { name: "Gestion de Projets & Support Tech", level: 90 }
      ]
    }
  ],

  // Badges rapides
  badges: [
    "Développeur Web",
    "Vibe Coding",
    "Créateur de Contenu",
    "E-commerce",
    "Montage Vidéo",
    "Infographie",
    "Marketing Digital",
    "Community Manager",
    "Certifications Google reconnues"
  ],

  // Parcours professionnel
  experience: [
    {
      period: "2025 — Présent",
      duration: "En poste",
      role: "Fondateur & Directeur",
      company: "Lnweb Digital",
      location: "Abidjan, Côte d'Ivoire",
      type: "Entreprise",
      description: "Création et direction d'une agence de services numériques.",
      tasks: [
        "Missions freelance en partenariat avec d'autres entreprises.",
        "Gestion des réseaux sociaux d'entreprises et d'e-commerçants.",
        "Assistance informatique et support technique aux entreprises.",
        "Formation des entreprises et particuliers aux nouveaux outils technologiques.",
        "Conception graphique : affiches, flyers et logos.",
        "Création de sites internet et d'applications sur mesure."
      ]
    },
    {
      period: "Janvier 2023 — Février 2025",
      duration: "2 ans 2 mois",
      role: "Informaticien, Développeur & Community Manager",
      company: "ComEvents",
      location: "Côte d'Ivoire",
      type: "Poste clé",
      description: "Gestion informatique, développement web et communication digitale.",
      tasks: [
        "Maintenance du parc informatique et assistance aux équipes.",
        "Création et mise à jour des sites web de l'entreprise.",
        "Gestion des réseaux sociaux et création de contenus visuels.",
        "Promotion digitale des événements."
      ]
    },
    {
      period: "Mars 2023 — Août 2023",
      duration: "6 mois",
      role: "Développeur Web",
      company: "Kaspy Corporation",
      location: "Côte d'Ivoire",
      type: "Mission développement",
      description: "Développement d'applications web pour l'entreprise et ses clients.",
      tasks: [
        "Intégration d'interfaces web responsives.",
        "Développement de modules fonctionnels.",
        "Optimisation des performances et de la compatibilité."
      ]
    },
    {
      period: "2022",
      duration: "Stage",
      role: "Stagiaire Informatique & Support Technique",
      company: "Institut Pasteur de Côte d'Ivoire",
      location: "Abidjan, Côte d'Ivoire",
      type: "Stage professionnel",
      description: "Support informatique au sein d'une institution scientifique.",
      tasks: [
        "Assistance utilisateurs et résolution d'incidents.",
        "Maintenance des postes de travail et du réseau.",
        "Sensibilisation à la sécurité informatique."
      ]
    }
  ],

  // Parcours académique
  education: [
    {
      period: "Formation Supérieure",
      degree: "Licence Professionnelle",
      field: "Sciences & Technologies de l'Information",
      school: "Groupe CEFIAT Plateau",
      location: "Abidjan, Plateau",
      highlight: "Approfondissement en génie logiciel, réseaux et gestion de projets digitaux."
    },
    {
      period: "2020",
      degree: "BTS (Brevet de Technicien Supérieur)",
      field: "Informatique & Télécoms",
      school: "UIPA (Université Internationale Privée d'Abidjan)",
      location: "Abidjan, Côte d'Ivoire",
      highlight: "Diplôme validant les compétences en développement d'applications et administration système."
    },
    {
      period: "2017 — 2018",
      degree: "Baccalauréat (BAC)",
      field: "Enseignement Secondaire Général",
      school: "Lycée Bernard Zadi Zaourou",
      location: "Soubré, Côte d'Ivoire",
      highlight: "Obtention du BAC avec ouverture vers les filières scientifiques et technologiques."
    },
    {
      period: "2014 — 2015",
      degree: "BEPC",
      field: "Brevet d'Études du Premier Cycle",
      school: "Lycée Moderne BAD de Soubré",
      location: "Soubré, Côte d'Ivoire",
      highlight: "Validation solide du premier cycle secondaire."
    }
  ],

  // Centres d'intérêt & Loisirs
  hobbies: [
    {
      name: "Lecture",
      description: "Veille technologique permanente, livres de développement personnel, entrepreneuriat et innovation numérique.",
      icon: "book-open"
    },
    {
      name: "Musique",
      description: "Source d'inspiration quotidienne, concentration créative lors des sessions de code et exploration d'univers sonores.",
      icon: "music"
    },
    {
      name: "Création Visuelle & Tech",
      description: "Expérimentation d'outils d'intelligence artificielle générative et de nouvelles esthétiques web.",
      icon: "sparkles"
    }
  ],

  // Réseaux sociaux
  socials: [
    { name: "LinkedIn", url: "https://www.linkedin.com/", icon: "linkedin", label: "Profil professionnel" },
    { name: "WhatsApp", url: "https://wa.me/2250758951226", icon: "whatsapp", label: "Discussion directe (+225 07 58 95 12 26)" },
    { name: "Facebook", url: "https://facebook.com/", icon: "facebook", label: "Page & Actualités" },
    { name: "Instagram", url: "https://instagram.com/", icon: "instagram", label: "Créations & Portfolio" }
  ],

  // Offres de services (pour le formulaire de devis)
  services: [
    {
      id: "website",
      title: "Création de Sites Web & E-commerce",
      desc: "Sites vitrines modernes, boutiques e-commerce automatisées, landing pages ultra-convertissantes.",
      icon: "globe"
    },
    {
      id: "vibe-coding",
      title: "Développement Rapide & Vibe Coding",
      desc: "Applications web fluides, prototypes interactifs et intégration d'outils digitaux avec IA.",
      icon: "cpu"
    },
    {
      id: "video",
      title: "Montage Vidéo & Storytelling",
      desc: "Vidéos promotionnelles percutantes, formats courts (TikTok, Reels, Shorts), habillage visuel.",
      icon: "video"
    },
    {
      id: "design",
      title: "Infographie & Identité Visuelle",
      desc: "Logos, affiches, flyers, chartes graphiques et visuels pour réseaux sociaux de haute qualité.",
      icon: "pen-tool"
    },
    {
      id: "marketing",
      title: "Marketing Digital & Community Management",
      desc: "Gestion de vos réseaux sociaux, stratégie d'acquisition, création de contenu et valorisation de marque.",
      icon: "share-2"
    }
  ]
};

// Modèle d'exemple alternatif pour le générateur "Créer un CV pareil"
const samplePresetProfile = {
  fullName: "AMANI KOFFI ALEXANDRE",
  title: "Designer UI/UX & Développeur Front-End",
  subtitle: "Expertise Figma, React, Tailwind CSS et interfaces interactives haut de gamme",
  email: "alex.amani@example.com",
  phone: "+225 05 12 34 56 78",
  location: "Abidjan, Côte d'Ivoire",
  availability: "Ouvert aux missions freelance et contrats créatifs",
  bio: "Concepteur passionné d'expériences digitales fluides et captivantes. Alliant la rigueur du code front-end et l'élégance du design graphique pour transformer des idées ambitieuses en produits numériques d'exception.",
  stats: [
    { label: "Années d'Expérience", value: "4+" },
    { label: "Projets Déployés", value: "25+" },
    { label: "Taux de Satisfaction", value: "100%" },
    { label: "Distinctions", value: "3" }
  ],
  skillsCategories: [
    {
      category: "Design & Prototypage",
      icon: "palette",
      skills: [
        { name: "Figma & Design Systems", level: 95 },
        { name: "UI/UX Research & Wireframing", level: 90 },
        { name: "Micro-animations & Prototypage", level: 85 }
      ]
    },
    {
      category: "Développement Front-End",
      icon: "code",
      skills: [
        { name: "React / Next.js / TypeScript", level: 90 },
        { name: "Tailwind CSS & CSS Moderne", level: 95 },
        { name: "Responsive & Performance Web", level: 92 }
      ]
    }
  ],
  badges: ["UI/UX Designer", "Front-End Dev", "Figma", "React", "Design Systems"],
  experience: [
    {
      period: "2023 — Présent",
      duration: "En poste",
      role: "Lead UI Designer",
      company: "Studio Digital Abidjan",
      location: "Abidjan",
      type: "CDI",
      description: "Supervision des interfaces utilisateurs pour des startups fintech et plateformes e-commerce.",
      tasks: [
        "Création de maquettes haute-fidélité et conduite de tests utilisateurs.",
        "Intégration front-end réactive et déploiement continu."
      ]
    }
  ],
  education: [
    {
      period: "2019 — 2021",
      degree: "Master en Création Numérique",
      field: "Design Graphique & Web",
      school: "Institut Supérieur des Arts & Métiers",
      location: "Abidjan",
      highlight: "Mention Très Bien avec félicitations du jury."
    }
  ],
  hobbies: [
    { name: "Photographie", description: "Architecture urbaine et portraits en lumière naturelle.", icon: "camera" },
    { name: "Musique", description: "Production sonore et beatmaking.", icon: "music" }
  ],
  socials: [
    { name: "LinkedIn", url: "https://linkedin.com", icon: "linkedin", label: "LinkedIn" },
    { name: "WhatsApp", url: "https://wa.me/2250512345678", icon: "whatsapp", label: "WhatsApp" }
  ]
};

// Export global pour utilisation directe dans le navigateur
if (typeof window !== "undefined") {
  window.defaultProfile = defaultProfile;
  window.samplePresetProfile = samplePresetProfile;
}

