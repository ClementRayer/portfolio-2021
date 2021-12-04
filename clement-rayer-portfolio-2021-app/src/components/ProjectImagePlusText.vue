<template>
    <div id="project-image-plus-text">
        <img id="project-image-plus-text-image" :src="basicImagePlusText.source" :alt="basicImagePlusText.alt">
        <span id="project-image-plus-text-text">{{ basicImagePlusText.text }}</span>
    </div>
</template>

<script>
export default {
    name: "ProjectIntroduction",
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
        width: 43%;
    }
    #project-image-plus-text-text{
        width: 45%;
    }
}
</style>