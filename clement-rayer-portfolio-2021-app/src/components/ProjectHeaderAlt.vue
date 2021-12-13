<template>
    <div id="project-header">
        <div id="project-header-background" :style="backgroundImage">
            <div id="text-container">
                <div class="animated-text">{{ name }}</div>
                <div class="animated-text">{{ name }}</div>
                <div class="animated-text">{{ name }}</div>
                <div class="animated-text">{{ name }}</div>
                <div class="animated-text">{{ name }}</div>
                <div class="animated-text">{{ name }}</div>
                <div class="animated-text">{{ name }}</div>
                <div class="animated-text">{{ name }}</div>
                <div class="animated-text">{{ name }}</div>
                <div class="animated-text animated-text-full">{{ name }}</div>
            </div>
            <span id="page-title">{{ name }}</span>
            <div @click="scrollToNextScreen" id="arrow-anchor-link">
                <svg width="66" height="34" viewBox="0 0 66 34" fill="none" stroke="#ffffff" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="33,3 33,3 33,3 33,3" stroke-width="5" stroke-linecap="round" id="arrow-svg"/>
                </svg>
            </div>
        </div>
    </div>
</template>

<script>
import anime from "animejs";

export default {
    name: "ProjectHeaderAlt",
    props: {
        name:{
            type: String,
            required: true
        },
        cover:{
            type: Object,
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
    methods: {
		scrollToNextScreen() {
			var height = window.innerHeight;
			window.scrollTo({
				top: height,
				behavior: 'smooth'
			});
		}
	},
    mounted(){
        anime
            .timeline({
                targets : '.animated-text',
            })
            .add({
                opacity: 1,
                duration: 150,
                delay: anime.stagger(25),
                complete: function() {
                    anime({
                        targets: '#text-container',
                        style: 'background-position: 0 -100%',
                        duration: 200,
                        easing: 'easeOutSine',
                    })
                }
            })
            .add({
                opacity: 0,
                duration: 100,
                complete: function() {
                    anime({
                        targets: '#page-title',
                        keyframes: [
                            {opacity: 0, duration: 1},
                            {opacity: 1, duration: 50},
                            {opacity: 0, duration: 25}
                        ],
                        easing: 'easeOutSine',
                        begin: function() {
                            document.getElementById('text-container').style.display = 'none';
                            document.getElementById('page-title').style.display = 'block';
                        },
                        complete: function(){
                            anime({
                                targets: '#page-title',
                                keyframes: [
                                    {opacity: 1, duration: 25}
                                ],
                                begin: function() {
                                    document.getElementById('page-title').style.color = 'transparent'
                                },
                                complete: function(){
                                    document.getElementById('arrow-anchor-link').style.display = 'block';
                                    anime({
                                        targets: '#arrow-svg',
                                        points: [
                                            { value: '33,3 33,3 33,3 33,3' },
                                            { value: '3,3 33,3 63,3 33,3' },
                                            { value: '3,3 33,30 63,3 33,30' }
                                        ],
                                        easing: 'easeOutQuad',
                                        duration: 300
                                    })
                                }
                            })
                        }
                    })
                }
            }, '+=300')
    }
}
</script>

<style lang="scss" scoped>
#project-header{
    #project-header-background{
        width: 100vw;
        height: 100vh;
        text-align: center;
        text-transform: uppercase;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-size: cover;
        background-position: top center;
        #text-container{
            background-size: 100% 200%;
            background-image: linear-gradient(to bottom, transparent 50%, #ffffff 50%);
            background-clip: text;
            padding: 10px;
            .animated-text{
                font-size: 10vh;
                line-height: .8;
                color: transparent;
                -webkit-text-stroke: 1px #ffffff;
                opacity: 0;
            }
            .animated-text-full{
                color: #ffffff;
            }
        }
        #page-title{
            font-size: 7rem;
            font-weight: 700;
            -webkit-text-stroke: 1px #ffffff;
            display: none;
            opacity: 0;
        }
        #arrow-anchor-link{
            cursor: pointer;
            position: absolute;
            top: 92vh;
            display: none;
            #down-arrow{
                width: 3.2vw;
            }
        }
    }
}
@media screen and (max-width: 769px) {
    #project-header{
        #project-header-background{
            #text-container{
                .animated-text{
                    font-size: 7vh;
                }
            }
            #page-title{
                font-size: 5rem;
            }
        }
    }
}
@media screen and (max-width: 415px) {
    #project-header{
        #project-header-background{
            #text-container{
                .animated-text{
                    font-size: 5vh;
                }
            }
            #page-title{
                font-size: 2.5rem;
            }
        }
    }
}
</style>