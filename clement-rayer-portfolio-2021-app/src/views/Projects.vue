<template>
  <div id="projects-body">
    <h1>PROJETS</h1>
    <div class="projects">
      <ProjectListItem 
        v-for="item in projectList"
        :id="item.id"
        :thumbnail="item.thumbnail"
        :name="item.name"
        :projectPage="item.projectPage"
        :type="item.type"
        :date="item.date"
        :key="item.id"
      />
    </div>
    <BurgerMenu />
  </div>
</template>

<script>
import ProjectListItem from '../components/ProjectListItem.vue'
import BurgerMenu from '../components/BurgerMenu.vue'
import { mapState } from 'vuex'

export default {
  name: 'Projects',
  components:{
    ProjectListItem,
    BurgerMenu
  },
  computed: {
		...mapState({
			projectList : 'projectList'
		})
	},
  created(){
      function changeTitle(){
        document.title = 'Projets - Clément Rayer'
      }
      window.onload = changeTitle();
  }
}
</script>

<style lang="scss">
#projects-body{
  h1{
    margin: 15vh 0;
    text-align: center;
    font-size: 9rem;
    font-family: "Fugaz One", cursive;
    color: transparent;
		-webkit-text-stroke: 1px #ffffff;
  }
  .projects{
    width: 84vw;
    margin: 0 8vw;
  }
}
@media screen and (max-width: 1025px) {
  #projects-body{
    h1{
      margin: 7vh 0;
      font-size: 5rem;
    }
  }
}
@media screen and (max-width: 769px) {
  #projects-body{
    h1{
      font-size: 5rem;
    }
  }
}
@media screen and (max-width: 415px) {
  #projects-body{
    h1{
      font-size: 2.5rem;
      margin: 10vh 0;
    }
  }
}
@media screen and (max-width: 340px) {
  #projects-body{
    h1{
      font-size: 3.5rem;
    }
  }
}
</style>