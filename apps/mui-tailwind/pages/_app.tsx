import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <div className="container mx-auto">
      <Head>
        <title>Welcome to mui-tailwind!</title>
      </Head>
      <div className="app">
        <header className="flex">
          <h1 className="text-3xl font-semibold text-indigo-700 mb-8">
            Material UI v5 Theming Options
          </h1>
        </header>
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </div>
  );
}

export default CustomApp;
