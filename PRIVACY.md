 # Politique de confidentialité — Police Management

**Dernière mise à jour : 13 septembre 2026 (version 2026.09.13)**

Police Management est une application de coordination du travail destinée au personnel policier du Canada. Elle ne vise aucun corps de police en particulier. La présente politique est rédigée conformément à la **Loi modernisant des dispositions législatives en matière de protection des renseignements personnels (« Loi 25 », Québec)** et décrit quels renseignements l'application traite, comment ils sont protégés et quels sont vos droits.

👉 **Visitez le site web officiel de l'application : https://anthonysmith120.github.io/P.M-Website/** — fonctionnalités, nouveautés, soutien et politique de confidentialité complète.

## 1. Responsable de la protection des renseignements personnels

Conformément à la Loi 25, **Anthony Smith, propriétaire-administrateur de l'application**, agit comme responsable de la protection des renseignements personnels. L'application est exploitée à titre indépendant et n'est affiliée à aucune entreprise ni à aucun corps de police. Pour toute question, demande d'exercice de droits ou plainte relative à vos renseignements personnels : **hockey007smith@hotmail.ca** ou le serveur Discord de soutien : **https://discord.gg/bgrJVwPqyV**.

## 2. Consentement

Lors de la création de votre compte, votre consentement à la collecte et à l'utilisation de vos renseignements est recueilli de façon **manifeste, libre et éclairée** (case à cocher explicite, jamais pré-cochée). La date de votre consentement et la version de la politique acceptée sont conservées comme preuve. Vous pouvez **retirer votre consentement à tout moment** en supprimant votre compte (section 10).

## 3. Renseignements recueillis et finalités

| Renseignement | Finalité |
|---|---|
| Profil : prénom, nom, courriel, matricule, grade, corps de police, unité/poste, équipe | Créer et gérer votre compte, contrôler l'accès |
| Horaire, rotation et catégories de quart | Afficher votre calendrier et, si vous le partagez, l'horaire d'équipe |
| Photo de profil (facultative) | Personnaliser votre profil |
| Publications au Forum : titre, texte et nom d'auteur des sujets et réponses | Permettre les échanges entre membres d'un même corps de police |
| Idées : demandes de nouveautés, réponses aux sondages et votes (texte, nom d'auteur, choix de vote) | Recueillir, soutenir et prioriser les suggestions d'amélioration |
| Commentaires envoyés à l'administrateur | Soutien et amélioration |
| Clé publique de chiffrement (Curve25519) | Chiffrement de bout en bout des contenus partagés (photo, horaire, forum, idées) |
| Mot de passe applicatif | Sécuriser l'accès — conservé uniquement sous forme de hachage cryptographique salé |
| Horodatage de dernière activité | Indicateur en ligne / hors ligne, visible uniquement par l'administrateur |

L'application n'utilise **aucun** outil publicitaire, **aucun** service d'analyse ou de mesure, **aucun** profilage, et ne vend ni ne communique vos renseignements à des tiers à des fins commerciales.

## 4. Hébergement à l'extérieur du Québec

Vos renseignements sont hébergés chez **Apple (iCloud/CloudKit)**, sur des serveurs situés **à l'extérieur du Québec, notamment aux États-Unis**. Apple offre des mesures de protection reconnues (chiffrement en transit et au repos, certifications de sécurité, engagements contractuels de protection des données). En créant un compte, vous consentez à cette communication hors Québec.

Depuis le 1ᵉʳ septembre 2026, **aucun renseignement personnel n'est traité par Google** : les services Firebase (Authentication, Firestore) ont été retirés de l'application. Le site web de l'application (pages statiques, sans compte ni collecte) est hébergé sur **GitHub Pages**.

## 5. Paramètres de confidentialité par défaut

Conformément à la Loi 25, les réglages offrant le **plus haut niveau de confidentialité sont activés par défaut** : aucune collecte d'analyse ou de mesure, aucun traçage publicitaire, notifications facultatives (désactivées tant que vous ne les autorisez pas), partage d'horaire à votre discrétion.

## 6. Cloisonnement par corps de police

Les données sont cloisonnées : les membres d'un corps de police ne voient que les renseignements et l'horaire partagé de leur propre corps. Aucun corps de police ne peut consulter les données d'un autre.

## 7. Localisation, biométrie et calendrier

- **Localisation** : votre position GPS est utilisée uniquement sur votre appareil, pour vous situer sur la carte et trouver le repère le plus proche. Elle n'est **ni enregistrée ni transmise**. Vous pouvez couper toute utilisation de la position dans l'application (Réglages → Confidentialité), en plus de l'autorisation gérée par iOS.
- **Face ID / biométrie** : l'authentification biométrique est effectuée entièrement par iOS sur votre appareil; l'application n'a jamais accès à vos données biométriques.
- **Calendrier** : l'export de vos quarts vers le Calendrier d'Apple sert uniquement à créer ces événements sur votre appareil; aucune donnée de calendrier n'est lue ni transmise.

## 8. Sécurité

Les données sont chiffrées **en transit et au repos** par Apple. De plus, l'application chiffre elle-même (**AES-256-GCM**) avant l'envoi : la photo de profil, l'horaire partagé avec votre poste, les publications du forum (titre, texte, nom d'auteur), les idées et suggestions, ainsi que les commentaires envoyés à l'administrateur. Une clé publique (**Curve25519**) est associée à votre compte pour le chiffrement de bout en bout des contenus partagés. Le mot de passe applicatif n'est jamais conservé en clair : seul un **hachage SHA-256 salé** est stocké. L'accès à l'application peut être verrouillé par Face ID.

## 9. Qui voit quoi

- Les membres de votre **unité**, au sein de votre corps de police, voient votre nom, votre équipe et votre horaire partagé (sans vos notes personnelles ni vos événements personnels).
- Les membres de votre **corps de police** voient vos publications au **Forum** et vos **idées/demandes** (avec votre nom d'auteur), ainsi que les votes de façon agrégée. Aucun autre corps de police n'y a accès (cloisonnement).
- L'**administrateur** voit les profils, l'état des comptes, les commentaires, les publications du forum et les idées, et est avisé lorsqu'un utilisateur modifie son profil.
- Personne d'autre n'a accès à vos renseignements.

## 10. Conservation, suppression et retrait du consentement

- Vos renseignements sont conservés tant que votre compte est actif.
- Vous pouvez **supprimer votre compte** à tout moment dans l'application (Réglages → Modifier mon profil → Supprimer mon compte) : votre profil et votre horaire partagé sont alors effacés définitivement. La suppression de votre compte vaut retrait de votre consentement.
- Vous pouvez supprimer vos propres publications au forum et vos idées; l'administrateur peut également les retirer.
- Les commentaires déjà envoyés à l'administrateur peuvent subsister; vous pouvez en demander la suppression au responsable.
- L'administrateur peut également supprimer un compte, ce qui en retire l'accès.

## 11. Vos droits (Loi 25)

Vous pouvez demander en tout temps :

- l'**accès** à vos renseignements personnels;
- leur **rectification** s'ils sont inexacts ou incomplets;
- leur **suppression** ou la **cessation de leur diffusion** (désindexation);
- leur **communication dans un format technologique structuré** (portabilité).

Adressez votre demande au responsable via le canal indiqué à la section 1. Une réponse vous sera donnée **dans les 30 jours**. Si vous êtes insatisfait du traitement de votre demande, vous pouvez porter plainte à la **Commission d'accès à l'information du Québec** : www.cai.gouv.qc.ca.

## 12. Incidents de confidentialité

Tout incident de confidentialité (accès, utilisation ou communication non autorisés d'un renseignement personnel) est consigné dans un **registre des incidents**. Si un incident présente un **risque de préjudice sérieux**, la Commission d'accès à l'information et les personnes concernées en seront avisées avec diligence, et des mesures raisonnables seront prises pour réduire le risque.

## 13. Avertissement d'usage

L'application rappelle à chaque ouverture qu'aucune information confidentielle, aucune photo de banque de données policière ni aucune donnée sur des civils ne doit y être partagée. Les contenus publiés relèvent de la responsabilité de leur auteur.

## 14. Contenu de référence (lois)

Les textes de loi consultables dans l'application proviennent de sources officielles gouvernementales et sont fournis à titre de référence. En cas de doute, le texte officiel en vigueur prévaut.

## 15. Modifications

La présente politique est publiée sur le site web de l'application, à l'adresse **https://anthonysmith120.github.io/P.M-Website/confidentialite.html**. Toute modification y sera publiée et signalée dans l'application. En cas de changement important aux finalités ou aux renseignements recueillis, un nouveau consentement sera demandé.
