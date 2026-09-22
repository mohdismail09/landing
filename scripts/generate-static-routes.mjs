import { copyFile, mkdir } from 'node:fs/promises';
import { resolve } from 'node:path';

const outputDirectory = resolve('dist');
const appEntry = resolve(outputDirectory, 'index.html');
const routes = ['compressor', 'pump-repair', 'fastener'];

for (const route of routes) {
  const routeDirectory = resolve(outputDirectory, route);
  await mkdir(routeDirectory, { recursive: true });
  await copyFile(appEntry, resolve(routeDirectory, 'index.html'));
}

// GitHub Pages serves this file when an unknown clean URL is requested.
// React can then decide whether to show a landing page or the main homepage.
await copyFile(appEntry, resolve(outputDirectory, '404.html'));

console.log(`Generated static entry files for: ${routes.join(', ')}`);
