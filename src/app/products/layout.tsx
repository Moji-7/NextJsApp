// app/products/layout.tsx

import React from 'react';
import Link from 'next/link';

// This is a layout component that defines common UI elements for the products segment
//export default function Layout({ children }: { children: React.ReactNode }) {
function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <h2>Products</h2>
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
            {children}
        </div>
    );
}
// This is how you export the layout component as a named export
export { Layout };