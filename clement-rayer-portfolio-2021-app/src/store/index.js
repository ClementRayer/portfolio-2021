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
          source: "../../public/ranking-nba/nba-thumbnail.png",
          alt: "Icone projet Ranking NBA"
        },
        cover: {
          source: "../../public/ranking-nba/nba-cover.png",
          alt: "Visuel du projet Ranking NBA"
        },
        intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere sed enim, egestas ut adipiscing enim. Tristique quis viverra arcu volutpat. Mattis id dignissim non dolor. Ac mi lorem ut mi amet quis.",
        technicalScope: ["HTML", "CSS", "JS vanilla"],
        url: 'https://clementrayer.fr/nba-ranking'
      },
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
