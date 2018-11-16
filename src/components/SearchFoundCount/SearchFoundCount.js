import React, { Component } from 'react';
import styled from 'styled-components';

const BSearchFoundCount = styled.div``;

class SearchFoundCount extends Component {

	render() {
		return (
			<BSearchFoundCount>{this.props.countResults} movies found</BSearchFoundCount>
		);
	}
}

export default SearchFoundCount;
