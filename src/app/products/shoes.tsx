// app/products/shoes.tsx

import React from 'react';

// This is a page component that defines the shoes route (/products/shoes) of the app
export default function Page() {
  return (
    <div>
      <h3>Shoes</h3>
      <ul>
        {/* This is how you display some data or information for the page */}
        <li>Nike Air Max 270</li>
        <li>Adidas Ultraboost 21</li>
        <li>Reebok Nano X1</li>
      </ul>
    </div>
  );
}

// This is how you export the custom layout component as a named export
export { Layout } from './layout';
