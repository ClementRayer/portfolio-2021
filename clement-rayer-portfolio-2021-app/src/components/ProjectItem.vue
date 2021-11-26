<template>
    <div class="project-item">
        <div class="project-item-content">
            <div class="project-item-logo">
                <img :src="thumbnail.source" :alt="thumbnail.alt" id="project-thumbnail">
            </div>
            <div class="project-item-infos">
                <div class="project-infos-left">
                    <span class="project-name">{{ name }}</span>
                    <span class="project-type">{{ type }}</span>
                </div>
                <div class="project-infos-right">
                    {{ date }}
                </div>
            </div>
        </div>
        <hr>
    </div>
</template>

<script>
export default {
    name: "ProjectItem",
    props: {
        thumbnail: {
            type: Object,
            required: true
        },
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
        }
    }
}
</script>

<style lang="scss" scoped>
.project-item{
    .project-item-content{
        margin: 4.6vh 0;
        font-size: 6.8rem;
        font-family: "Fugaz One", cursive;
        color: #ffffff;
        display: flex;
        justify-content: flex-start;
        align-items: stretch;
        .project-item-logo{
            #project-thumbnail{
                width: 16vw;
                height: auto;
            }
        }
        .project-item-infos{
            margin-top: 4vh;
            width: 100%;
            display: flex;
            justify-content: space-between;
            .project-infos-left{
                padding: 0 2vw 0 10vw;
                display: flex;
                flex-direction: column;
                .project-type{
                    font-family: 'Sen', sans-serif;
                    font-size: 2.25rem;
                }
            }
            .project-infos-right{
                color: transparent;
                -webkit-text-stroke: 1px #ffffff;
            }
        }
    }
    hr{
        margin-top: -3.7vh;
        width: 100%;
        height: 1px;
        background-color: #ffffff;
        opacity: 0.5;
    }
}
</style>