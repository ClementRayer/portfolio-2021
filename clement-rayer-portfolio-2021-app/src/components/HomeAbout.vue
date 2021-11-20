<template>
    <div id="about-body">
        <div id="about-container">
            <div id="about-border"></div>
            <div id="about-background">
                <div class="about-intro">
                    <p id="about-title">Hey !</p>
                    <p id="about-description">
                        Moi c’est Clément, développeur web, designer et chef de projet 👋<br>
                        Je touche un peu à tout, mais mon objectif c’est de me concentrer sur le développement web, en freelance et en entreprise<br>
                        En complément des informations ci-dessous, vous pouvez retrouver mes différents projets <router-link to="/projets" class="link-hover">ici</router-link><br>
                        N’hésitez pas à <router-link to="/contact" class="link-hover">me contacter</router-link> pour toute demande 😉<br>
                    </p>
                </div>
                <div id="about-infos">
                    <div id="about-infos-socials">
                        <h3>Où me trouver</h3>
                        <div id="socials-details">
                            <HomeAboutSocials 
                                v-for="item in socialsList"
                                :link="item.link"
                                :title="item.title"
                                :source="item.source"
                                :alt="item.alt"
                                :key="item.title"
                            />
                        </div>
                    </div>
                    <hr>
                    <div id="about-infos-experiences">
                        <h3>Expériences</h3>
                        <p id="experiences-details">
                            <HomeAboutExperiences
                                v-for="item in experiencesList"
                                :id="item.id"
                                :date="item.date"
                                :jobTitle="item.jobTitle"
                                :additionalDetail="item.additionalDetail"
                                :key="item.id"
                            />
                        </p>
                    </div>
                </div>
                <div id="project-link">
                   <h3 id="about-projects-link"><router-link to="/projets" class="link-hover">Voir mes projets</router-link></h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HomeAboutSocials from '../components/HomeAboutSocials.vue'
import HomeAboutExperiences from '../components/HomeAboutExperiences.vue'
// import anime from "animejs";

export default {
	name: "HomeAbout",
    components: {
        HomeAboutSocials,
        HomeAboutExperiences
    },
    data() {
        return {
            socialsList: [
                {
                    link: 'https://www.linkedin.com/in/clement-rayer/',
                    title: 'Linkedin',
                    source: "linkedin-logo.png",
                    alt: 'Linkedin Logo'
                },
                {
                    link: 'mailto:clement.rayer@gmail.com',
                    title: 'Mail',
                    source: "mail-logo.png",
                    alt: 'Mail Logo'
                    },
                {
                    link: 'https://github.com/ClementRayer',
                    title: 'GitHub',
                    source: "github-logo.png",
                    alt: 'GitHub Logo'
                }
            ],
            experiencesList: [
                {
                    id: 1,
                    date: '2018 - maintenant',
                    jobTitle: 'Freelance',
                    additionalDetail: '(développement, design, gestion de projet)'
                },
                {
                    id: 2,
                    date: '2018 - 2021',
                    jobTitle: 'Chef de projet web',
                    additionalDetail: '@LineUP7'
                },
                {
                    id: 3,
                    date: '2015 - 2020',
                    jobTitle: 'Master Manager du Marketing Digital',
                    additionalDetail: '@IIM'
                },
                {
                    id: 4,
                    date: '2018',
                    jobTitle: 'Designer',
                    additionalDetail: '@Wiztopic'
                }
            ]
        }
    },
    // methods: {
    //     prout : function (ya){
    //         targetid = ya.target.id
    //         console.log('prout');
    //     }
    // }
    // mounted() {
    //     var hoverTargets = document.querySelectorAll('.link-hover');
    //     for (const hoverTarget of hoverTargets){
    //         hoverTarget.addEventListener('mouseover', console.log('yo'));

    //     }
    // }
    ////////////////////////////////////////////////////
    // mounted() {
    //     var hoverTargets = document.querySelectorAll('.link-hover');

    //     for (const hoverTarget of hoverTargets) {
    //         hoverTarget.setAttribute('style', 'color: #ffffff');
    //         var colorAnimation = anime
    //             .timeline({
    //                 easing: "linear",
    //                 duration : 1000,
    //                 direction: "alternate",
    //                 loop: true,
    //                 autoplay: false
    //             })
    //             .add({
    //                 targets: hoverTarget,
    //                 left: 240
    //             })
    //         hoverTarget.addEventListener('mouseover', console.log('teps'));
    //         hoverTarget.addEventListener('mouseout', colorAnimation.pause())
    //     }
    // }
    ///////////////////////////////////////////////////
    // mounted() {
    //     var hoverTargets = document.querySelectorAll('.link-hover');
    //     // hoverTargets.addEventListener('mouseover', function(){console.log('teprou')})

    //     function hoverAnimation (){
    //         anime
    //             .timeline({
    //                 easing: "linear",
    //                 direction: "alternate",
    //                 loop: true
    //             })
    //             .add({
    //                 targets: hoverTargets,
    //                 style: ['background: radial-gradient(100% 100% at 50% 50%,#2562ff 0%,#ff4141 100%)', 'background: radial-gradient(0% 0% at 50% 50%,#2562ff 0%,#ff4141 100%)']
    //             })
    //             console.log('porit')
    //     }

    //     document.querySelectorAll('.link-hover').addEventListener("mouseover", hoverAnimation);
    // }
};
</script>

<style lang="scss">
#about-body{
    background: radial-gradient(
			103.8% 103.8% at 50% 50%,
			#2562ff 0%,
			#ff4141 100%
		),
		#353131;
	height: 100vh;
    #about-border{
    width: 100vw;
    height: 100vh;
    background: radial-gradient(103.8% 103.8% at 50% 50%, rgb(0,86,94)  0%, rgb(243,0,24) 100%), #353131;
    }
    #about-background{
        position: absolute;
        top: calc(100vh + 50px);
        left: 45px;
        width: calc(100vw - 100px);
        height: calc(100vh - 100px);
        background-color: #353131;
        color: #ffffff;
        font-family: 'Sen', sans-serif;
        text-align: center;
        #about-title, h3{
            margin: 0;
            font-size: 3rem;
            font-family: "Fugaz One", cursive;
            font-weight: 400;
        }
        .about-intro{
            margin-top: 12vh;
            #about-description{
                font-size: 1.125rem;
                a{
                    text-decoration: underline 1px;
                }
            }
        }
        #about-infos{
            margin-top: 11vh;
            display: flex;
            justify-content: center;
            #about-infos-socials{
                width: 33.6vw;
                text-align: right;
                #socials-details{
                    margin-top: 3.6vh;
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-end;
                }
            }
            hr{
                margin: 0 5.2vw;
                width: 1px;
                background-color: #ffffff;
            }
            #about-infos-experiences{
                width: 33.6vw;
                text-align: left;
                #experiences-details{
                    margin-top: 3.6vh;
                    font-size: 1.125rem;
                }
            }
        }
        #project-link{
            a{
                text-decoration: none;
            }
            #about-projects-link{
                margin-top: 7vh;
            }
        }
        a:hover{
            background: linear-gradient(to right, rgb(243,0,24) 0%, rgb(0,86,94) 50%, rgb(0,177,102) 100%);
            background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }
}
@media screen and (max-width: 1025px) {
    #about-body{
        #about-background{
            #about-title, h3{
                font-size: 2.2rem;
            }
            .about-intro{
                margin-top: 9vh;
                #about-description{
                    width: 90%;
                    margin-left: 5%;
                    font-size: 1rem;
                }
            }
            #about-infos{
                margin-top: 8vh;
                #about-infos-experiences{
                    #experiences-details{
                        font-size: 1rem;
                    }
                }
            }
        }
    }
}

</style>
