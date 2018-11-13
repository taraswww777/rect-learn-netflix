import React, {Component} from 'react';
import {Button, listButtonStatus} from "../../components-styled/Button";

class SortBy extends Component {

	render() {
		return (
			<Button
				status={this.props.sortByCurrent === this.props.sortByCode && listButtonStatus.active}
				onClick={this.props.onSetSortBy(this.props.sortByCode)}
			>{this.props.sortByTitle}
			</Button>
		);
	}
}

export default SortBy;