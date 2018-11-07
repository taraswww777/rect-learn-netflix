import React from 'react';
import ComponentBEM from '../ComponentBEM.js';
import './SearchByButton.scss';

class SearchByButton extends ComponentBEM {

	componentName = 'search-by-button';

	render() {
		return (
			<button
				className={this.block('status', this.props.searchByCurrent === this.props.searchByCode ? 'active' : 'default')}
				onClick={this.props.setSearchBy(this.props.searchByCode)}
			>{this.props.searchByTitle}</button>
		);
	}
}

export default SearchByButton;