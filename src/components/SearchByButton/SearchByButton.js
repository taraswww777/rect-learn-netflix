import React, {Component} from 'react';
import {Button, listButtonStatus} from "../../components-styled/Button";

class SearchByButton extends Component {

	render() {
		return (
			<Button
				status={this.props.searchByCurrent === this.props.searchByCode && listButtonStatus.active}
				onClick={this.props.onSetSearchBy(this.props.searchByCode)}
			>{this.props.searchByTitle}</Button>
		);
	}
}

export default SearchByButton;