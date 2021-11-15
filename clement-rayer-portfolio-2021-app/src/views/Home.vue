<template>
    <div>
        <HomeName />
        <HomeAbout />
    </div>
</template>

<script>
import HomeName from '../components/HomeName'
import HomeAbout from '../components/HomeAbout'

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
