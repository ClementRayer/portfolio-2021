<template>
    <div class="burger-menu" :class="{'burger-menu-opened' : burgerMenuOpen}">
        <div id="burger-menu-cta" @click="toggleMenu">
            <svg width="40" height="24" viewBox="0 0 40 24" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
                <polygon points="4,0 20,0 36,0 40,4 20,4 0,4" id="burger-top-bar" />
                <polygon points="0,10 20,10 20,14 0,14" id="burger-mid-bar-1" />
                <polygon points="20,10 40,10 40,14 20,14" id="burger-mid-bar-2" />
                <polygon points="0,20 20,20 40,20 36,24 20,24 4,24" id="burger-low-bar" />
            </svg>
        </div>
        <div id="burger-menu-content">
            <div id="burger-menu-links">
                <router-link to="/" @click="forceCloseMenu" class="burger-menu-links-item-container">
                    <BurgerMenuLink buttonText="Accueil" />
                </router-link>
                <div class="burger-menu-links-item-container" @click="scrollToAbout">
                    <BurgerMenuLink buttonText="A propos" />
                </div>
                <router-link to="/projects" @click="forceCloseMenu"  class="burger-menu-links-item-container">
                    <BurgerMenuLink buttonText="Projets" />
                </router-link>
            </div>
            <div id="burger-menu-right">
                <div id="burger-menu-contact">
                    <BurgerMenuSocials
                        v-for="item in socialsList"
                        :link="item.link"
                        :title="item.title"
                        :source="item.source"
                        :alt="item.alt"
                        :key="item.title"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BurgerMenuLink from '../components/BurgerMenuLink.vue'
import BurgerMenuSocials from '../components/BurgerMenuSocials.vue'
import { mapState } from 'vuex'
import anime from "animejs";

var viewportWidth = window.innerWidth;
export default {
	name: "BurgerMenu",
    components:{
        BurgerMenuLink,
        BurgerMenuSocials
    },
    data(){
        return{
            onAnchor : false
        }
    },
    computed: {
        ...mapState({
            burgerMenuOpen : 'burgerMenuOpen',
            socialsList : 'socialsList'
        })
    },
    methods:{
        toggleMenu(){
            if(this.$store.state.burgerMenuOpen){
                this.closeBurgerAnimation()
                if(viewportWidth < 450){
                    this.mobileSuspendScroll('visible')
                }
            }else{
                this.openBurgerAnimation()
                if(viewportWidth < 450){
                    this.mobileSuspendScroll('hidden')
                }
            }
            this.$store.commit('TOGGLE_MENU');
        },
        forceCloseMenu(){
            this.$store.commit('FORCE_MENU_CLOSE');
            this.closeBurgerAnimation();
            this.onAnchor = false;
            if(viewportWidth < 450){
                this.mobileSuspendScroll('visible')
            }
        },
        scrollToAbout() {
			var height = window.innerHeight;
            if(this.onAnchor == false){
                this.$router.push('/')
                window.scrollTo({
                    top: height,
                    behavior: 'smooth'
                });
                this.onAnchor = true;
            }
            this.toggleMenu()
		},
        mobileSuspendScroll(property){
            document.body.setAttribute('style', `overflow: ${property}`)
        },
        openBurgerAnimation(){
            anime({
                targets: '#burger-top-bar',
                points: [
                    { value: '4,0 20,0 36,0 40,4 20,4 0,4' },
                    { value: '4,1 20,10 36,1 38,4 20,14 2,4' }
                ],
                easing: 'easeOutQuad',
                duration: 250
            })
            anime({
                targets: '#burger-low-bar',
                points: [
                    { value: '0,20 20,20 40,20 36,24 20,24 4,24' },
                    { value: '2,20 20,10 38,20 36,23 20,14 4,23' }
                ],
                easing: 'easeOutQuad',
                duration: 250
            })
            anime({
                targets: '#burger-mid-bar-1',
                points: [
                    { value: '0,10 20,10 20,14 0,14' },
                    { value: '0,10 0,10 0,14 0,14' }
                ],
                easing: 'easeOutQuad',
                duration: 250
            })
            anime({
                targets: '#burger-mid-bar-2',
                points: [
                    { value: '20,10 40,10 40,14 20,14' },
                    { value: '40,10 40,10 40,14 40,14' }
                ],
                easing: 'easeOutQuad',
                duration: 250
            })
        },
        closeBurgerAnimation(){
            anime({
                targets: '#burger-top-bar',
                points: [
                    { value: '4,1 20,10 36,1 38,4 20,14 2,4' },
                    { value: '4,0 20,0 36,0 40,4 20,4 0,4' }
                ],
                easing: 'easeOutQuad',
                duration: 250
            })
            anime({
                targets: '#burger-low-bar',
                points: [
                    { value: '2,20 20,10 38,20 36,23 20,14 4,23' },
                    { value: '0,20 20,20 40,20 36,24 20,24 4,24' }
                ],
                easing: 'easeOutQuad',
                duration: 250
            })
            anime({
                targets: '#burger-mid-bar-1',
                points: [
                    { value: '0,10 0,10 0,14 0,14' },
                    { value: '0,10 20,10 20,14 0,14' }
                ],
                easing: 'easeOutQuad',
                duration: 250
            })
            anime({
                targets: '#burger-mid-bar-2',
                points: [
                    { value: '40,10 40,10 40,14 40,14' },
                    { value: '20,10 40,10 40,14 20,14' }
                ],
                easing: 'easeOutQuad',
                duration: 250
            })
        }
    }
};
</script>

<style lang="scss">
.burger-menu{
    position: absolute;
    z-index: 10;
    cursor: pointer;
    #burger-menu-cta{
        width: 40px;
        top: 8vh;
        right: 3.5vw;
        z-index: 100;
        position: fixed;
        transition: 400ms ease-out;
    }
    #burger-menu-content{
        height: 10vh;
        width: 91vw;
        position: fixed;
        top: calc(-10vh - 1px);
        padding: 0 5vw;
        font-family: "Fugaz One", cursive;
        font-size: 3rem;
        background-color: rgba(0, 0, 0, 0.8);
        text-transform: uppercase;
        transition: 400ms ease-out;
        display: flex;
        align-items: center;
        justify-content: space-between;
        #burger-menu-links{
            width: 50%;
            display: flex;
            justify-content: space-between;
            .burger-menu-links-item-container{
                position: relative;
                width: 30%;
                text-align: center;
                overflow: hidden;
                &:hover{
                    .animated-line{
                        display: block;
                    }
                }
            }
        }
        #burger-menu-right{
            display: flex;
            align-items: center;
            #burger-menu-contact{
                display: flex;
                margin-right: 3.5vw;
            }
            
        }
    }
}
.burger-menu-opened{
    #burger-menu-cta{
        transform: translateY(-4.7vh);
    }
    #burger-menu-content{
        transform: translateY(10vh);
    }
}
@media screen and (max-width: 1367px) {
    .burger-menu{
        #burger-menu-content{
            font-size: 2rem;
            #burger-menu-right{
                #burger-menu-cta{
                    font-size: 2.5rem;
                }
            }
        }
    }
}
@media screen and (max-width: 1025px) {
    .burger-menu{
        #burger-menu-content{
            font-size: 1.5rem;
            #burger-menu-right{
                #burger-menu-contact{
                    margin-right: 5vw;
                }
            }
        }
    }
    .burger-menu-opened{
        #burger-menu-cta{
            transform: translateY(-2.5vh);
        }
    }
}
@media screen and (max-width: 850px) {
    .burger-menu{
        #burger-menu-content{
            font-size: 1.25rem;
            #burger-menu-right{
                #burger-menu-contact{
                    margin-right: 7vw;
                }
            }
        }
    }
    .burger-menu-opened{
        #burger-menu-cta{
            transform: translateY(-2vh);
        }
    }
}
@media screen and (max-width: 415px) {
    .burger-menu{
        #burger-menu-cta{
            top: 3.55vh;
            right: 6vw;
        }
        #burger-menu-content{
            height: 100vh;
            width: 100vw;
            top: calc(-100vh - 1px);
            padding: 0;
            font-size: 3rem;
            flex-direction: column;
            justify-content: space-evenly;
            #burger-menu-links{
                width: 100vw;
                flex-direction: column;
                align-items: center;
                .burger-menu-links-item-container{
                    width: 100%;
                }
            }
            #burger-menu-right{
                #burger-menu-contact{
                    flex-direction: column;
                }
            }
        }
    }
    .burger-menu-opened{
        #burger-menu-cta{
            transform: translateY(0);
        }
        #burger-menu-content{
            transform: translateY(100vh);
        }
    }
}
</style>