import React from 'react';

const globalStore = await import('globalStore/Store');
import "../index.css"


export default function Index() {
    const store = globalStore.default.useStore();

    return (
        <>
            <div className="text-red-500">Core App</div>
            <div>{store.isDesktop ? 'Desktop' : 'Mobile'}</div>
        </>
    );
}
