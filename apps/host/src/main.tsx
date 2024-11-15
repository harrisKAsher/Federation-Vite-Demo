import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
const GlobalStore: any = await import('globalStore/Store');

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<GlobalStore.default.StoreProvider>
			<App />
		</GlobalStore.default.StoreProvider>
	</React.StrictMode>
);
