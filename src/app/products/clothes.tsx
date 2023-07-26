// app/products/clothes.tsx

import React from 'react';

// This is a page component that defines the clothes route (/products/clothes) of the app
export default function Page() {
  return (
    <div>
      <h3>Clothes</h3>
      <ul>
        {/* This is how you display some data or information for the page */}
        <li>Zara T-shirt</li>
        <li>H&M Jeans</li>
        <li>Uniqlo Jacket</li>
      </ul>
    </div>
  );
}

// This is how you export the custom layout component as a named export
export { Layout } from './layout';
