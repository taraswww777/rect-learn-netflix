import React, {Component} from 'react';
import {Button, listStatus} from '../../components-styled/Button';
import {SortByProps} from "./SortByInterfaces";

class SortBy extends Component <SortByProps> {
	render() {
		let status = this.props.sortByCurrent === this.props.sortByCode && listStatus.active;

		return (
			<Button
				status={status}
				onClick={this.props.onSetSortBy(this.props.sortByCode)}
			>{this.props.sortByTitle}
			</Button>
		);
	}
}

export default SortBy;
