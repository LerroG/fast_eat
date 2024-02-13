import ReduxProvider from '@/redux/provider';
import { store } from '@/redux/store';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ReduxProvider>
			<Component {...pageProps} />
		</ReduxProvider>
	);
}
