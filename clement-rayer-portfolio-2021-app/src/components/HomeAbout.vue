<template>
    <div id="about-body">
        <div id="about-container">
            <div id="about-background">
                <div class="about-intro">
                    <p id="about-title">Hey !</p>
                    <p id="about-description">
                        Moi c’est Clément, développeur web, designer et chef de projet 👋<br>
                        Je touche un peu à tout, mais mon objectif c’est de me concentrer sur le développement web, en freelance et en entreprise<br>
                        En complément des informations ci-dessous, vous pouvez retrouver <a href="https://clementrayer.fr/Rayer-Clement-CV.pdf" target="blank">mon CV ici</a>, et mes différents projets <router-link to="/projects" class="link-hover">par là</router-link><br>
                        N’hésitez pas à me contacter pour toute demande 😉<br>
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
                   <h3 id="about-projects-link"><router-link to="/projects" class="link-hover">Voir mes projets</router-link></h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HomeAboutSocials from '../components/HomeAboutSocials.vue'
import HomeAboutExperiences from '../components/HomeAboutExperiences.vue'
import { mapState } from 'vuex'
// import anime from "animejs";

export default {
	name: "HomeAbout",
    components: {
        HomeAboutSocials,
        HomeAboutExperiences
    },
    data() {
        return {
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
    computed: {
        ...mapState({
            socialsList : 'socialsList'
        })
    }
};
</script>

<style lang="scss">
#about-body{
    background: radial-gradient(103.8% 103.8% at 50% 50%, rgb(0,86,94)  0%, rgb(243,0,24) 100%), #353131;
	height: 100vh;
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
        display: flex;
        flex-direction: column;
        justify-content: center;
        #about-title, h3{
            margin: 0;
            font-size: 2rem;
            font-family: "Fugaz One", cursive;
            font-weight: 400;
        }
        .about-intro{
            #about-description{
                font-size: 1rem;
                a{
                    text-decoration: underline 1px;
                }
                a:hover{
                    text-decoration: none;
                }
            }
        }
        #about-infos{
            margin-top: 8vh;
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
@media screen and (max-width: 1367px) {
    #about-body{
        #about-background{
            top: calc(100vh + 40px);
            left: 45px;
            width: calc(100vw - 80px);
            height: calc(100vh - 80px);
            #about-title, h3{
                font-size: 2rem;
            }
            .about-intro{
                margin-top: 8vh;
                #about-description{
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

@media screen and (max-width: 1025px) {
    #about-body{
        #about-background{
            #about-title, h3{
                font-size: 2.2rem;
            }
            .about-intro{
                margin-top: 12vh;
                #about-description{
                    width: 90%;
                    margin-left: 5%;
                }
            }
            #about-infos{
                margin-top: 10vh;
                #about-infos-experiences{
                    #experiences-details{
                        font-size: 1rem;
                    }
                }
            }
        }
    }
}
@media screen and (max-width: 415px) {
    #about-body{
        height: auto;
        padding: 0.1px 0 20px 0;
        #about-background{
            position: inherit;
            width: calc(100vw - 40px);
            height: fit-content;
            margin: 20px 0 0 20px;
            padding-bottom: 30px;
            .about-intro{
                margin-top: 20px;
                #about-title{
                    padding-top: 20px;
                }
                #about-description{
                    width: 86.6%;
                    margin-left: 6.7%;
                }
            }
            h3{
                font-size: 1.5rem;
                text-align: center;
            }
            #about-infos{
                margin-top: 8vh;
                flex-direction: column;
                align-items: center;
                #about-infos-socials{
                    width: 86.6%;
                    #socials-details{
                        justify-content: space-around;
                    }
                }
                hr{
                    display: none;
                }
                #about-infos-experiences{
                    width: 72%;
                    margin-top: 5vh;
                    #experiences-details{
                        font-size: 1rem;
                    }
                }
            }
        }
    }
}
</style>
