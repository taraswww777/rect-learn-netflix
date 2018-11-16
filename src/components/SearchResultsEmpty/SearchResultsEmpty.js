import React, { Component } from 'react';
import styled from 'styled-components';

const BSearchResultsEmpty = styled.div`
	text-align: center;
	font-size: 3rem;
`;

class SearchResultsEmpty extends Component {

	render() {
		return (
			<BSearchResultsEmpty>No films found</BSearchResultsEmpty>
		);
	}
}

export default SearchResultsEmpty;
