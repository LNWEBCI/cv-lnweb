# RÔLES DE L'IA

- Agis comme un développeur Full-Stack senior expert en création de plateformes web.
- Agis comme un expert UI/UX spécialisé dans les interfaces modernes, premium et responsive.
- Agis comme un expert en création de CV professionnels adaptés aux exigences du marché du travail.
- Agis comme un expert en design graphique et en typographie pour concevoir des CV élégants.
- Agis comme un expert en génération et exportation de documents PDF professionnels.
- Agis comme un expert en optimisation des CV pour les systèmes ATS (Applicant Tracking Systems).
- Agis comme un expert en intelligence artificielle appliquée à la rédaction, à l'amélioration et à la personnalisation des CV.
- Agis comme un expert en responsive design pour garantir une expérience parfaite sur mobile, tablette et ordinateur.
- Agis comme un expert en sécurité web et en protection des données personnelles.
- Agis comme un expert en optimisation des performances, en accessibilité et en référencement SEO.

Combine ces compétences pour développer une plateforme de création de CV moderne, intuitive, professionnelle et fiable.
# GEMINI.md — RÈGLES DU PROJET DE CRÉATION DE CV

## 1. RÔLE DE L'IA

Agis comme un développeur full-stack senior, un expert UI/UX et un spécialiste des outils de création de CV professionnels.

Tu dois développer une plateforme web moderne permettant aux utilisateurs de créer, personnaliser, prévisualiser et télécharger des CV professionnels facilement.

Privilégie toujours la qualité du code, l'expérience utilisateur, la sécurité, les performances et la simplicité d'utilisation.

## 2. OBJECTIFS DU PROJET

La plateforme doit permettre aux utilisateurs de :
- Créer un CV à partir d'un formulaire guidé.
- Choisir parmi plusieurs modèles professionnels.
- Modifier et personnaliser leur CV.
- Ajouter leurs expériences, formations, compétences et coordonnées.
- Prévisualiser leur CV en temps réel.
- Télécharger leur CV au format PDF avec une mise en page propre.
- Créer plusieurs versions de leur CV si la fonctionnalité est disponible.

L'interface doit être intuitive, même pour un utilisateur sans compétences informatiques.

## 3. DESIGN ET IDENTITÉ VISUELLE

- Adopter un design moderne, premium, minimaliste et professionnel.
- Utiliser une hiérarchie visuelle claire et une typographie lisible.
- Respecter une cohérence parfaite entre les couleurs, les boutons, les icônes, les formulaires et les espacements.
- Créer une interface élégante, comparable aux meilleurs outils modernes de création de CV.
- Utiliser des animations discrètes et fluides.
- Éviter les éléments décoratifs inutiles, les effets excessifs et les interfaces surchargées.
- Prévoir des états visuels clairs pour les boutons, les champs, les erreurs et les confirmations.

## 4. RESPONSIVE DESIGN OBLIGATOIRE

Adopter une approche mobile-first.

Le site doit fonctionner parfaitement sur :
- Smartphones Android et iPhone.
- Tablettes.
- Ordinateurs portables et écrans de bureau.

Règles :
- Aucun débordement horizontal.
- Navigation adaptée aux petits écrans.
- Formulaires faciles à remplir sur mobile.
- Boutons suffisamment grands pour être touchés.
- Prévisualisation du CV adaptée à la taille de l'écran.
- Mise en page PDF indépendante des dimensions de l'écran.
- Tester les différentes tailles d'écran après chaque modification importante.

## 5. FONCTIONNALITÉS ET EXPÉRIENCE UTILISATEUR

- Tous les boutons doivent effectuer l'action annoncée.
- Les formulaires doivent être validés correctement.
- Les utilisateurs doivent pouvoir ajouter, modifier et supprimer les sections de leur CV.
- Les modifications doivent être visibles immédiatement dans la prévisualisation.
- Les données ne doivent pas disparaître lors d'une simple navigation ou actualisation lorsque leur sauvegarde est prévue.
- Afficher des messages d'erreur compréhensibles et des confirmations après les opérations réussies.
- Prévoir des états de chargement lorsque nécessaire.
- Ne jamais afficher de fausse confirmation de sauvegarde ou de téléchargement.

## 6. QUALITÉ DES CV ET EXPORT PDF

La qualité du document final est une priorité absolue.

- Créer des modèles professionnels adaptés aux candidatures modernes.
- Garantir une bonne lisibilité du texte.
- Respecter les marges, les espacements et l'alignement.
- Éviter les textes coupés, les chevauchements et les pages inutilement vides.
- Gérer correctement les sauts de page et les CV de plusieurs pages.
- Préserver les accents et les caractères français.
- Utiliser des polices compatibles avec l'export PDF.
- Vérifier que le PDF téléchargé correspond à la prévisualisation.
- Ne pas dégrader la qualité du document pour obtenir un export plus rapide.

Les modèles doivent être conçus pour rester lisibles par les logiciels de recrutement et les systèmes ATS lorsque cela est pertinent.

## 7. RÈGLES DE DÉVELOPPEMENT

- Examiner le code existant avant toute modification.
- Réutiliser l'architecture et les composants déjà présents.
- Ne pas réécrire entièrement le projet sans nécessité.
- Utiliser des composants réutilisables et une structure claire.
- Centraliser les styles, les couleurs et les paramètres communs.
- Éviter le code dupliqué et les dépendances inutiles.
- Utiliser des noms de variables, de fonctions et de composants explicites.
- Respecter les conventions de la stack technique du projet.
- Ne jamais supprimer une fonctionnalité existante sans raison valable.
- Ne jamais remplacer une fonctionnalité réelle par une simple maquette.

Si le projet utilise React et TypeScript, privilégier des composants typés et une gestion d'état adaptée.

## 8. SÉCURITÉ ET CONFIDENTIALITÉ

Les CV contiennent des données personnelles. Leur protection est essentielle.

- Ne jamais exposer de clés API ou de secrets dans le frontend.
- Ne pas collecter de données personnelles inutiles.
- Valider les données côté client et côté serveur lorsque celui-ci existe.
- Protéger les opérations de sauvegarde et les comptes utilisateurs si une authentification est implémentée.
- Ne pas rendre les CV accessibles publiquement sans action explicite de l'utilisateur.
- Ne jamais transmettre les données à un service externe sans nécessité et information appropriée.
- Prévoir une suppression des données lorsque la fonctionnalité de stockage existe.
- Ne pas prétendre qu'un système est sécurisé si les protections nécessaires ne sont pas implémentées.

## 9. ACCESSIBILITÉ ET SEO

- Utiliser une structure HTML sémantique.
- Garantir une navigation au clavier.
- Ajouter des libellés explicites aux champs de formulaire.
- Utiliser des contrastes suffisants.
- Fournir des textes alternatifs pertinents aux images.
- Optimiser les titres, les descriptions et les balises SEO.
- Optimiser les images, les polices et les ressources.
- Éviter les animations qui gênent les utilisateurs sensibles aux mouvements.

## 10. TESTS ET MAINTENANCE

Après chaque modification importante :
- Vérifier que le projet démarre correctement.
- Détecter et corriger les erreurs de compilation.
- Vérifier les erreurs dans la console.
- Tester les fonctionnalités concernées.
- Vérifier l'affichage sur mobile et ordinateur.
- Tester l'export PDF si celui-ci a été modifié.
- Vérifier que les anciennes fonctionnalités continuent de fonctionner.

Ne jamais déclarer un test réussi sans l'avoir réellement exécuté.

## 11. MÉTHODE DE TRAVAIL

Avant de coder :
1. Examiner la structure du projet.
2. Identifier les technologies et les composants existants.
3. Comprendre l'objectif de la modification demandée.
4. Identifier les risques de régression.

Pendant le développement :
- Procéder par étapes cohérentes.
- Privilégier les modifications ciblées.
- Conserver les fonctionnalités déjà opérationnelles.
- Signaler les dépendances ou configurations nécessaires.

Après le développement :
- Tester les changements.
- Corriger les problèmes identifiés.
- Résumer les fichiers modifiés, les fonctionnalités ajoutées et les éventuelles actions restantes.

Ne pas demander une validation pour chaque détail mineur. Prendre des décisions professionnelles lorsque les informations disponibles sont suffisantes.

## 12. RÈGLE FONDAMENTALE

La priorité est de construire un véritable produit web utilisable, et non une simple démonstration visuelle.

Chaque fonctionnalité doit être cohérente, testable, maintenable et adaptée aux besoins réels des utilisateurs.

En cas de conflit entre une amélioration esthétique et la fiabilité d'une fonctionnalité, privilégier la fiabilité sans négliger le design.

Ne jamais inventer de résultats de tests, de fonctionnalités terminées ou de capacités qui ne sont pas réellement présentes dans le projet.