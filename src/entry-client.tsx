import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import './index.css';

const root = document.getElementById('root')!;

const tree = (
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);

// If the route was prerendered (static HTML present), hydrate it; otherwise
// (e.g. the dev server or a non-prerendered route like /admin) mount fresh.
if (root.childElementCount > 0) {
  hydrateRoot(root, tree);
} else {
  createRoot(root).render(tree);
}
