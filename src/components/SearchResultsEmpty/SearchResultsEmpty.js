import React from 'react';
import './SearchResultsEmpty.scss';
import ComponentBEM from '../ComponentBEM.js';


class SearchResultsEmpty extends ComponentBEM {

	componentName = 'search-results-empty';


	render() {
		return (
			<div className={this.block()}>
				No films found
			</div>
		);
	}
}

export default SearchResultsEmpty;