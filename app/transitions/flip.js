import {
  animate,
  Promise,
  isAnimating,
  finish
} from "liquid-fire";

export default function flip(dimension, opts) {
	let property, firstStep;
	const flippingElement = findFlippingElement(this);

	if (flippingElement) {
		// We still have some older version that is in the process of
		// revealing, so our first step is waiting for it to finish.
		firstStep = finish(flippingElement, 'flip-out');
	} else {
		firstStep = Promise.resolve();
	}

	return firstStep.then(() => {

		if (dimension.toLowerCase() === 'x') {
			property = 'rotateX';
		} else {
			property = 'rotateY';
		}

		let firstRotation = { };
		firstRotation[property] = '90deg';

		let secondRotation = { };
		secondRotation[property] = ['0deg', '-90deg']

		return animate(this.oldElement, firstRotation, opts, 'flip-out').then(() => {
			this.oldElement.css('display', 'none');
			return animate(this.newElement, secondRotation, opts, 'flip-out');
		});
	});
}

function findFlippingElement(context) {
	for (var i = 0; i < context.older.length; i++) {
		var entry = context.older[i];
		if (isAnimating(entry.element, 'flip-out')) {
			return entry.element;
		}
	}
	if (isAnimating(context.oldElement, 'flip-out')) {
		return context.oldElement;
	}
}
