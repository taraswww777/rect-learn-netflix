import React, {Component} from 'react';
import {Button, listStatus} from '../../components-styled/Button';

export interface InterfaceSortByProps {
	sortByCurrent: string;
	sortByTitle: string;
	sortByCode: string;
	onSetSortBy: Function;
}


class SortBy extends Component <InterfaceSortByProps> {
	public render() {
		const status = this.props.sortByCurrent === this.props.sortByCode && listStatus.active;

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
