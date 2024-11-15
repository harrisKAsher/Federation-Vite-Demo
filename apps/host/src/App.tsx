import React from 'react';

const Core = React.lazy(() => import('core/App'));

export default function Index() {
	return (
		<>
			<div>Host App</div>
			<Core />
		</>
	);
}
