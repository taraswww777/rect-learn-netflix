import React from 'react';
import ComponentBEM from '../ComponentBEM.js';
import './SearchOkButton.scss';

class SearchOkButton extends ComponentBEM {

	componentName = 'search-ok-button';

	render() {
		return (
			<button className={this.block('status','active')} onClick={this.props.searchFilm}>{
				this.props.children ? this.props.children : 'search'
			}</button>
		);
	}
}

export default SearchOkButton;
