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
</style>