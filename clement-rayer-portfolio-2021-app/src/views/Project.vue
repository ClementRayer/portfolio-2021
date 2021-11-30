<template>
  <div id="projects-body">
      <ProjectContentHeader
        :key="projectToDisplay.id"
        :name="projectToDisplay.name"
        :cover="projectToDisplay.cover"
      />
      <ProjectIntroduction
        :key="projectToDisplay.id"
        :name="projectToDisplay.name"
        :type="projectToDisplay.type"
        :date="projectToDisplay.date"
        :skills="projectToDisplay.skills"
        :introductionText="projectToDisplay.introductionText"
      />
  </div>
</template>

<script>
import ProjectContentHeader from '../components/ProjectContentHeader.vue'
import ProjectIntroduction from '../components/ProjectIntroduction.vue'
import { mapState } from 'vuex'

export default {
  name: 'Project',
  components:{
    ProjectContentHeader,
    ProjectIntroduction
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
                // console.log(searchPlace[x].projectPage + '|||||||' + searchedValue)
                /* eslint-disable no-unused-vars */
                this.projectToDisplay = searchPlace[x]
                break
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