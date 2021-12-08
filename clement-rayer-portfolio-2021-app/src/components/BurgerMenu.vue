<template>
    <div class="burger-menu" :class="{'burger-menu-opened' : opened}">
        <div id="burger-menu-cta" @click="toggleMenu"></div>
        <div id="burger-menu-content">
            <div id="burger-menu-links">
                <router-link to="/" @click="forceCloseMenu">Accueil</router-link>
                <router-link to="/" @click="scrollToNextScreen">A propos</router-link>
                <router-link to="/projects">Projets</router-link>
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

export default {
	name: "BurgerMenu",
    components:{
        BurgerMenuSocials
    },
    data(){
        return{
            opened : false
        }
    },
    computed: {
        ...mapState({
            socialsList : 'socialsList'
        })
    },
    methods:{
        toggleMenu(){
            this.opened = !this.opened
        },
        forceCloseMenu(){
            this.opened = false
        },
        scrollToNextScreen() {
			var height = window.innerHeight;
			window.scrollTo({
				top: height,
				behavior: 'smooth'
			});
            this.toggleMenu()
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
        top: 10vh;
        right: 4.5vw;
        background: url('../../public/burger-menu.svg');
        transition: 500ms ease-out;
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
        transition: 500ms ease-out;
        display: flex;
        align-items: center;
        justify-content: space-between;
        #burger-menu-links{
            width: 50%;
            display: flex;
            justify-content: space-between;
            a{
                color: transparent;
                -webkit-text-stroke: 1px #ffffff;
                &:hover{
                    color: #ffffff;
                    -webkit-text-stroke: none;
                }
            }
        }
        #burger-menu-contact{
            display: flex;
        }
    }
}
.burger-menu-opened{
    #burger-menu-cta{
        transform: translateY(2vh);
    }
    #burger-menu-content{
        transform: translateY(10vh);
    }
}
</style>