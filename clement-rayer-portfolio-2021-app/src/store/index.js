import { createStore } from 'vuex'

export default createStore({
  state: {
    projectList: [
      {
        name: "Ranking NBA",
        type: "Projet personnel",
        date: 2021,
        skills: ["développement front-end", "développement back-end", "design"],
        thumbnail: {
          source: "/projets/ranking-nba/nba-thumbnail.png",
          alt: "Icone projet Ranking NBA"
        },
        cover: {
          source: "/projets/ranking-nba/nba-cover.png",
          alt: "Visuel du projet Ranking NBA"
        },
        intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere sed enim, egestas ut adipiscing enim. Tristique quis viverra arcu volutpat. Mattis id dignissim non dolor. Ac mi lorem ut mi amet quis.",
        technicalScope: ["HTML", "CSS", "JS vanilla"],
        url: 'https://clementrayer.fr/nba-ranking'
      },
      {
        name: "La youtuberie",
        type: "Projet personnel",
        date: 2021,
        skills: ["développement front-end", "développement back-end", "design"],
        thumbnail: {
          source: "/projets/youtuberie/youtuberie-thumbnail.png",
          alt: "Icone projet Ranking NBA"
        },
        cover: {
          source: "/projets/ranking-nba/nba-cover.png",
          alt: "Visuel du projet Ranking NBA"
        },
        intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere sed enim, egestas ut adipiscing enim. Tristique quis viverra arcu volutpat. Mattis id dignissim non dolor. Ac mi lorem ut mi amet quis.",
        technicalScope: ["HTML", "CSS", "JS vanilla"],
        url: 'https://clementrayer.fr/nba-ranking'
      },
      {
        name: "Beway",
        type: "Freelance",
        date: 2020,
        skills: ["développement front-end", "développement back-end", "design"],
        thumbnail: {
          source: "/projets/beway/beway-thumbnail.png",
          alt: "Icone projet Ranking NBA"
        },
        cover: {
          source: "/projets/ranking-nba/nba-cover.png",
          alt: "Visuel du projet Ranking NBA"
        },
        intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere sed enim, egestas ut adipiscing enim. Tristique quis viverra arcu volutpat. Mattis id dignissim non dolor. Ac mi lorem ut mi amet quis.",
        technicalScope: ["HTML", "CSS", "JS vanilla"],
        url: 'https://clementrayer.fr/nba-ranking'
      },
      {
        name: "Stellaria",
        type: "Projet étudiant",
        date: 2017,
        skills: ["développement front-end", "développement back-end", "design"],
        thumbnail: {
          source: "/projets/stellaria/stellaria-thumbnail.png",
          alt: "Icone projet Ranking NBA"
        },
        cover: {
          source: "/projets/ranking-nba/nba-cover.png",
          alt: "Visuel du projet Ranking NBA"
        },
        intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere sed enim, egestas ut adipiscing enim. Tristique quis viverra arcu volutpat. Mattis id dignissim non dolor. Ac mi lorem ut mi amet quis.",
        technicalScope: ["HTML", "CSS", "JS vanilla"],
        url: 'https://clementrayer.fr/nba-ranking'
      },
      {
        name: "Wouah ce projet a un nom maxi long vie de oim",
        type: "Projet personnel",
        date: 2021,
        skills: ["développement front-end", "développement back-end", "design"],
        thumbnail: {
          source: "/projets/ranking-nba/nba-thumbnail.png",
          alt: "Icone projet Ranking NBA"
        },
        cover: {
          source: "/projets/ranking-nba/nba-cover.png",
          alt: "Visuel du projet Ranking NBA"
        },
        intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere sed enim, egestas ut adipiscing enim. Tristique quis viverra arcu volutpat. Mattis id dignissim non dolor. Ac mi lorem ut mi amet quis.",
        technicalScope: ["HTML", "CSS", "JS vanilla"],
        url: 'https://clementrayer.fr/nba-ranking'
      }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
