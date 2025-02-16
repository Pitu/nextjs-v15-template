import type { Metadata } from 'next';
import type { PropsWithChildren } from 'react';
import { Providers } from '@/app/providers';
import './globals.css';

export const metadata: Metadata = {
	title: 'Starter template',
	description: 'Starter template'
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
	return (
		<html lang="en">
			<body>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
