<template>
    <a :href="url" id="project-footer-link" :style="backgroundImage">Visiter le site</a>
</template>

<script>
export default {
    name: "ProjectFooterLink",
    props: {
        cover:{
            type: Object,
            required: true
        },
        url:{
            type: String,
            required: true
        }
    },
    computed:{
        backgroundImage(){
            return {
                'background-image' : 'linear-gradient(rgba(0, 0, 0, 0.55),rgba(0, 0, 0, 0.55)) , url('+ this.cover.source + ')'
            }
        }
    },
}
</script>

<style lang="scss" scoped>
#project-footer-link{
    height: 46vh;
    margin-top: 15vh;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 6rem;
    text-transform: uppercase;
}
#project-footer-link:hover{
    color: transparent;
    -webkit-text-stroke: 1px #ffffff;
}
@media screen and (max-width: 769px) {
    #project-footer-link{
        height: 40vh;
        margin-top: 8.5vh;
        font-size: 4rem;
    }
}
@media screen and (max-width: 415px) {
    #project-footer-link{
        margin-top: 9vh;
        font-size: 2.5rem;
    }
}
@media screen and (max-width: 376px){
    #project-footer-link{
        font-size: 2rem;
    }
}
@media screen and (max-width: 350px){
    #project-footer-link{
        font-size: 1.8rem;
    }
}
</style>