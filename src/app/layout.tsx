import type { Metadata } from 'next';
import type { PropsWithChildren } from 'react';
import './globals.css';

export const metadata: Metadata = {
	title: 'Starter template',
	description: 'Starter template'
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
