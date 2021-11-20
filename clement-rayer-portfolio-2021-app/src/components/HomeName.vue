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
			<p id="h2-outline">Développeur web - designer - chef de projet</p>
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
import anime from "animejs";

export default {
	name: "HomeName",
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
				"background: radial-gradient(rgba(243,0,24,0.3) 0%, rgba(243,0,24,0.8) 100%)"
			);
			circleTwo.setAttribute(
				"style",
				"background: radial-gradient(rgba(18,0,43,0.3) 0%, rgba(18,0,43,0.8) 100%)"
			);
			circleThree.setAttribute(
				"style",
				"background: radial-gradient(rgba(0,177,102,0.3) 0%, rgba(0,177,102,0.8) 100%)"
			);
		}

		window.onload = setInitialBackgroundCircles();

		// Animation core
		anime
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
								"radial-gradient(rgba(243,0,24,0.3) 0%, rgba(243,0,24,0.4) 100%)",
						},
						{
							background:
								"radial-gradient(rgba(243,0,24,0.8) 0%, rgba(243,0,24,0.9) 100%)",
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
								"radial-gradient(rgba(18,0,43,0.3) 0%, rgba(18,0,43,0.4) 100%)",
						},
						{
							background:
								"radial-gradient(rgba(18,0,43,0.8) 0%, rgba(18,0,43,0.9) 100%)",
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
								"radial-gradient(rgba(0,177,102,0.3) 0%, rgba(0,177,102,0.4) 100%)",
						},
						{
							background:
								"radial-gradient(rgba(0,177,102,0.8) 0%, rgba(0,177,102,0.9) 100%)",
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
	background-image: url('../../public/portfolio-bg.png');
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
		h2, #h2-outline {
			margin-top: 0;
			font-family: "Fugaz One", cursive;
			font-size: 2.5rem;
			text-transform: uppercase;
			color: transparent;
			-webkit-text-stroke: 0.1px #ffffff;
			mix-blend-mode: normal;
		}
		#h2-outline{
			position: absolute;
			width: 100vw;
			text-align: center;
			mix-blend-mode: multiply;
			color: #00ffa3;
			z-index: 10;
		}
		#down-arrow {
			width: 3.2vw;
			margin: 4vh 0 0 0;
		}
	}
}
@media screen and (max-width: 1025px) {
	#home-body {
		.bg-circles-container {
			#name-container {
				#name-outline{
					font-size: 6rem;
				}
				#name{
					font-size: 6rem;
				}
				#name::before{
					font-size: 5.9rem;
				}
			}
		}
		#subtext {
			h2, #h2-outline{
				font-size: 2rem;
			}
		}
	}
}
</style>
