import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import Post from './Post';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const details = {
  title: 'Dinosaurs are awesome!',
  author: 'Stealthy Stegosaurus',
  body: 'Check out this body property!',
  comments: ['First!', 'Great post', 'Hire this author now!'],
  allAuthors: ['Stealthy Stegosaurus', 'Tiny T-Rex', 'Iguanadon Ivory'],
};

root.render(
  <StrictMode>
    <Post post={details} />
  </StrictMode>
);
