import React from 'react';
import ComponentBEM from '../ComponentBEM';
import {Link} from 'react-router-dom';
import './SearchLink.scss';


class SearchLink extends ComponentBEM {
	componentName = 'search-link';

	render() {
		return (
			<a className={this.block()} href={'/'}>search</a>
		);
	}
}

export default SearchLink;
