import { useContext } from 'react';
import { viewportContext } from '../context/viewport-context';

const useViewport = () => {
	const { width, height } = useContext(viewportContext);
	return { width, height };
};

export default useViewport;
