import React from 'react';
import logoOg from './../public/logo_og.jpg';

function MetaTags() {
    const imageUrl = new URL(logoOg, import.meta.url).href + '?v=1.1'; // Agrega un parámetro de consulta a la URL de la imagen

  return (
    <>
      {/* Other meta tags */}
      <meta property="og:image" content={imageUrl} />
      <meta property="twitter:image" content={imageUrl} />
      <meta property="whatsapp:image" content={imageUrl} />
    </>
  );
}

export default MetaTags;