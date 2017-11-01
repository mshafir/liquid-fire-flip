import Controller from '@ember/controller';

export default Controller.extend({
	flipX: true,
	flipY: true,

	actions: {
		toggleFlipX() {
			this.toggleProperty('flipX');
		},
		toggleFlipY() {
			this.toggleProperty('flipY');
		}
	}
});
