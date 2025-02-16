import type { Metadata } from 'next';
import type { PropsWithChildren } from 'react';
import { Providers } from '@/app/providers';
import './globals.css';
import { TailwindIndicator } from '@/components/TailwindIndicator';

export const metadata: Metadata = {
	title: 'Starter template',
	description: 'Starter template'
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body>
				<Providers>{children}</Providers>
				<TailwindIndicator />
			</body>
		</html>
	);
}
