# Interactive Bézier Curve with Physics & Sensor Control

## Overview
This project implements a real-time interactive cubic Bézier curve that behaves like a springy rope.
The control points react to mouse movement using a spring-damping physics model.

## Math
The cubic Bézier curve is computed using:
B(t) = (1−t)³P₀ + 3(1−t)²tP₁ + 3(1−t)t²P₂ + t³P₃

Tangents are calculated using the analytical derivative of the curve and normalized for visualization.

## Physics
Each dynamic control point uses a spring-damping model:
acceleration = −k(position − target) − damping × velocity

This produces smooth, natural motion.

## Interaction
Mouse movement controls the target positions of P₁ and P₂.
Rendering runs at 60 FPS using requestAnimationFrame.

## Files
- math.js: Bézier and tangent math
- physics.js: Spring physics
- input.js: Mouse input
- render.js: Canvas rendering
- main.js: App loop

## How to Run
Open `index.html` in a browser and move the mouse.
Record the interaction for submission.
