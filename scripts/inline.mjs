import { readFileSync, writeFileSync } from 'fs';
import { join, resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const browserDir = resolve(__dirname, '..', 'dist', 'arkham', 'browser');
const outFile = resolve(__dirname, '..', 'arkham.html');

let html = readFileSync(join(browserDir, 'index.html'), 'utf-8');

// Fix base href so the file works when opened locally via file://
html = html.replace(/<base href="[^"]*"[^>]*>/, '<base href=".">');

// Remove preload/modulepreload hints (unnecessary once everything is inlined)
html = html.replace(/<link rel="(modulepreload|preload)"[^>]*\/?>/g, '');

// Inline stylesheets: <link rel="stylesheet" href="..."> → <style>...</style>
html = html.replace(/<link rel="stylesheet" href="([^"]+)"[^>]*\/?>/g, (match, href) => {
  const file = join(browserDir, href.replace(/^\//, ''));
  try {
    return `<style>${readFileSync(file, 'utf-8')}</style>`;
  } catch {
    return match;
  }
});

// Inline scripts: <script src="..."> → <script>...</script>
html = html.replace(/<script([^>]*?)src="([^"]+)"([^>]*?)><\/script>/g, (match, pre, src, post) => {
  const file = join(browserDir, src.replace(/^\//, ''));
  try {
    const combined = `${pre} ${post}`;
    const typeMatch = combined.match(/type="([^"]+)"/);
    const type = typeMatch ? ` type="${typeMatch[1]}"` : '';
    return `<script${type}>${readFileSync(file, 'utf-8')}</script>`;
  } catch {
    return match;
  }
});

writeFileSync(outFile, html, 'utf-8');

const kb = Math.round(Buffer.byteLength(html, 'utf-8') / 1024);
console.log(`✓ Single-file export written to: arkham.html (${kb} kB)`);
