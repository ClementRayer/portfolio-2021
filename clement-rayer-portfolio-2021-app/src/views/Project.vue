<template>
  <div id="projects-body">
      <!-- <ProjectHeader
        :key="projectToDisplay.id"
        :name="projectToDisplay.name"
        :cover="projectToDisplay.cover"
      /> -->
      <ProjectHeaderAlt
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
      <ProjectImagePlusText
        v-if="projectToDisplay.basicImagePlusText"
        :key="projectToDisplay.id"
        :basicImagePlusText="projectToDisplay.basicImagePlusText"
      />
      <ProjectTechnicalScope 
        v-if="projectToDisplay.technicalScope"
        :key="projectToDisplay.id"
        :technicalScope="projectToDisplay.technicalScope"
      />
      <ProjectThreePanels
        v-if="projectToDisplay.threePanelsDetails"
        :key="projectToDisplay.id"
        :threePanelsDetails="projectToDisplay.threePanelsDetails"
      />
      <ProjectFooterLink
        :key="projectToDisplay.id"
        :cover="projectToDisplay.cover"
        :url="projectToDisplay.url"
      />
      <ProjectFooterReturn />
      <BurgerMenu />
  </div>
</template>

<script>
// import ProjectHeader from '../components/ProjectHeader.vue'
import ProjectHeaderAlt from '../components/ProjectHeaderAlt.vue'
import ProjectIntroduction from '../components/ProjectIntroduction.vue'
import ProjectImagePlusText from '../components/ProjectImagePlusText.vue'
import ProjectTechnicalScope from '../components/ProjectTechnicalScope.vue'
import ProjectThreePanels from '../components/ProjectThreePanels.vue'
import ProjectFooterLink from '../components/ProjectFooterLink.vue'
import ProjectFooterReturn from '../components/ProjectFooterReturn.vue'
import BurgerMenu from '../components/BurgerMenu.vue'
import { mapState } from 'vuex'

export default {
  name: 'Project',
  components:{
    // ProjectHeader,
    ProjectHeaderAlt,
    ProjectIntroduction,
    ProjectImagePlusText,
    ProjectTechnicalScope,
    ProjectThreePanels,
    ProjectFooterLink,
    ProjectFooterReturn,
    BurgerMenu
  },
  data(){
      return{
        projectToDisplay: null,
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
      },
      changeTitle(){
        document.title = `${this.projectToDisplay.name} - Clément Rayer`
      }
  },
  created(){
      this.getProject()
      this.changeTitle();
  }
}
</script>

<style lang="scss">
#projects-body{
  font-family: "Fugaz One", cursive;
  color: #ffffff;
}
</style>