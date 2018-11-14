import React from 'react';
import ComponentBEM from '../ComponentBEM';
import {Link} from 'react-router-dom';
import './SearchLink.scss';


class SearchLink extends ComponentBEM {
	componentName = 'search-link';

	render() {
		return (
			<Link className={this.block()} to={'/'}>search</Link>
		);
	}
}

export default SearchLink;
