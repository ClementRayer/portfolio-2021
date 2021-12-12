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
import BurgerMenuLink from '../components/BurgerMenuLink.vue'
import BurgerMenuSocials from '../components/BurgerMenuSocials.vue'
import { mapState } from 'vuex'
import anime from "animejs";

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
        height: 24px;
        position: fixed;
        top: 6vh;
        right: 3.5vw;
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
</style>