class SpringPoint {
  constructor(x, y) {
    this.position = { x, y };
    this.velocity = { x: 0, y: 0 };
    this.target = { x, y };
  }

  update(dt) {
    const k = 20;        // spring strength
    const damping = 6;   // damping factor

    const ax =
      -k * (this.position.x - this.target.x) -
      damping * this.velocity.x;
    const ay =
      -k * (this.position.y - this.target.y) -
      damping * this.velocity.y;

    this.velocity.x += ax * dt;
    this.velocity.y += ay * dt;

    this.position.x += this.velocity.x * dt;
    this.position.y += this.velocity.y * dt;
  }
}
