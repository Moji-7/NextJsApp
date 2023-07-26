// app/posts/[id].tsx

import React from 'react';
import { useRouter } from 'next/router';

// This is a page component that defines the posts dynamic route (/posts/:id) of the app
export default function Page() {
  // This is how you get the dynamic route parameter from the router
  const router = useRouter();
  const { id } = router.query;

  return <h3>This is post {id}</h3>;
}

// This is how you export the layout component as a named export
export { Layout } from './layout';
