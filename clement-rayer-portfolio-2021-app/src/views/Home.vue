<template>
    <div>
        <HomeName />
        <HomeAbout />
    </div>
</template>

<script>
import HomeName from '../components/HomeName.vue'
import HomeAbout from '../components/HomeAbout.vue'

export default {
	name: "Home",
	components: {
        HomeName,
        HomeAbout
	}
};
</script>

<style lang="scss">
</style>
