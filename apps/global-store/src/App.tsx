import React from 'react';
import GS from './store.tsx';

export default function Index() {
	return (
		<GS.StoreProvider>
			<div>Global Store</div>
		</GS.StoreProvider>
	);
}
