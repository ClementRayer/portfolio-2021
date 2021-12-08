<template>
    <div>
        <HomeName />
        <HomeAbout />
        <BurgerMenu />
    </div>
</template>

<script>
import HomeName from '../components/HomeName.vue'
import HomeAbout from '../components/HomeAbout.vue'
import BurgerMenu from '../components/BurgerMenu.vue'

export default {
	name: "Home",
	components: {
        HomeName,
        HomeAbout,
        BurgerMenu
	}
};
</script>

<style lang="scss">
::-webkit-scrollbar {
    display: none;
}
</style>