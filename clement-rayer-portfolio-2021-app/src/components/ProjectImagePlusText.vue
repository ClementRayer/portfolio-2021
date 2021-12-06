<template>
    <div id="project-image-plus-text">
        <img id="project-image-plus-text-image" :src="basicImagePlusText.source" :alt="basicImagePlusText.alt">
        <span id="project-image-plus-text-text">{{ basicImagePlusText.text }}</span>
    </div>
</template>

<script>
export default {
    name: "ProjectImagePlusText",
    props: {
        basicImagePlusText:{
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
#project-image-plus-text{
    width: 80vw;
    margin: 13vh auto 0 auto;
    font-family: 'Sen', sans-serif;
    font-size: 1.15rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    #project-image-plus-text-image{
        width: 47%;
    }
    #project-image-plus-text-text{
        width: 47%;
    }
}
@media screen and (max-width: 1367px) {
    #project-image-plus-text{
        font-size: 1rem;
    }
}
@media screen and (max-width: 1025px) {
    #project-image-plus-text{
        font-size: 0.85rem;
    }
}
@media screen and (max-width: 769px) {
    #project-image-plus-text{
        margin-top: 7.5vh;
        justify-content: space-between;
    }
}
@media screen and (max-width: 415px) {
    #project-image-plus-text{
        width: 100vw;
        flex-direction: column;
        #project-image-plus-text-image{
            width: 100%;
        }
        #project-image-plus-text-text{
            width: 80%;
            margin-top: 2vh;
            text-align: center;
        }
    }
}
</style>