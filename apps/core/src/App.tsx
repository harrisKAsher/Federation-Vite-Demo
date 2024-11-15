import React from 'react';

const globalStore = await import('globalStore/Store');


export default function Index() {
    const store = globalStore.default.useStore();

    return (
        <>
            <div>Core
                App
            </div>
            <div>{store.isDesktop ? 'Desktop' : 'Mobile'}</div>
        </>
    );
}
