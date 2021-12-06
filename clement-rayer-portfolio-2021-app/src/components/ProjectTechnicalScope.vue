<template>
    <div id="project-technical-scope">
        <span id="technical-title">Scope technique</span>
        <div id="technical-details" v-for="(technology, index) in technicalScope" :key="technology.value">
            {{ technology }}<span v-if="index < technicalScope.length - 1">,</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProjectTechnicalScope",
    props: {
        technicalScope:{
            type: Array,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
#project-technical-scope{
    width: 80vw;
    margin: 13vh auto 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    #technical-title{
        margin-right: 3.5vw;
        font-size: 2.3rem;
    }
    #technical-details{
        margin-left: 0.3rem;
        font-family: 'Sen', sans-serif;
        font-size: 1.15rem;
    }
}
@media screen and (max-width: 769px) {
    #project-technical-scope{
        margin-top: 7.5vh;
    }
}
@media screen and (max-width: 415px) {
    #project-technical-scope{
        flex-wrap: wrap;
        #technical-title{
            width: 100%;
            margin: 0 0 1vh 0;
            font-size: 1.8rem;
            text-align: center;
        }
    }
}
</style>