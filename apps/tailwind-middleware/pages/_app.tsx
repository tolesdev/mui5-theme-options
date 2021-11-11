import { AppProps } from 'next/app';
import { IdProvider } from '@radix-ui/react-id';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
    return (
        <IdProvider>
            <Component {...pageProps} />
        </IdProvider>
    );
}

export default CustomApp;
