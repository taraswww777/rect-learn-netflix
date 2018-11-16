import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BSearchLink = styled(Link)`

`;

class SearchLink extends Component {
	componentName = 'search-link';

	render() {
		return (
			<BSearchLink to={'/'}>search</BSearchLink>
		);
	}
}

export default SearchLink;
