'use client';

import { Provider as JotaiProvider } from 'jotai';
import type { PropsWithChildren } from 'react';

export function Providers({ children }: PropsWithChildren) {
	return <JotaiProvider>{children}</JotaiProvider>;
}
