import * as React from 'react';

export const useSubscribeToScrollStatus = (containerRef: React.RefObject<any>) => {
	const [scrollValue, setScrollValue] = React.useState(0);

	const onScroll = (e: React.SyntheticEvent<HTMLDivElement>) => setScrollValue(e.currentTarget.scrollTop);

	React.useEffect(() => {
		if (containerRef.current) {
			containerRef.current.addEventListener('scroll', onScroll);
		}

		return () => {
			if (containerRef.current) {
				containerRef.current.removeEventListener('scroll', onScroll);
			}
		};
	},              []);

	return scrollValue;
};
