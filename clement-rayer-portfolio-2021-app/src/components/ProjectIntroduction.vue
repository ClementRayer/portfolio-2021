<template>
    <div id="project-introduction">
        <h1>{{ name }}</h1>
        <span id="project-type-date">{{ type }}, {{ date }}</span>
        <span id="project-skills">{{ skills }}</span>
        <span id="project-introduction-text"> {{ introductionText }} </span>
    </div>
</template>

<script>
export default {
    name: "ProjectIntroduction",
    props: {
        name:{
            type: String,
            required: true
        },
        type:{
            type: String,
            required: true
        },
        date:{
            type: Number,
            required: true
        },
        skills:{
            type: String,
            required: true
        },
        introductionText:{
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
#project-introduction{
    display: flex;
    flex-direction: column;
    h1{
        margin: 12.5vh auto 6vh auto;
        max-width: 80vw;
        font-size: 7rem;
        text-align: center;
        text-transform: uppercase;
        color: transparent;
        -webkit-text-stroke: 1px #ffffff;
    }
    #project-type-date{
        width: 80vw;
        margin: 0 auto;
        font-size: 2.25rem;
        text-align: center;
    }
    #project-skills{
        width: 80vw;
        margin: 4.6vh auto 0 auto;
        font-size: 1.5rem;
        text-align: center;
        text-transform: uppercase;
    }
    #project-introduction-text{
        margin: 7.5vh auto 0 auto;
        width: 80vw;
        font-size: 1.2rem;
        font-family: 'Sen', sans-serif;
        text-align: center;
    }
}
@media screen and (max-width: 1367px) {
    #project-introduction{
        #project-introduction-text{
            font-size: 1rem;
        }
    }
}
@media screen and (max-width: 769px) {
    #project-introduction{
        h1{
            font-size: 5rem;
        }
    }
}
@media screen and (max-width: 415px) {
    #project-introduction{
        h1{
            margin: 8vh auto 4vh auto;
            font-size: 3rem;
            word-break: break-word;
        }
        #project-type-date{
            font-size: 1.5rem;
        }
        #project-skills{
            font-size: 1.2rem;
        }
    }
}
</style>