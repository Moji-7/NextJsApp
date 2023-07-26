// app/products/accessories.tsx

import React from 'react';

// This is a page component that defines the accessories route (/products/accessories) of the app
export default function Page() {
  return (
    <div>
      <h3>Accessories</h3>
      <ul>
        {/* This is how you display some data or information for the page */}
        <li>Apple Watch</li>
        <li>Ray-Ban Sunglasses</li>
        <li>Gucci Belt</li>
      </ul>
    </div>
  );
}

// This is how you export the custom layout component as a named export
export { Layout } from './layout';
