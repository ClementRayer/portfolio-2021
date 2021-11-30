<template>
    <router-view/>
</template>


<script>
export default {
  name: 'App',
  created(){
      document.title = 'Clément Rayer - Développeur, designer, chef de projet'
    // document.querySelector("meta[name='description']").setAttribute('content', "Hey! Moi c’est Clément, développeur web, designer et chef de projet 👋 Pour voir mes projets ou me contacter, c'est par ici!")
  }
}
</script>

<style lang="scss">
body{
    width: 100vw;
    height: 100vh;
    max-width: 100vw;
    overflow-x: hidden;
    margin: 0;
    background-color: #353131;
}
#app {
    @import url('https://fonts.googleapis.com/css2?family=Fugaz+One&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Sen:wght@400;700;800&display=swap');
    margin: 0;
    padding: 0;
    a{
        color: #ffffff;
        text-decoration: none;
    }
}
</style>