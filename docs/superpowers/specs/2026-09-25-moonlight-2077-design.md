# Moonlight 2077 Design

## Goal

Create a Vue 3, mobile-first Mid-Autumn cinematic site intended for vertical short-video recording and public GitHub Pages hosting.

## Visual direction

Deep navy space, an oversized silver-blue procedural moon, sparse stars, aurora haze, restrained glass panels, and only ice-blue/lilac highlights. The first three seconds transition from darkness to a light point to a luminous moon and title.

## Architecture

The app uses Vue 3 Composition API and CSS. A single Canvas background owns particle rendering, stars, meteors, parallax, and reduced-motion behavior. Focused Vue components own hero interaction, blessings, orbit copy, scroll poetry, HUD, and final reset. CSS provides responsive full-height scenes and hardware-friendly opacity/transform animations.

## Interaction and resilience

Touching moonlight emits a short particle burst and reveals the blessing prompt. A submitted non-empty blessing is shown below the moon and emits a second burst. Empty text retains focus and announces an inline message. Canvas uses device-aware particle counts, is skipped for reduced motion, and cleans its listeners and animation frame on unmount.

## Acceptance checks

- `npm run build` succeeds.
- At 375–430px wide, no horizontal overflow, touch targets are at least 44px, and first screen has a clear visual focal point.
- The exported `dist/` directory is compatible with the existing GitHub Pages workflow.
- No external images, heavy UI framework, or Three.js runtime is required.
