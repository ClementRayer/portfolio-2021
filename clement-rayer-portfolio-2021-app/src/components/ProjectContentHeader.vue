<template>
    <div id="project-header">
        <h1>{{ name }}</h1>
    </div>
</template>

<script>

export default {
    name: "ProjectContentHeader",
    props: {
        name:{
            type: String,
            required: true
        },
    //     id:{
    //         type: Number
    //     },
    //     thumbnail: {
    //         type: Object,
    //         required: true
    //     },
    //     projectPage:{
    //         type: String,
    //         required: true
    //     },
    //     type:{
    //         type: String,
    //         required: true
    //     },
    //     date:{
    //         type: Number,
    //         required: true
    //     }
    }
}
</script>

<style lang="scss" scoped>
#project-header{
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    h1{
        font-size: 7rem;
        font-family: "Fugaz One", cursive;
        text-transform: uppercase;
        color: transparent;
        -webkit-text-stroke: 1px #ffffff;
    }
}
</style>