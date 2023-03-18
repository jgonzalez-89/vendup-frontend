import React from 'react';
import { createRoot } from 'react-dom/client';
import './style/index.css';
import MetaTags from './components/MetaTags'; // Importa el componente MetaTags
import Layout from './layout.jsx';

function Main() {
  return (
    <>
      <MetaTags />
      <Layout />
    </>
  );
}

createRoot(document.querySelector('#app')).render(<Main />);