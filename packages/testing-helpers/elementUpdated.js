import { nextFrame } from './helpers.js';

const isDefinedPromise = action => typeof action === 'object' && Promise.resolve(action) === action;

/**
 * Awaits for "update complete promises" of elements
 * - updateComplete [lit-element]
 * - componentOnReady() [stencil]
 *
 * If none of these is available we await the next frame.
 *
 * @template {Element} T
 * @param {T} el
 * @returns {Promise<T>}
 */
export async function elementUpdated(el) {
  let hasSpecificAwait = false;
  // @ts-ignore
  let update = el && el.updateComplete;
  if (isDefinedPromise(update)) {
    await update;
    hasSpecificAwait = true;
  }

  // @ts-ignore
  update = el && el.componentOnReady ? el.componentOnReady() : false;
  if (isDefinedPromise(update)) {
    await update;
    hasSpecificAwait = true;
  }

  if (!hasSpecificAwait) {
    await nextFrame();
  }
  return el;
}
