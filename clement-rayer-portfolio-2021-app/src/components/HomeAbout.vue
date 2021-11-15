<template>
    <div id="about-body">
        <div id="about-container">
            <div id="about-border"></div>
            <div id="about-background"></div>
        </div>
    </div>
</template>

<script>

export default {
	name: "HomeAbout"
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
    background: radial-gradient(103.8% 103.8% at 50% 50%, #2562FF 0%, #FF4141 100%), #353131;
    }
    #about-background{
        position: absolute;
        top: calc(100vh + 50px);
        left: 50px;
        width: calc(100vw - 100px);
        height: calc(100vh - 100px);
        background-color: #353131;
        }
}
</style>
