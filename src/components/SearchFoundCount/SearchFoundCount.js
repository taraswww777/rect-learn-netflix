import React from 'react';
import ComponentBEM from '../ComponentBEM.js';
import './SearchFoundCount.scss'

class SearchFoundCount extends ComponentBEM {

	componentName = 'search-found-count';

	render() {
		return (
			<div className={this.block()}>
				{this.props.countResults} movies found
			</div>
		);
	}
}

export default SearchFoundCount;