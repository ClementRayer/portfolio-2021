import { createStore } from 'vuex'

export default createStore({
  state: {
    burgerMenuOpen: false,
    projectList: [
      {
        id: 0,
        name: "Ranking NBA",
        projectPage: 'ranking-nba',
        type: "Projet personnel",
        date: 2021,
        skills: "développement, design",
        thumbnail: {
          source: "/projets/ranking-nba/nba-thumbnail.png",
          alt: "Logo du projet Ranking NBA"
        },
        cover: {
          source: "/projets/ranking-nba/nba-cover.png",
          alt: "Visuel du projet Ranking NBA"
        },
        introductionText: "A l'approche de la saison NBA, chacun y va de ses pronostics pour classer les équipes à la fin de la saison régulière. J'ai profité de mon temps libre pour développer ce site, en creusant les canvas HTML, pour proposer une façon simplifiée de trier les équipes NBA.",
        basicImagePlusText: {
          source: "/projets/ranking-nba/nba-cover-full.png",
          alt: "Aperçu du projet Ranking NBA",
          text: "Chaque année sur les réseaux sociaux, de nombreux fans de basket pronostiquent le classement des deux conférences de la NBA, pour définir qui ira en play-offs. Ces listes sont généralement tapées à la va-vite dans des commentaires, ou des captures d'écran de bloc-notes. Chacun les écrit à sa façon, ce qui rend compliqué leur lecture. Sur ce mini site c'est très simple, il suffit de sélectionner dans l'ordre les équipes de l'ouest et de l'est, de noter le nombre de victoir de chacune si le coeur vous en dit, et vous pouvez l'exporter dans une image très simple à partager."
        },
        technicalScope: ["HTML", "CSS", "JS Vanilla", "Canvas"],
        threePanelsDetails:{
          1: {
            title: "sélection des équipes",
            source: "/projets/ranking-nba/detail-1-choix-equipe.jpg",
            alt: "Sélection des équipes NBA",
            description: "Les deux conférences comptent 15 équipes chacunes. Un clic sur une place ouvre la liste des équipes de la conférence, en choisir une la positionne à cette place."
          },
          2: {
            title: "sélection du score",
            source: "/projets/ranking-nba/detail-2-choix-score.jpg",
            alt: "Sélection du score des équipes NBA",
            description: "Il est possible d'activer et désactiver le nombre de victoire, ce qui adapte l'image et les choix que l'utilisateur peut faire. S'il est activé, l'utilisateur entre le nombre de victoires qu'il pronostique, et le bilan victoire/défaite sera calculé et ajouté à l'export."
          },
          3: {
            title: "export",
            source: "/projets/ranking-nba/details-3-export.jpg",
            alt: "Exemple d'export de classement",
            description: "Lorsque l'utilisateur valide ses pronostics, il peut voir un aperçu de ceux-ci dans le tableau qu'il peut ensuite exporter au format PNG. Les noms d'équipes, places et résultats sont placés sur le fond via un canvas HTML."
          },
        },
        url: 'https://clementrayer.fr/nba-ranking'
      },
      {
        id: 1,
        name: "La youtuberie",
        projectPage: 'la-youtuberie',
        type: "Projet personnel",
        date: 2021,
        skills: "développement, design",
        thumbnail: {
          source: "/projets/youtuberie/youtuberie-thumbnail.png",
          alt: "Logo du projet La Youtuberie"
        },
        cover: {
          source: "/projets/youtuberie/youtuberie-cover.png",
          alt: "Visuel du projet La Youtuberie"
        },
        introductionText: "Tout le monde a dû un jour se creuser la tête pour trouver un pseudonyme à utiliser... Plus la peine grâce La Youtuberie, qui génère pour vous des alias aussi suaves que drolatiques.",
        basicImagePlusText: {
          source: "/projets/youtuberie/youtuberie-apercu.png",
          alt: "Aperçu du projet La Youtuberie",
          text: "Ce mini-site génère un nom composé de deux parties: généralement un nom d'animal ou de végétal, assorti d'un qualificatif. Rien de plus simple à utiliser: un bouton permet de générer un nom si l'actuel ne convient pas à l'utilisateur, lorsque celui-ci est satisfait un autre bouton permet de copier le nom généré dans le presse papier, prêt à l'usage! La base de donnée contient 150 éléments qui permettent de générer plus 5000 pseudonymes plus exquis les uns que les autres."
        },
        technicalScope: ["HTML", "CSS", "JS vanilla"],
        url: 'https://clementrayer.fr/youtuberie/'
      },
      {
        id: 2,
        name: "Beway",
        projectPage: 'beway',
        type: "Freelance",
        date: 2020,
        skills: "développement",
        thumbnail: {
          source: "/projets/beway/beway-thumbnail.png",
          alt: "Logo du du projet Beway"
        },
        cover: {
          source: "/projets/beway/beway-cover.jpg",
          alt: "Visuel du projet Beway"
        },
        introductionText: "Beway est un studio de création digital réalisant des sites web, animations & illustrations. Dans le cadre de la refonte de leur site, ils ont fait appel a moi pour modifier des pages de leur site et créer un site dédié à leurs activités dans le domaine musical.",
        basicImagePlusText: {
          source: "/projets/beway/beway-apercu.jpg",
          alt: "Aperçu du projet Beway",
          text: "J'ai eu l'opportunité de travailler en freelance avec l'agence Beway pour participer à la refonte de leur site corporate. Durant cette mission, j'ai développé la nouvelle version de leur page d'accueil, leur page \"à propos\" ainsi que les pages projets. Par la suite, ils m'ont confié quelques tâches de webmastering (passage de site en https, gestion de certificat SSL et de la maintenance), puis le développement de leur site Beway Music, dédié à leurs activités musicales."
        },
        technicalScope: ["HTML", "SCSS", "JS", "Wordpress"],
        threePanelsDetails:{
          1: {
            title: "homepage",
            source: "/projets/beway/beway-details-1.jpg",
            alt: "Refonte de la page d'accueil",
            description: "Dans l'optique de dynamiser la page d'accueil, un nouveau bloc immersif à été ajouté en tête de page, le bloc contact à été refondu et le reste de la page modernisé."
          },
          2: {
            title: "pages projets",
            source: "/projets/beway/beway-details-2.jpg",
            alt: "Refonte de la page projets",
            description: "Les pages projets ont été refondues pour intégrer plus d'images et mettre plus en avant le travail du studio. La partie responsive à également été modifiée pour être plus graphique."
          },
          3: {
            title: "création du site Music",
            source: "/projets/beway/beway-details-3.jpg",
            alt: "Création du site Beway Music",
            description: "Afin de mettre en avant le travail de Beway dans le monde musical, j'ai créé un site basé sur celui du studio, adapté pour les thématiques et projets à couvrir."
          },
        },
        url: 'https://beway.studio/'
      },
      {
        id: 3,
        name: "Stellaria",
        projectPage: 'Stellaria',
        type: "Projet étudiant",
        date: 2017,
        skills: "gestion de projet, direction technique, développement",
        thumbnail: {
          source: "/projets/stellaria/stellaria-thumbnail.png",
          alt: "Logo du du projet Stellaria"
        },
        cover: {
          source: "/projets/stellaria/stellaria-cover.jpg",
          alt: "Visuel du projet Stellaria"
        },
        introductionText: "Durant ma dernière année de bachelor, j'ai réalisé un projet de site en équipe. Nous avons à cette occasion créé un planétarium en réalité virtuelle (compatible avec les casques VR) qui permet de se plonger dans le système solaire et d'en apprendre plus à son sujet.",
        basicImagePlusText: {
          source: "/projets/stellaria/stellaria-thumbnail.png",
          alt: "Aperçu du projet Stellaria",
          text: "Le seul brief sur ce projet était de réaliser un projet pouvant concourrir aux Awwwards, il se doit donc d'être innovant techniquement, tout en étant une proposition artistique forte. Ce projet étudiant à la particularité d'être effectué dans un format professionnel: notre équipe était une agence, confrontée à un client, ses exigences et les contraintes qu'elles induisent. Initialement prévu à un rôle de chef de projet et directeur technique, j'ai dû par la force des choses développer tout le site moi-même, en continuant à gérer le projet et la relation client."
        },
        technicalScope: ["HTML", "PHP", "SCSS", "JS", "VR (three.js/A-frame"],
        threePanelsDetails:{
          1: {
            title: "immersion",
            source: "/projets/stellaria/stellaria-details-1.jpg",
            alt: "Aperçu du planétarium",
            description: "Basé sur la réalité virtuelle, Stellaria permet de se déplacer librement dans le système solaire, de voir l'orbite des planètes mais aussi de mettre en pause leur déplacement pour les observer."
          },
          2: {
            title: "pédagogie",
            source: "/projets/stellaria/stellaria-details-2.jpg",
            alt: "Panneau d'informations sur le soleil",
            description: "Au survol de chaque astre, un panneau d'informations s'ouvre. Ceux-ci contiennent des informations formelles sur l'objet (taille, nature, vitesse de déplacement...) ainsi que quelques fun facts le concernant."
          },
          3: {
            title: "contenu adaptable",
            source: "/projets/stellaria/stellaria-details-3.jpg",
            alt: "Choix entre un contenu adulte ou enfant",
            description: "A l'arrivée sur le site, les utilisateurs peuvent choisir de voir un contenu adapté aux enfants ou aux adultes: le premier est plus ludique et abordable, tandis que le second est plus factuel, plus pointu."
          },
        },
        url: 'https://clementrayer.fr/stellaria/'
      }
    ],
    socialsList: [
      {
          link: 'mailto:clement.rayer@gmail.com',
          title: 'Mail',
          source: "mail-logo.png",
          alt: 'Mail Logo'
      },
      {
          link: 'https://www.linkedin.com/in/clement-rayer/',
          title: 'Linkedin',
          source: "linkedin-logo.png",
          alt: 'Linkedin Logo'
      },
      {
          link: 'https://github.com/ClementRayer',
          title: 'GitHub',
          source: "github-logo.png",
          alt: 'GitHub Logo'
      }
  ],
  },
  mutations: {
    TOGGLE_MENU(){
      this.state.burgerMenuOpen = !this.state.burgerMenuOpen
    },
    FORCE_MENU_CLOSE(){
      this.state.burgerMenuOpen = false;
    }
  },
  actions: {
  },
  modules: {
  }
})
