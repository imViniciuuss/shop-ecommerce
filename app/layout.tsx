import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from './components/header';
import { CartProvider } from '@/context/cartContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Shopping Brand',
	description: 'Quality mall for shopping',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang='en'
			className={inter.className}>
			<body>
				<CartProvider>
					<Header />
					{children}
				</CartProvider>
			</body>
		</html>
	);
}

