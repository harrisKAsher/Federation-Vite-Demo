import React from 'react';

const Core = React.lazy(() => import('core/App'));
import "../index.css"

export default function Index() {
	return (
		<>
			<div className="text-blue-500">Host App</div>
			<Core />
		</>
	);
}
