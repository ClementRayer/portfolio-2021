<template>
    <div id="home-body">
        <div id="title">
            <div id="name-container">
				<div id="name-outlines-container">
					<p class="name-outline" id="outline-1">CLÉMENT RAYER</p>
					<p class="name-outline" id="outline-2">CLÉMENT RAYER</p>
					<p class="name-outline" id="outline-3">CLÉMENT RAYER</p>
				</div>
                <h1 id="name">CLÉMENT RAYER</h1>
            </div>
        </div>
        <div id="subtext">
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
		},
		
	},
	mounted() {
		anime
			.timeline({
				delay: 200,
				targets: '#name-container',
				easing: 'easeInOutSine'
			})
			.add({
				duration: 1,
				skewX: -20
			})
			.add({
				duration: 100,
				scaleY: [0, 1],
			}, 1)
			.add({
				duration: 100,
				keyframes: [
					{skewX: -20},
					{skewX: 15},
					{skewX: -5},
					{skewX: 0},
				],
			})
		anime({
			targets: '#name-outlines-container',
			translateX: 3,
			duration: 400,
			loop: true,
			direction: 'alternate',
			easing: 'easeInOutSine'
		})
		function outlineSlide(){
			anime
				.timeline({
					duration: 250,
					loop: false,
					direction: 'alternate',
					easing: 'easeInOutSine',
					loopComplete: function() {
						outlineSlide()
					}
				})
				.add({
					targets: '#outline-2',
					translateX: anime.random(-2, 2)
				})
				.add({
					targets: '#outline-3',
					translateX: anime.random(-2, 2)
				}, 0)
				.add({
					targets: '#outline-2',
					duration: 150,
					translateY: anime.random(-2, 2)
				}, 0)
				.add({
					targets: '#outline-3',
					duration: 150,
					translateY: anime.random(-2, 2)
				}, 0)
		}
		window.onload = outlineSlide()
		anime
			.timeline({
				duration: 200,
				delay: 1000,
				loop: true,
				direction: 'alternate',
				easing: 'easeInOutSine',
			})
			.add({
				targets: '#outline-2',
				skewX: anime.random(-50, 50),
			})
			.add({
				targets: '#outline-3',
				skewX: anime.random(-50, 50),
			})
			.add({
				targets: '#outline-2',
				translateX: anime.random(-18, -8),
				translateY: anime.random(-14, -10)
			},0)
			.add({
				targets: '#outline-3',
				translateX: anime.random(8, 18),
				translateY: anime.random(10, 20)
			},0)
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
	height: 100vh;
	width: 100vw;
	#title {
		height: 10vh;
		padding-top: 40vh;
		display: flex;
		justify-content: center;
		align-items: center;
		#name-container{
			transform: scaleX(0);
			#name-outlines-container{
				position: absolute;
				width: 100%;
				left: 0;
				z-index: 1;
				.name-outline {
					position: absolute;
					width: 100%;
					text-align: center;
					font-family: "Fugaz One", cursive;
					font-size: 8rem;
					font-weight: 700;
					letter-spacing: 1vw;
					color: transparent;
					margin-block-start: 0.67em;
					margin-block-end: 0.67em;
				}
				#outline-1{
					left: 0;
					z-index: 3;
					-webkit-text-stroke: 1px #e9dfdf;
				}
				#outline-2{
					left: -0.15vw;
					margin-block-start: 0.65em;
					z-index: 2;
					-webkit-text-stroke: 1px #f30018;
				}
				#outline-3{
					left: 0.15vw;
					margin-block-start: 0.69em;
					z-index: 1;
					-webkit-text-stroke: 1px #00565e;
				}
			}
			#name {
				position: relative;
				width: 80vw;
				text-align: center;
				font-family: "Fugaz One", cursive;
				letter-spacing: 1vw;
				font-size: 8rem;
				color: #a7b9c0;
			}
		}
	}
	#subtext {
		margin-top: 10vh;
		text-align: center;
		h2 {
			font-family: "Fugaz One", cursive;
			font-size: 2.5rem;
			font-weight: 400;
			color: #a7b9c0;
		}
		#arrow-anchor-link{
			margin-top: 25vh;
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
		#title {
			#name-container{
				#name-outlines-container{
					.name-outline {
						font-size: 6rem;
					}
				}
				#name {
					font-size: 6rem;
				}
			}
		}
		#subtext {
			margin-top: 20vh;
			h2{
				font-size: 2rem;
			}
			#arrow-anchor-link{
				margin-top: 12vh;
			}
		}
	}
}
@media screen and (max-width: 415px) {
	#home-body {
		#title {
			#name-container{
				#name-outlines-container{
					.name-outline {
						font-size: 4rem;
					}
				}
				#name {
					font-size: 4rem;
				}
			}
		}
		#subtext {
			width: 80vw;
			margin: 20vh 10vw 0 10vw;
			h2{
				font-size: 1.5rem;
			}
		}
	}
}
@media screen and (max-width: 376px) and (min-height: 650px){
	#home-body {
		#title {
			#name-container{
				#name-outlines-container{
					.name-outline {
						font-size: 3rem;
					}
				}
				#name {
					font-size: 3rem;
				}
			}
		}
		#subtext {
			width: 80vw;
			margin: 20vh 10vw 0 10vw;
			h2{
				font-size: 1.5rem;
			}
		}
	}
}
@media screen and (max-width: 340px) {
	#home-body {
		#title {
			#name-container{
				#name-outlines-container{
					.name-outline {
						font-size: 3rem;
					}
				}
				#name {
					font-size: 3rem;
				}
			}
		}
		#subtext {
			h2{
				font-size: 1.2rem;
			}
		}
	}
}
</style>
