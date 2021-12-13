<template>
    <router-link :to="{ path: '/project/' + projectPage }"> 
        <div class="project-item" @mouseenter="setImages()" @mouseleave="removeImages()">
            <div class="project-item-content">
                <div class="project-item-logo" ref="logo">
                    <img :src="thumbnail.source" :alt="thumbnail.alt" id="project-thumbnail">
                </div>
                <div class="project-item-infos">
                    <div class="project-infos-left">
                        <span class="project-name">{{ name }}</span>
                        <span class="project-type" ref="typeDisplay">{{ type }}</span>
                    </div>
                    <div class="project-infos-right" ref="dateDisplay">
                        {{ date }}
                    </div>
                </div>
                <img src="../../public/down-arrow.svg" alt="Voir les informations sur le projet" class="infos-toggle-arrow" @click="toggleItem()" ref="toggleArrow" />
            </div>
            <hr>
        </div>
    </router-link>
</template>

<script>
var numberOfImages = 50;
var viewportWidth = window.innerWidth;
export default {
    name: "ProjectListItem",
    props: {
        id:{
            type: Number
        },
        thumbnail: {
            type: Object,
            required: true
        },
        name:{
            type: String,
            required: true
        },
        projectPage:{
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
    },
    methods:{
        // A CONSERVER, FONCTIONNE POUR TARGET UN ELEMENT DU DOM JE SUIS TOUT NU BORDEL
        // pouet() {
        //     // console.log(this.$refs)
        //     console.log(this.$refs.logo)
        //     this.$refs.logo.style.marginLeft = '500px'
        // }
        setImages() {
            var thumbnailSource = this.$refs.logo.firstChild.src
            if(viewportWidth > 415){
                for(var i = 0; i < numberOfImages; i++){
                    var j = 0;
                    setTimeout( () => {
                        j++;
                        var newImage = document.createElement('img');
                        newImage.setAttribute('class', 'thumbnail-props');
                        newImage.setAttribute('src', thumbnailSource);
                        newImage.setAttribute('style', `margin-top: -${j * 0.3}px; position: absolute; margin-left: calc(-16vw + ${j}px); width: 16vw; height: auto;`);
                        this.$refs.logo.appendChild(newImage);
                    }, i * 0.8);
                }
            }
        },
        setImagesSmall(){
            var thumbnailSource = this.$refs.logo.firstChild.src
            for(var iSmall = 0; iSmall < numberOfImages; iSmall++){
                var jSmall = 0
                setTimeout( () => {
                    jSmall++
                    var newImage = document.createElement('img');
                    newImage.setAttribute('class', 'thumbnail-props');
                    newImage.setAttribute('src', thumbnailSource);
                    newImage.setAttribute('style', `margin-top: ${jSmall * 0.6}px; position: absolute; margin-left: -24vw; width: 24vw; height: auto;`);
                    this.$refs.logo.appendChild(newImage);
                }, iSmall * 0.8)
                console.log('create images')
            }
        },
        removeImages() {
            if(viewportWidth > 415){
                for(var k = 0; k < numberOfImages; k++){
                    /* eslint-disable no-unused-vars */
                    var l = 0
                    setTimeout( () => {
                        l++
                        this.$refs.logo.lastChild.remove();
                    }, k * 0.8)
                }
            }
        },
        removeImagesSmall(){
            for(var kSmall = 0; kSmall < numberOfImages; kSmall++){
                /* eslint-disable no-unused-vars */
                var lSmall = 0
                setTimeout( () => {
                    lSmall++;
                    this.$refs.logo.lastChild.remove();
                }, kSmall * 0.8)
                console.log('remove images')
            }
        },
        toggleItem(){
            if(this.$refs.toggleArrow.classList.contains("opened")){
                this.$refs.toggleArrow.setAttribute('style', 'transform: rotate(0deg);')
                this.$refs.typeDisplay.setAttribute('style', 'display: none;')
                this.$refs.dateDisplay.setAttribute('style', 'display: none;')
                this.$refs.toggleArrow.classList.remove("opened");
                this.removeImagesSmall()
            }else{
                this.$refs.toggleArrow.setAttribute('style', 'transform: rotate(180deg);')
                this.$refs.typeDisplay.setAttribute('style', 'display: block;')
                this.$refs.dateDisplay.setAttribute('style', 'display: block;')
                this.$refs.toggleArrow.classList.add("opened")
                this.setImagesSmall()
            }
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
        .infos-toggle-arrow{
            display: none;
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
@media screen and (max-width: 1367px) {
    .project-item{
        .project-item-content{
            margin: 4.6vh 0;
            font-size: 4rem;
            .project-item-infos{
                .project-infos-left{
                    .project-type{
                        font-size: 2rem;
                    }
                }
            }
        }
    }
}
@media screen and (max-width: 1025px) {
    .project-item{
        .project-item-content{
            margin: 4.6vh 0 2vh 0;
            font-size: 3.5rem;
            align-items: center;
            .project-item-infos{
                margin-top: -4vh;
                .project-infos-left{
                    .project-type{
                        font-size: 1.5rem;
                    }
                }
            }
        }
        hr{
            margin-top: 0;
        }
    }
}
@media screen and (max-width: 769px) {
    .project-item{
        .project-item-content{
            margin: 4.6vh 0;
            font-size: 3rem;
            .project-item-infos{
                margin-top: 0;
                .project-infos-left{
                    .project-type{
                        font-size: 1.75rem;
                    }
                }
            }
        }
    }
}
@media screen and (max-width: 415px) {
    .project-item{
        .project-item-content{
            font-size: 1.9rem;
            .project-item-logo {
                #project-thumbnail{
                    width: 24vw;
                }
            }
            .project-item-infos{
                flex-direction: column;
                .project-infos-left{
                    padding-left: 6vw;
                    .project-type{
                        display: none;
                        margin-top: 2vh;
                        font-size: 1rem;
                    }
                }
                .project-infos-right{
                    display: none;
                    padding-left: 6vw;
                }
            }
            .infos-toggle-arrow{
                display: block;
                width: 7vw;
            }
        }
    }
}
</style>