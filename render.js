function drawCircle(ctx, p, r, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
  ctx.fill();
}

function render(ctx, control, fixed) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  // Draw Bézier curve
  ctx.strokeStyle = "#00ffcc";
  ctx.lineWidth = 2;
  ctx.beginPath();

  for (let t = 0; t <= 1; t += 0.01) {
    const p = bezierPoint(
      t,
      fixed.P0,
      control.P1.position,
      control.P2.position,
      fixed.P3
    );
    if (t === 0) ctx.moveTo(p.x, p.y);
    else ctx.lineTo(p.x, p.y);
  }
  ctx.stroke();

  // Draw tangents
  ctx.strokeStyle = "#ffaa00";
  for (let t = 0; t <= 1; t += 0.1) {
    const p = bezierPoint(
      t,
      fixed.P0,
      control.P1.position,
      control.P2.position,
      fixed.P3
    );
    const tan = bezierTangent(
      t,
      fixed.P0,
      control.P1.position,
      control.P2.position,
      fixed.P3
    );

    ctx.beginPath();
    ctx.moveTo(p.x, p.y);
    ctx.lineTo(p.x + tan.x * 30, p.y + tan.y * 30);
    ctx.stroke();
  }

  // Control points
  drawCircle(ctx, fixed.P0, 6, "#ff5555");
  drawCircle(ctx, fixed.P3, 6, "#ff5555");
  drawCircle(ctx, control.P1.position, 6, "#ffffff");
  drawCircle(ctx, control.P2.position, 6, "#ffffff");
}
