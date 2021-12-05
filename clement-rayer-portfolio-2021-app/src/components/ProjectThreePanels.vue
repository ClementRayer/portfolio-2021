<template>
    <div id="project-three-panels">
        <div class="three-panels-item" v-for="item in threePanelsDetails" :key="item.value">
            <span class="three-panels-item-title">{{ item.title }}</span><br>
            <div class="three-panels-item-details">
                <div class="three-panels-item-description">
                    <div class="three-panels-item-description-text">
                        {{ item.description }}
                    </div>
                </div>
                <img class="three-panels-item-image" :src="item.source" :alt="item.alt">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProjectThreePanels",
    props: {
        threePanelsDetails:{
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
#project-three-panels{
    margin: 13vh 10.5vw 0 10.5vw;
    display: flex;
    justify-content: space-between;
    .three-panels-item{
        width: 30%;
        position: relative;
        text-align: center;
        .three-panels-item-title{
            font-size: 2.25rem;
        }
        .three-panels-item-details{
            width: 100%;
            height: 58.5vh;
            margin-top: 3.25vh;
            position: relative;
            overflow: hidden;
            .three-panels-item-description{
                height: 100%;
                transform: translateY(58.5vh);
                position: absolute;
                background-color: rgba(0, 0, 0, 0.8);
                transition: 0.2s ease-out;
                display: flex;
                justify-content: center;
                align-items: center;
                .three-panels-item-description-text{
                    width: 80%;
                    font-size: 1.1rem;
                }
            }
            .three-panels-item-image{
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        .three-panels-item-details:hover .three-panels-item-description{
            transform: translateY(0);
        } 
    }
}
</style>