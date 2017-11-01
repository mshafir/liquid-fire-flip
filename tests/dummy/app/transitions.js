export default function() {
  this.transition(
    this.hasClass('flipX'),
    this.use('flipX', { duration: 1000 })
  );
  this.transition(
    this.hasClass('flipY'),
    this.use('flipY', { duration: 1000 })
  );
}
