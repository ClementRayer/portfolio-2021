<template>
    <div id="project-three-panels">
        <span class="three-panels-mobile-helper">Cliquez sur les images pour afficher les détails</span>
        <div class="three-panels-item" v-for="(item, index) in threePanelsDetails" :key="item.value" v-bind:class="{ evenItem: index == 2 }">
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
    margin: 13vh 10vw 0 10vw;
    width: 80vw;
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
            font-family: 'Sen', sans-serif;
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
    .three-panels-mobile-helper{
        display: none;
    }
}
@media screen and (max-width: 1367px) {
    #project-three-panels{
        .three-panels-item{
            .three-panels-item-title{
                font-size: 1.5rem;
            }
            .three-panels-item-details{
                .three-panels-item-description{
                    .three-panels-item-description-text{
                        font-size: 1rem;
                    }
                }
            }
        }
    }
}
@media screen and (max-width: 1025px) {
    #project-three-panels{
        .three-panels-item{
            .three-panels-item-details{
                .three-panels-item-description{
                    .three-panels-item-description-text{
                        font-size: 0.8rem;
                    }
                }
            }
        }
    }
}
@media screen and (max-width: 769px) {
    #project-three-panels{
        margin-top: 7.5vh;
        flex-direction: column;
        align-items: center;
        .three-panels-item{
            margin-top: 5vh;
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            .three-panels-item-title{
                width: 15%;
            }
            .three-panels-item-details{
                margin: 0;
                width: 80%;
                height: 66vh;
                .three-panels-item-description{
                    transform: translateY(66vh);
                    .three-panels-item-description-text{
                        font-size: 1.2rem;
                    }
                }
            }
        }
        .evenItem{
            flex-direction: row-reverse;
        }
        .three-panels-mobile-helper{
            display: block;
            font-size: 1rem;
            text-align: center;
        }
    }
}
@media screen and (max-width: 415px) {
    #project-three-panels{
        margin-top: 9vh;
        .three-panels-item{
            flex-direction: column;
            .three-panels-item-title{
                width: 100%;
            }
            .three-panels-item-details{
                margin: 0;
                width: 100%;
                height: 60vh;
                .three-panels-item-description{
                    transform: translateY(60vh);
                }
            }
        }
    }
}
@media screen and (max-width: 376px){
    #project-three-panels{
        .three-panels-item{
            .three-panels-item-details{
                .three-panels-item-description{
                    .three-panels-item-description-text{
                        font-size: 1rem;
                    }
                }
            }
        }
    }
}
</style>