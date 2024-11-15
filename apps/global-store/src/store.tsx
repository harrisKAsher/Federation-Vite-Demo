import { createContext, useContext } from 'react';
import React from 'react';
import useIsDesktop from './hooks/isDesktop.ts';

const GlobalContext = createContext({});
const { Provider } = GlobalContext;

const StoreProvider = ({ children }: any) => {
	const isDesktop = useIsDesktop();


	const store = {
		isDesktop
	};
	return <Provider value={store}>{children}</Provider>;
};

const useStore = () => {
	const store: {
		isDesktop?: boolean;
	} = useContext(GlobalContext);
	return store;
};

const GS = {
	StoreProvider,
	useStore
};

export default GS;
