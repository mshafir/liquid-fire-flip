# liquid-fire-flip

> Flip transitions for [liquid-fire](https://ember-animation.github.io/liquid-fire/).

This addon defines two new transitions for liquid-fire: `flipX` and `flipY`.

## Installation

In your ember-cli project, run:

```bash
ember install liquid-fire # if not already installed
ember install liquid-fire-flip
```

## Usage

[Define a liquid-fire transition](https://ef4.github.io/liquid-fire/#/transition-map) using any of the four named reveal transitions:

```javascript
// app/transitions.js
this.transition(
  this.fromRoute('login'),
  this.toRoute('index'),
  this.use('flipX')
);
```

The old content will slide away in the direction specified, revealing the new content in its place. See [this example page](http://mshafir.github.io/liquid-fire-flip/) to see each transition in action.

**Note:** You'll probably want to make sure that the content being transitioned away from has a background that will mask the new content during the transition.

## Developing

* `git clone <repository-url>` this repository
* `cd liquid-fire-flip`
* `yarn`
