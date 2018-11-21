import React from 'react';
import {Button, listStatus} from '../../components-styled/Button';
import {InterfaceSearchByButtonProps} from "./SearchByButtonInterfaces";

const SearchByButton = (props: InterfaceSearchByButtonProps) => {
	const status = props.searchByCurrent === props.searchByCode && listStatus.active;

	return (
		<Button
			status={status}
			onClick={props.onSetSearchBy(props.searchByCode)}
		>{props.searchByTitle}</Button>
	);
};

export default SearchByButton;
