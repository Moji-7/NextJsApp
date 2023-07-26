// app/posts/layout.tsx

import React from 'react';
import Link from 'next/link';

// This is a layout component that defines common UI elements for the posts segment
function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {/* This is how you link to dynamic routes using query parameters */}
        <li>
          <Link href={{ pathname: '/posts/[id]', query: { id: '1' } }}>
            Post 1
          </Link>
        </li>
        <li>
          <Link href={{ pathname: '/posts/[id]', query: { id: '2' } }}>
            Post 2
          </Link>
        </li>
        <li>
          <Link href={{ pathname: '/posts/[id]', query: { id: '3' } }}>
            Post 3
          </Link>
        </li>
      </ul>
      {children}
    </div>
  );
}

// This is how you export the layout component as a named export
export { Layout };
