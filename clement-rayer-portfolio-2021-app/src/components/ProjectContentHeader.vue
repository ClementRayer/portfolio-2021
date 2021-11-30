<template>
    <div id="project-header">
        <div id="project-header-background" :style="backgroundImage">
            <div id="black-fade"></div>
            <svg height="100vh" width="100vw" stroke="#ffffff" stroke-width="5" id="text-outline">
                <text text-anchor="middle" x="50%" y="50%" fill="none" id="text-element">{{ name }}</text>
            </svg>
        </div>
    </div>
</template>

<script>
import anime from "animejs";

export default {
    name: "ProjectContentHeader",
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
                'background-image' : 'url('+ this.cover.source + ')'
            }
        }
    },
    mounted(){
        anime({
            targets: '#text-element',
            strokeDasharray: [500, 0],
            strokeDashoffset: [500, 0],
            easing: 'easeInOutSine',
            duration: 1500
        })
    }
}
</script>

<style lang="scss" scoped>
#project-header{
    font-family: "Fugaz One", cursive;
    #project-header-background{
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background-size: cover;
        #black-fade{
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            position: absolute;
            background: #000000;
            opacity: 0;
            z-index: 0;
            animation: opacityAugmentation 1s ease-in forwards;
        }
        @keyframes opacityAugmentation {
            0%{
                opacity: 0;
            }
            30%{
                opacity: 0;
            }
            100% {
                opacity: 0.5;
            }
        }
        #text-outline {
            text-transform: uppercase;
            z-index: 1;
            #text-element{
                font-size: 7rem;
                stroke-dasharray: 500;
                stroke-dashoffset: 500;
                // animation: dash 1.5s ease-in forwards;
            }
        }
            // @keyframes dash {
            //     to {
            //         stroke-dashoffset: 0;
            //     }
            // }
    }
}
</style>