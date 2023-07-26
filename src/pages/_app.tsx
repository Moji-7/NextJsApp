// pages/_app.tsx

import type { AppProps } from 'next/app';

// This is a function that customizes the default App component
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
