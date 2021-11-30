import { createStore } from 'vuex'

export default createStore({
  state: {
    projectList: [
      {
        id: 0,
        name: "Ranking NBA",
        projectPage: 'ranking-nba',
        type: "Projet personnel",
        date: 2021,
        skills: "développement front-end, développement back-end, design",
        thumbnail: {
          source: "/projets/ranking-nba/nba-thumbnail.png",
          alt: "Icone projet Ranking NBA"
        },
        cover: {
          source: "/projets/ranking-nba/nba-cover.png",
          alt: "Visuel du projet Ranking NBA"
        },
        introductionText: "A l'approche de la saison NBA, chacun y va de ses pronostics. Pour vous simplifier la vie, ici il suffit de choisir les équipes dans l'ordre. Vous pouvez même indiquer le nombre de victoires estimées si le coeur vous en dit. Finies les listes tapées à la va-vite et les captures d'écran de bloc-note!",
        technicalScope: ["HTML", "CSS", "JS vanilla"],
        url: 'https://clementrayer.fr/nba-ranking'
      },
      {
        id: 1,
        name: "La youtuberie",
        projectPage: 'la-youtuberie',
        type: "Projet personnel",
        date: 2021,
        skills: "développement front-end, développement back-end, design",
        thumbnail: {
          source: "/projets/youtuberie/youtuberie-thumbnail.png",
          alt: "Icone projet Ranking NBA"
        },
        cover: {
          source: "/projets/ranking-nba/nba-cover.png",
          alt: "Visuel du projet Ranking NBA"
        },
        introductionText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere sed enim, egestas ut adipiscing enim. Tristique quis viverra arcu volutpat. Mattis id dignissim non dolor. Ac mi lorem ut mi amet quis.",
        technicalScope: ["HTML", "CSS", "JS vanilla"],
        url: 'https://clementrayer.fr/nba-ranking'
      },
      {
        id : 2,
        name: "Beway",
        projectPage: 'beway',
        type: "Freelance",
        date: 2020,
        skills: "développement front-end, développement back-end, design",
        thumbnail: {
          source: "/projets/beway/beway-thumbnail.png",
          alt: "Icone projet Ranking NBA"
        },
        cover: {
          source: "/projets/ranking-nba/nba-cover.png",
          alt: "Visuel du projet Ranking NBA"
        },
        introductionText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere sed enim, egestas ut adipiscing enim. Tristique quis viverra arcu volutpat. Mattis id dignissim non dolor. Ac mi lorem ut mi amet quis.",
        technicalScope: ["HTML", "CSS", "JS vanilla"],
        url: 'https://clementrayer.fr/nba-ranking'
      },
      {
        id: 3,
        name: "Stellaria",
        projectPage: 'stellaria',
        type: "Projet étudiant",
        date: 2017,
        skills: "développement front-end, développement back-end, design",
        thumbnail: {
          source: "/projets/stellaria/stellaria-thumbnail.png",
          alt: "Icone projet Ranking NBA"
        },
        cover: {
          source: "/projets/ranking-nba/nba-cover.png",
          alt: "Visuel du projet Ranking NBA"
        },
        introductionText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere sed enim, egestas ut adipiscing enim. Tristique quis viverra arcu volutpat. Mattis id dignissim non dolor. Ac mi lorem ut mi amet quis.",
        technicalScope: ["HTML", "CSS", "JS vanilla"],
        url: 'https://clementrayer.fr/nba-ranking'
      },
      {
        id: 4,
        name: "Wouah ce projet a un nom maxi long vie de oim",
        projectPage: 'maxi-long-vie-de-oim',
        type: "Projet personnel",
        date: 2021,
        skills: "développement front-end, développement back-end, design",
        thumbnail: {
          source: "/projets/ranking-nba/nba-thumbnail.png",
          alt: "Icone projet Ranking NBA"
        },
        cover: {
          source: "/projets/ranking-nba/nba-cover.png",
          alt: "Visuel du projet Ranking NBA"
        },
        introductionText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere sed enim, egestas ut adipiscing enim. Tristique quis viverra arcu volutpat. Mattis id dignissim non dolor. Ac mi lorem ut mi amet quis.",
        technicalScope: ["HTML", "CSS", "JS vanilla"],
        url: 'https://clementrayer.fr/nba-ranking'
      }
    ],
    howManyProjects : 5
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
