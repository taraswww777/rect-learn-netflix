import React, {Component} from 'react';
import {Button, listStatus, listTypes} from '../../components-styled/Button';


export interface SearchOkButtonProps {
	onSearchFilm?: Function
}

class SearchOkButton extends Component <SearchOkButtonProps> {
	public render() {

		return (
			<Button
				status={listStatus.active}
				type={listTypes.big}
				onClick={() => {
					if (typeof this.props.onSearchFilm === 'function') {
						this.props.onSearchFilm();
					}
				}}
			>{
				this.props.children ? this.props.children : 'search'
			}</Button>
		);
	}
}

export default SearchOkButton;
