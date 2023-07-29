// app/products/layout.tsx

import React from 'react';
import Link from 'next/link';



export default function ProductsLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
        <nav>

        <ul>
                {/* This is how you link to static or dynamic routes within the feature */}
                <li>
                    <Link href="/products/shoes">Shoes</Link>
                </li>
                <li>
                    <Link href="/products/clothes">Clothes</Link>
                </li>
                <li>
                    <Link href="/products/accessories">Accessories</Link>
                </li>
            </ul>
        </nav>
   
        {children}
      </section>
    )
  }
  // This is how you export the layout component as a named export
//export { ProductsLayout };