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
            targets: '#black-fade',
            opacity: [0, 0.6],
            duration: 800,
            delay: 200,
            easing: 'easeOutSine',
            })
        anime
            .timeline({
                targets: '#text-element',
            })
            .add({
                strokeDashoffset: [550, 0],
                easing: 'easeInOutSine',
                // easing: 'steps(5)',
                delay: 0,
                duration: 1000
            },)
            .add({
                opacity: [
                    { value: 1, duration: 100 },
                    { value: 0.4, duration: 100 },
                    { value: 1, duration: 100 },
                    { value: 0.2, duration: 100 },
                    { value: 1, duration: 100 },
                ],
                easing: 'easeInOutSine',
                duration: 500,
            }, 0)
            .add({
                keyframes: [
                    {opacity: 1},
                    {opacity: 0},
                    {strokeDasharray: 0},
                    {opacity: 1}
                ],
                easing: 'easeInOutSine',
                duration: 500
            }, '-=450')
    }
}
</script>

<style lang="scss" scoped>
#project-header{
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
        }
        #text-outline {
            text-transform: uppercase;
            z-index: 1;
            #text-element{
                opacity: 1;
                font-size: 7rem;
                stroke-dasharray: 500;
                stroke-dashoffset: 0;
            }
        }
    }
}
</style>