<template>
  <div id="projects-body">
      <ProjectContentHeader
        :name="projectToDisplay.name"
        :key="projectToDisplay.id"
      />
  </div>
</template>

<script>
import ProjectContentHeader from '../components/ProjectContentHeader.vue'
import { mapState } from 'vuex'

export default {
  name: 'Project',
  components:{
    ProjectContentHeader
  },
  data(){
      return{
        projectToDisplay: null
      }
  },
  computed: {
		...mapState({
			projectList : 'projectList'
		})
  },
  methods:{
      getProject(){
        var searchedValue = this.$route.params.projectTitle
        var searchPlace = this.$store.state.projectList
        for(var x = 0; x < this.$store.state.howManyProjects; x++){
            /* eslint-disable no-cond-assign */
            if(searchPlace[x].projectPage === searchedValue){
                console.log(searchPlace[x].projectPage + '|||||||' + searchedValue)
                console.log('lesgo on prend le contenu')
                /* eslint-disable no-unused-vars */
                this.projectToDisplay = searchPlace[x]
                break
            }else{
                console.log('nop on cherche ici ' + searchPlace[x].projectPage + 'et on est sur la page ' + searchedValue)
            }
        }
      }
  },
  created(){
      function changeTitle(){
        document.title = 'Projets - Clément Rayer'
      }
      window.onload = changeTitle();
      this.getProject()
  }
}
</script>

<style lang="scss">
</style>