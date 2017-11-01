import {
  animate,
  Promise,
  isAnimating,
  finish
} from "liquid-fire";

export default function flip(dimension, opts) {
	let property, firstStep;
	const flippingElement = findFlippingElement(this);

  if (!opts) {
    opts = { };
  }

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
		secondRotation[property] = ['0deg', '-90deg'];

    let [easeIn, easeOut] = ['ease-in', 'ease-out'];
    if (opts.easing) {
      [easeIn, easeOut] = opts.easing;
    }
    let duration = 100;
    if (opts.duration) {
      duration = opts.duration / 2;
    }

    let firstOpts = new Map([opts, {
      easing: easeIn,
      duration
    }]);
    let secondOpts = new Map([opts, {
      easing: easeOut,
      duration
    }]);

    this.oldElement.parent('.liquid-container')
        .css('perspective', opts.perspective ? opts.perspective : '1000px')
        .css('overflow', 'visible');

		return animate(this.oldElement, firstRotation, firstOpts, 'flip-out').then(() => {
			this.oldElement.css('visibility', 'hidden');
			return animate(this.newElement, secondRotation, secondOpts, 'flip-out');
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
