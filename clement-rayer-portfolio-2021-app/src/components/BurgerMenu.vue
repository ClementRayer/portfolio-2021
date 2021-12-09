<template>
    <div class="burger-menu" :class="{'burger-menu-opened' : opened}">
        <div id="burger-menu-cta" @click="toggleMenu"></div>
        <div id="burger-menu-content">
            <div id="burger-menu-links">
                <div class="burger-menu-links-item-container">
                    <span class="animated-line top-line top-line-first"></span>
                    <span class="animated-line top-line top-line-second"></span>
                    <span class="animated-line bottom-line bottom-line-first"></span>
                    <span class="animated-line bottom-line bottom-line-second"></span>
                    <router-link to="/" @click="forceCloseMenu" class="burger-menu-links-item">Accueil</router-link>
                </div>
                <div class="burger-menu-links-item-container">
                    <span class="animated-line top-line top-line-first"></span>
                    <span class="animated-line top-line top-line-second"></span>
                    <span class="animated-line bottom-line bottom-line-first"></span>
                    <span class="animated-line bottom-line bottom-line-second"></span>
                    <router-link to="/" @click="scrollToNextScreen" class="burger-menu-links-item">A propos</router-link>
                </div>
                <div class="burger-menu-links-item-container">
                    <span class="animated-line top-line top-line-first"></span>
                    <span class="animated-line top-line top-line-second"></span>
                    <span class="animated-line bottom-line bottom-line-first"></span>
                    <span class="animated-line bottom-line bottom-line-second"></span>
                    <router-link to="/projects" class="burger-menu-links-item">Projets</router-link>
                </div>
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