/**
 * This function is useful in a Vite or similar modern JavaScript project setup
 * where `import.meta.url` provides the base URL of the current module. By using
 * `new URL()`, we construct a URL relative to this base URL, ensuring that
 * the asset path is correctly resolved regardless of the deployment environment.
 
 */

export const getImageUrl = (path) => {
  return new URL(`/src/assets/${path}`, import.meta.url).href;
};
