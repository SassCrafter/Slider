import { addClass, removeClass } from './helperFunctions';
import Effects from './Effects';


export default class {
	constructor() {
		this.init();
		this.reset();
	}

	init() {
		this.container = document.querySelector('.slider');
		this.slides = this.container.querySelectorAll('.slider__slide');
		this.navigation = this.container.querySelector('.slider__navigation');
		this.setEventListeners();
	}

	reset() {
		this.currentSlideIdx = 0;
	}

	setEventListeners() {
		this.navigation.addEventListener('click', this.buttonClickHandler.bind(this));
	}

	buttonClickHandler(e) {
		const target = e.target.closest('.slider__btn');
		if (target.id === 'prev-btn') {
			this.showPrevSlide();
		} else if (target.id === 'next-btn') {
			this.showNextSlide();
		}
	}

	showNextSlide() {
		if (this.currentSlideIdx + 1 < this.slides.length) {
			const currentSlide = this.slides[this.currentSlideIdx];
			const nextSlide = this.slides[this.currentSlideIdx + 1];
			Effects.scaleDown(currentSlide, nextSlide);
			this.currentSlideIdx += 1;
		}
	}

	showPrevSlide() {
		if (this.currentSlideIdx - 1 >= 0) {
			const currentSlide = this.slides[this.currentSlideIdx];
			const prevSlide = this.slides[this.currentSlideIdx - 1];

			Effects.scaleDown(currentSlide, prevSlide, '+');
			this.currentSlideIdx -= 1;
		}
	}
}