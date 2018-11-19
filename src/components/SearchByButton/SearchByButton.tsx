import React, {Component} from 'react';
import {Button, listStatus} from '../../components-styled/Button';
import {SearchByButtonProps} from "./SearchByButtonInterfaces";

class SearchByButton extends Component  <SearchByButtonProps> {
	render() {
		let status = this.props.searchByCurrent === this.props.searchByCode && listStatus.active;

		return (
			<Button
				status={status}
				onClick={this.props.onSetSearchBy(this.props.searchByCode)}
			>{this.props.searchByTitle}</Button>
		);
	}
}

export default SearchByButton;
