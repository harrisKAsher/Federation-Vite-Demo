import { useState } from 'react';

function getIsDesktop() {
	const { innerWidth: width } = window;
	return width >= 1024;
}

const useIsDesktop = () => {
	const [isDesktop, setIsDesktop] = useState(getIsDesktop());

	function handleResize() {
		setIsDesktop(getIsDesktop());
	}

	window.addEventListener('resize', handleResize);

	return isDesktop;
};

export default useIsDesktop;
