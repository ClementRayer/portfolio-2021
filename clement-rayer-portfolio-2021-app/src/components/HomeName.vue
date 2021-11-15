<template>
    <div id="home-body">
        <div class="bg-circles-container">
            <div class="bg-circle" id="circle-one" style=""></div>
            <div class="bg-circle" id="circle-two"></div>
            <div class="bg-circle" id="circle-three"></div>
            <div id="name-container">
                <p id="name-outline">CLÉMENT RAYER</p>
                <h1 id="name">CLÉMENT RAYER</h1>
            </div>
        </div>
        <div id="subtext">
            <h2>Développeur web - designer - chef de projet</h2>
            <router-link to="/about">
                <img
                    src="../../public/down-arrow.svg"
                    alt="Flèche vers le bas, lien pour la suite du contenu"
                    id="down-arrow"
                />
            </router-link>
        </div>
    </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import anime from "animejs";

export default {
	name: "HomeName",
	// components: {
	//   HelloWorld
	// }
	mounted() {
		///////////////////////////////////////
		// HOME CIRCLES ANIMATION
		// Setting a basic background on load
		var circleOne = document.getElementById("circle-one");
		var circleTwo = document.getElementById("circle-two");
		var circleThree = document.getElementById("circle-three");

		function setInitialBackgroundCircles() {
			circleOne.setAttribute(
				"style",
				"background: radial-gradient(rgba(255,0,0,0.3) 0%, rgba(192,92,188,0.3) 100%)"
			);
			circleTwo.setAttribute(
				"style",
				"background: radial-gradient(rgba(0,255,0,0.3) 0%, rgba(100,92,192,0.3) 100%)"
			);
			circleThree.setAttribute(
				"style",
				"background: radial-gradient(rgba(0,0,255,0.3) 0%, rgba(122, 108, 80, 0.3) 100%)"
			);
		}

		window.onload = setInitialBackgroundCircles();

		// Animation core
		// eslint-disable-next-line no-unused-vars
		var backgroundCirclesColor = anime
			.timeline({
				easing: "linear",
				direction: "alternate",
				loop: true,
			})
			.add(
				{
					targets: "#circle-one",
					duration: function () {
						var durationOne = anime.random(800, 3000);
						return durationOne;
					},
					keyframes: [
						{
							background:
								"radial-gradient(rgba(0,0,0,0.5) 0%, rgba(255,0,255,1) 100%)",
						},
						{
							background:
								"radial-gradient(rgba(60,120,200,1) 0%, rgba(34,92,10,1) 100%)",
						},
					],
				},
				0
			)
			.add(
				{
					targets: "#circle-two",
					duration: function () {
						var durationTwo = anime.random(800, 3000);
						return durationTwo;
					},
					keyframes: [
						{
							background:
								"radial-gradient(rgba(74,183,22,1) 0%, rgba(100,92,192,1) 100%)",
						},
						{
							background:
								"radial-gradient(rgba(143,34,200,1) 0%, rgba(180,240,46,1) 100%)",
						},
					],
					delay: 333,
				},
				0
			)
			.add(
				{
					targets: "#circle-three",
					duration: function () {
						var durationThree = anime.random(800, 3000);
						return durationThree;
					},
					keyframes: [
						{
							background:
								"radial-gradient(rgba(22,183,183,1) 0%, rgba(122, 108, 80, 1) 100%)",
						},
						{
							background:
								"radial-gradient(rgba(250,30,70,.7) 0%, rgba(255, 10, 220, .7) 100%)",
						},
					],
					delay: 666,
				},
				0
			);
	},
};
</script>

<style lang="scss">
#home-body {
	background: radial-gradient(
			103.8% 103.8% at 50% 50%,
			#2562ff 0%,
			#ff4141 100%
		),#353131;
	height: 100vh;
	.bg-circles-container {
		height: 60vh;
		padding-top: 10vh;
		display: flex;
		justify-content: center;
		align-items: center;
		.bg-circle {
			width: 60vh;
			border-radius: 10000px;
			flex-shrink: 0;
			height: 100%;
		}
		#circle-two {
			margin-left: -35vh;
		}
		#circle-three {
			margin-left: -35vh;
		}
		#name-container {
			position: absolute;
			#name-outline {
				position: absolute;
				margin-block-start: 0.67em;
				margin-block-end: 0.67em;
				text-align: center;
				font-size: 7rem;
				font-family: "Fugaz One", cursive;
				color: transparent;
				-webkit-text-stroke: 3px #00ffa3;
				mix-blend-mode: exclusion;
			}
			#name {
				text-align: center;
				position: relative;
				font-size: 7rem;
				color: #00ffa3;
				font-family: "Fugaz One", cursive;
				mix-blend-mode: saturation;
			}
			#name::before {
				content: "CLÉMENT RAYER";
				color: #ffffff;
				font-size: 6.9rem;
				margin-left: 0.4rem;
				text-align: center;
				mix-blend-mode: normal;
				position: absolute;
				z-index: 10;
			}
		}
	}
	#subtext {
		margin-top: 9vh;
		text-align: center;
		h2 {
			margin-top: 0;
			font-family: "Fugaz One", cursive;
			font-size: 2.5rem;
			text-transform: uppercase;
			color: transparent;
			-webkit-text-stroke: 0.1px #ffffff;
		}
		#down-arrow {
			width: 3.2vw;
			margin: 4vh 0 0 0;
		}
	}
}
</style>
