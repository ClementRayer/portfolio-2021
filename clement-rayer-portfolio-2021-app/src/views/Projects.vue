<template>
  <div id="projects-body">
    <h1>PROJETS</h1>
    <div class="projects">
      <ProjectItem 
        v-for="item in projectList"
        :thumbnail="item.thumbnail"
        :name="item.name"
        :type="item.type"
        :date="item.date"
        :key="item.name"
      />
    </div>
  </div>
</template>

<script>
import ProjectItem from '../components/ProjectItem.vue'
import { mapState } from 'vuex'

export default {
  name: 'Projects',
  components:{
    ProjectItem
  },
  computed: {
		...mapState({
			projectList : 'projectList'
		})
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
    width: 88vw;
    margin: 0 6vw;
  }
}
</style>