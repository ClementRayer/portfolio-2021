<template>
    <div class="burger-menu" :class="{'burger-menu-opened' : burgerMenuOpen}">
        <div id="burger-menu-cta" @click="toggleMenu">
            <svg width="40" height="24" viewBox="0 0 40 24" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
                <polygon points="4,0 36,0 40,4 0,4" id="burger-top-bar" />
                <polygon points="0,10 40,10 40,14 0,14" id="burger-mid-bar-1" />
                <polygon points="0,10 40,10 40,14 0,14" id="burger-mid-bar-2" />
                <polygon points="0,20 40,20 36,24 4,24" id="burger-low-bar" />
            </svg>
        </div>
        <div id="burger-menu-content">
            <div id="burger-menu-links">
                <router-link to="/" @click="forceCloseMenu" class="burger-menu-links-item-container">
                    <span class="animated-line top-line top-line-first"></span>
                    <span class="animated-line top-line top-line-second"></span>
                    <span class="animated-line bottom-line bottom-line-first"></span>
                    <span class="animated-line bottom-line bottom-line-second"></span>
                    <span class="burger-menu-links-item">Accueil</span>
                </router-link>
                <div class="burger-menu-links-item-container" @click="scrollToAbout">
                    <span class="animated-line top-line top-line-first"></span>
                    <span class="animated-line top-line top-line-second"></span>
                    <span class="animated-line bottom-line bottom-line-first"></span>
                    <span class="animated-line bottom-line bottom-line-second"></span>
                    <span class="burger-menu-links-item">A propos</span>
                </div>
                <router-link to="/projects" @click="forceCloseMenu"  class="burger-menu-links-item-container">
                    <span class="animated-line top-line top-line-first"></span>
                    <span class="animated-line top-line top-line-second"></span>
                    <span class="animated-line bottom-line bottom-line-first"></span>
                    <span class="animated-line bottom-line bottom-line-second"></span>
                    <span class="burger-menu-links-item">Projets</span>
                </router-link>
            </div>
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
</template>

<script>
import BurgerMenuSocials from '../components/BurgerMenuSocials.vue'
import { mapState } from 'vuex'
import anime from "animejs";

export default {
	name: "BurgerMenu",
    components:{
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
            }else{
                this.openBurgerAnimation()
            }
            this.$store.commit('TOGGLE_MENU');
        },
        forceCloseMenu(){
            this.$store.commit('FORCE_MENU_CLOSE');
            this.closeBurgerAnimation();
            this.onAnchor = false;
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
        openBurgerAnimation(){
            anime({
                targets: '#burger-top-bar',
                points: [
                    { value: '4,0 36,0 40,4 0,4' },
                    { value: '4,0 36,0 36,0 4,0' }
                ],
                easing: 'easeOutQuad',
                duration: 250
            })
            anime({
                targets: '#burger-low-bar',
                points: [
                    { value: '0,20 40,20 36,24 4,24' },
                    { value: '4,24 36,24 36,24 4,24' }
                ],
                easing: 'easeOutQuad',
                duration: 250
            })
            anime({
                targets: '#burger-mid-bar-1',
                points: [
                    { value: '0,10 40,10 40,14 0,14' },
                    { value: '2,0  39,22 37,25 0,3' }
                ],
                easing: 'easeOutQuad',
                duration: 400
            })
            anime({
                targets: '#burger-mid-bar-2',
                points: [
                    { value: '0,10 0,14 40,14 40,10' },
                    { value: '1,22 3,25 40,3 38,0' }
                ],
                easing: 'easeOutQuad',
                duration: 400
            })
        },
        closeBurgerAnimation(){
            anime({
                targets: '#burger-top-bar',
                points: [
                    { value: '4,0 36,0 36,0 4,0' },
                    { value: '4,0 36,0 40,4 0,4' }
                ],
                easing: 'easeOutQuad',
                duration: 250
            })
            anime({
                targets: '#burger-low-bar',
                points: [
                    { value: '4,24 36,24 36,24 4,24' },
                    { value: '0,20 40,20 36,24 4,24' }
                ],
                easing: 'easeOutQuad',
                duration: 250
            })
            anime({
                targets: '#burger-mid-bar-1',
                points: [
                    { value: '2,0  39,22 37,25 0,3' },
                    { value: '0,10 40,10 40,14 0,14' }
                ],
                easing: 'easeOutQuad',
                duration: 400
            })
            anime({
                targets: '#burger-mid-bar-2',
                points: [
                    { value: '1,22 3,25 40,3 38,0 ' },
                    { value: '0,10 0,14 40,14 40,10' }
                ],
                easing: 'easeOutQuad',
                duration: 400
            })
        }
    },
    mounted(){
        
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
        height: 24px;
        position: fixed;
        top: 6vh;
        right: 4.5vw;
        z-index: 100;
        transition: 400ms ease-out;
    }
    #burger-menu-content{
        height: 10vh;
        width: 90vw;
        position: fixed;
        top: calc(-10vh - 1px);
        padding: 0 5vw;
        font-family: "Fugaz One", cursive;
        font-size: 3rem;
        background-color: #000000;
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
                .animated-line{
                    width: 100%;
                    height: 1vh;
                    position: absolute;
                    left: 0;
                    background: #ffffff;
                    display: none;
                }
                .top-line{
                    top: 0;
                }
                .top-line-first{
                    animation: 500ms roll-effect linear infinite;
                }
                .top-line-second{
                    left: -105%;
                    animation: 500ms roll-effect 45ms linear infinite;
                }
                .bottom-line{
                    top: 9vh;
                }
                .bottom-line-first{
                    animation: 500ms roll-effect-reverse linear infinite;
                }
                .bottom-line-second{
                    left: 105%;
                    animation: 500ms roll-effect-reverse 45ms linear infinite;
                }
                .burger-menu-links-item{
                    height: 10vh;
                    line-height: 10vh;
                    color: transparent;
                    -webkit-text-stroke: 1px #ffffff;
                    &:hover{
                        color: #ffffff;
                        -webkit-text-stroke: none;
                    }
                }
                &:hover{
                    .animated-line{
                        display: block;
                    }
                }
            }
        }
        #burger-menu-contact{
            display: flex;
            margin-right: 3.5vw;
        }
    }
}
.burger-menu-opened{
    #burger-menu-cta{
        transform: translateY(-2vh);
    }
    #burger-menu-content{
        transform: translateY(10vh);
    }
}
@keyframes roll-effect {
  0% {
    transform:translateX(0);
  }
  99.99%
  {
    transform:translateX(115%);
    opacity: 1;
  }
  100%{
      opacity: 0;
      transform: translateX(0);
  }
}
@keyframes roll-effect-reverse {
  0% {
    transform:translateX(0);
  }
  99.99%
  {
    transform:translateX(-115%);
    opacity: 1;
  }
  100%{
      opacity: 0;
      transform: translateX(0);
  }
}
</style>