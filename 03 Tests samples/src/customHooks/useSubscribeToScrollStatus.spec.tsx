import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useSubscribeToScrollStatus } from './useSubscribeToScrollStatus';

describe('useSubscribeToScrollStatus', () => {
	it('should change scrollValue when scrolling on FakeComponent', () => {
		const smallDivWithScrollStyles = {
			height: '20px',
			width: '10px',
			overflow: 'auto',
		};
		const bigDivStyles = { width: '10px' };
		let scrollvalue;

		const FakeComponent = () => {
			const containerRef = React.createRef<HTMLDivElement>();
			scrollvalue = useSubscribeToScrollStatus(containerRef);

			return (
				<div id="container" style={smallDivWithScrollStyles} ref={containerRef}>
					<div style={bigDivStyles}>
						<p>Lorem Ipsum</p>
						<p>Dolor sit amet</p>
						<p>Consectetur adipiscing elit</p>
					</div>
				</div>
			);
		};

		render(<FakeComponent />);
		const fakeComponentContainer = document.getElementById('container');
		fireEvent.scroll(fakeComponentContainer, { target: { scrollTop: 100 } });

		expect(scrollvalue).toBe(100);
	});
});
