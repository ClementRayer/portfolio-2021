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
        basicImagePlusText: {
          source: "/projets/ranking-nba/nba-cover.png",
          alt: "Icone projet Ranking NBA",
          text: "Lorraine Ipsum Moulins-Saint-Hubert, Marainville-sur-Madon Lorry-lès-Metz Errouville, Barbas Montsec Renauvoid Crion Fouchères-aux-Bois Kalhausen Lachapelle Velaines Harol Minorville Flin Dampvitoux Faulquemont Biffontaine Villers-lès-Moivrons Folkling Aboncourt Neuvilly-en-Argonne Sturzelbronn Mont-l'Étroit Lucy, Spicheren, Réméréville Romain Levoncourt. Lavallée Pont-sur-Meuse, Laneuveville-aux-Bois Hergugney Glonville Croismare Fribourg Gosselming Velosnes Hilbesheim Hellering-lès-Fénétrange Châtillon-sur-Saône Lépanges-sur-Vologne Vouthon-Haut Laître-sous-Amance Resson Verdenal Hannocourt Schmittviller Mont-sur-Meurthe Ainvelle Charmes-la-Côte, Le Ménil, Charmois-devant-Bruyères Thierville-sur-Meuse Laneuveville-lès-Lorquin Saint-Menge Saint-Menge Vadonville Raon-sur-Plaine Marre Ancerviller Cousances-lès-Triconville Bérig-Vintrange Chicourt, Menaucourt Manonviller Vervezelle Bitche Saint-Mard Mogeville Marre, Failly."
        },
        technicalScope: ["HTML", "CSS", "JS Vanilla"],
        threePanelsDetails:{
          1: {
            title: "detail #1",
            source: "/projets/ranking-nba/nba-cover.png",
            alt: "Icone projet Ranking NBA",
            description: "Lorraine Ipsum Moulins-Saint-Hubert, Marainville-sur-Madon Lorry-lès-Metz Errouville, Barbas Montsec Renauvoid Crion Fouchères-aux-Bois Kalhausen Lachapelle Velaines Harol"
          },
          2: {
            title: "detail #2",
            source: "/projets/ranking-nba/nba-cover.png",
            alt: "Icone projet Ranking NBA",
            description: "Lorraine Ipsum Moulins-Saint-Hubert, Marainville-sur-Madon Lorry-lès-Metz Errouville, Barbas Montsec Renauvoid Crion Fouchères-aux-Bois Kalhausen Lachapelle Velaines Harol"
          },
          3: {
            title: "detail #3",
            source: "/projets/ranking-nba/nba-cover.png",
            alt: "Icone projet Ranking NBA",
            description: "Lorraine Ipsum Moulins-Saint-Hubert, Marainville-sur-Madon Lorry-lès-Metz Errouville, Barbas Montsec Renauvoid Crion Fouchères-aux-Bois Kalhausen Lachapelle Velaines Harol. Lorraine Ipsum Moulins-Saint-Hubert, Marainville-sur-Madon Lorry-lès-Metz Errouville, Barbas Montsec Renauvoid Crion Fouchères-aux-Bois Kalhausen Lachapelle Velaines Harol"
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
    howManyProjects : 5,
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
