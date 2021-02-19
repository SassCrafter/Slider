import anime from 'animejs/lib/anime.es.js';

export default class {
	constructor() {

	}

	static scaleDown(el, nextEl, operator = '-') {
		const elContent = el.querySelector('.slider__content');
		const nextElContent = nextEl.querySelector('.slider__content');
		const tl = anime.timeline({
			easing: 'easeOutBounce',
			duration: 400,
		});

		tl
		.add({
			targets: [el, nextEl],
			scale: 0.8,
			 easing: 'easeInElastic(1, .6)',
		})
		.add({
			targets: [elContent, nextElContent],
			translateY: 50,
			opacity: 0,
			easing: 'linear',
		}, '-=350')
		.add({
			targets: el.parentElement,
			translateX: `${operator}=100%`,
			delay: 400,
			easing: 'linear'
		})
		.add({
			targets: [el, nextEl],
			scale: 1
		})
		.add({
			targets: [elContent, nextElContent],
			translateY: -50,
			opacity: 1,
			easing: 'linear'
		})
	}
}