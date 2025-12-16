alert("JS loaded");

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

initInput(canvas);

const fixed = {
  P0: { x: 100, y: canvas.height / 2 },
  P3: { x: canvas.width - 100, y: canvas.height / 2 }
};

const control = {
  P1: new SpringPoint(canvas.width / 3, canvas.height / 2),
  P2: new SpringPoint((2 * canvas.width) / 3, canvas.height / 2)
};

let last = performance.now();

function loop(now) {
  const dt = (now - last) / 1000;
  last = now;

  // Mouse influences targets
  control.P1.target.x = mouse.x;
  control.P1.target.y = mouse.y;

  control.P2.target.x =
    canvas.width - mouse.x;
  control.P2.target.y =
    canvas.height - mouse.y;

  control.P1.update(dt);
  control.P2.update(dt);

  render(ctx, control, fixed);
  requestAnimationFrame(loop);
}

requestAnimationFrame(loop);
