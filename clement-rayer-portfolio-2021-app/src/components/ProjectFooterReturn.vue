<template>
    <div id="project-footer-return" @mouseover="fumble" @mouseleave="stopFumble">
        <router-link id="link-text" to="/projects">Voir tous les projets</router-link>
    </div>
</template>

<script>
import anime from "animejs";

export default {
    name: "ProjectFooterReturn",
    methods: {
        fumble() {
            anime
                .timeline({
                    targets: '#link-text',
                    duration: 4001
                })
                .add({
                    scale: [
                        {value: 1, duration: 1},
                        {value: function() {
                            return anime.random(1.1, 1.4);
                            }, duration: 100},
                        {value: function() {
                            return anime.random(1.3, 1.5);
                            }, duration: 1000},
                        {value: 1, duration: 100},
                    ],
                    loop: true
                })
        },
        stopFumble(){
            anime({
                targets: '#link-text',
                scale: 1,
                duration: 100
            })
        }
    }
}
</script>

<style lang="scss" scoped>
#project-footer-return{
    height: 35vh;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 4.5rem;
}
@media screen and (max-width: 769px) {
    #project-footer-return{
        height: 20vh;
        font-size: 3rem;
    }
}
@media screen and (max-width: 415px) {
    #project-footer-return{
        font-size: 2.2rem;
    }
}
@media screen and (max-width: 376px){
    #project-footer-return{
        font-size: 2rem;
    }
}
@media screen and (max-width: 350px){
    #project-footer-return{
        font-size: 1.7rem;
    }
}
</style>