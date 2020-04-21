import React from 'react';
import Select from 'react-select';
import { useSubscribeToScrollStatus } from '../../customHooks/useSubscribeToScrollStatus';


const options = [
	{ value: 'chocolate', label: 'Chocolate' },
	{ value: 'strawberry', label: 'Strawberry' },
	{ value: 'vanilla', label: 'Vanilla' },
	{ value: 'honey', label: 'honey' },
	{ value: 'kiwi', label: 'kiwi' },
	{ value: 'orange', label: 'orange' }
];
export interface Props {

}

export const SelectComponent: React.SFC<Props> = () => {
	const formContainerRef = React.createRef<HTMLDivElement>();
	useSubscribeToScrollStatus(formContainerRef);
	return (
		<div id="formContainer" ref={formContainerRef}>
			<label htmlFor="">Test select component label</label>
			<Select options={options} />
		</div>);
};


