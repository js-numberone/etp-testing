import { createContext, useState, useEffect, FC, ReactNode } from 'react';

interface IViewport {
	width: number;
	height: number;
}

const viewportContext = createContext<IViewport>({
	width: window.innerWidth,
	height: window.innerHeight,
});

const ViewportProvider: FC<ReactNode> = ({ children }) => {
	const [width, setWidth] = useState<number>(window.innerWidth);
	const [height, setHeight] = useState<number>(window.innerHeight);
	const handleWindowResize = () => {
		setWidth(window.innerWidth);
		setHeight(window.innerHeight);
	};

	useEffect(() => {
		window.addEventListener('resize', handleWindowResize);
		return () => window.removeEventListener('resize', handleWindowResize);
	}, []);

	return (
		<viewportContext.Provider value={{ width, height }}>
			{children}
		</viewportContext.Provider>
	);
};

export { viewportContext, ViewportProvider };
