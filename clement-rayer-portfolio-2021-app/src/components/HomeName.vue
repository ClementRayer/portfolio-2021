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
            <div @click="scrollToNextScreen" id="arrow-anchor-link">
				<svg width="66" height="34" viewBox="0 0 66 34" fill="none" stroke="#ffffff" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="33,3 33,3 33,3 33,3" stroke-width="5" stroke-linecap="round" id="down-arrow"/>
                </svg>
            </div>
        </div>
    </div>
</template>

<script>
import anime from "animejs";

export default {
	name: "HomeName",
	methods: {
		scrollToNextScreen() {
			var height = window.innerHeight;
			window.scrollTo({
				top: height,
				behavior: 'smooth'
			});
		}
	},
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
		anime({
			targets: '#down-arrow',
			points: [
				{ value: '33,3 33,3 33,3 33,3' },
				{ value: '3,3 33,3 63,3 33,3' },
				{ value: '3,3 33,30 63,3 33,30' }
			],
			easing: 'easeOutQuad',
			duration: 300
		})
	}
};
</script>

<style lang="scss">
#home-body {
	background-image: url('../../public/portfolio-bg.png');
	height: 100vh;
	width: 100vw;
	.bg-circles-container {
		height: 60vh;
		padding-top: 10vh;
		display: flex;
		justify-content: center;
		align-items: center;
		.bg-circle {
			width: 60vh;
			border-radius: 100%;
			flex-shrink: 0;
			height: 100%;
			background-color: rgba(0, 255, 0, 0.3);
		}
		#circle-two, #circle-three {
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
				margin: 0.2rem 0 0 0.4rem;
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
		#arrow-anchor-link{
			cursor: pointer;
			#down-arrow {
				width: 3.2vw;
				margin: 4vh 0 0 0;
			}
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
@media screen and (max-width: 415px) {
	#home-body {
		.bg-circles-container {
			height: fit-content;
			padding-top: 5vh;
			flex-direction: column;
			.bg-circle{
				width: 80vw;
				height: 80vw;
			}
			#circle-two, #circle-three {
				margin: -60vw 0 0 0;
			}
			#name-container {
				#name-outline{
					font-size: 3.5rem;
				}
				#name{
					font-size: 3.5rem;
				}
				#name::before{
					font-size: 3.4rem;
					margin: 0.2rem 0 0 -3.5rem;
				}
			}
		}
		#subtext {
			margin-top: 4vh;
			h2, #h2-outline{
				width: 80%;
				margin-left: 10%;
				font-size: 1.5rem;
			}
			#h2-outline{
				color: #313535;
				mix-blend-mode: normal;
			}
			#arrow-anchor-link{
				#down-arrow{
					width: 15vw;
					margin: 0;
				}
			}
		}
	}
}
@media screen and (max-width: 376px) and (min-height: 720px){
	#home-body {
		.bg-circles-container {
			.bg-circle{
				width: 85vw;
				height: 85vw;
			}
			#circle-two, #circle-three {
				margin: -55vw 0 0 0;
			}
		}
		#subtext{
			#arrow-anchor-link{
				#down-arrow{
					margin-top: 2vh;
				}
			}
		}
	}	
}
@media screen and (max-width: 340px) {
	#home-body {
		.bg-circles-container {
			.bg-circle{
				width: 75vw;
				height: 75vw;
			}
			#circle-two, #circle-three {
				margin: -55vw 0 0 0;
			}
			#name-container{
				#name::before{
					margin-left: -1.5rem;
				}
			}
		}
		#subtext{
			h2, #h2-outline{
				font-size: 1.25rem;
			}
			#arrow-anchor-link{
				#down-arrow{
					margin-top: 0;
				}
			}
		}
	}	
}
</style>
