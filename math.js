function bezierPoint(t, P0, P1, P2, P3) {
  const u = 1 - t;
  const tt = t * t;
  const uu = u * u;

  return {
    x:
      uu * u * P0.x +
      3 * uu * t * P1.x +
      3 * u * tt * P2.x +
      tt * t * P3.x,
    y:
      uu * u * P0.y +
      3 * uu * t * P1.y +
      3 * u * tt * P2.y +
      tt * t * P3.y
  };
}

function bezierTangent(t, P0, P1, P2, P3) {
  const u = 1 - t;

  const x =
    3 * u * u * (P1.x - P0.x) +
    6 * u * t * (P2.x - P1.x) +
    3 * t * t * (P3.x - P2.x);

  const y =
    3 * u * u * (P1.y - P0.y) +
    6 * u * t * (P2.y - P1.y) +
    3 * t * t * (P3.y - P2.y);

  const len = Math.hypot(x, y) || 1;
  return { x: x / len, y: y / len };
}
