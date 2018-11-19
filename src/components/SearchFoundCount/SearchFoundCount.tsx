import React, {Component} from 'react';
import styled from 'styled-components';
import {SearchFoundCountProps} from "./SearchFoundCountInterfaces";

const BSearchFoundCount = styled.div``;

class SearchFoundCount extends Component<SearchFoundCountProps> {

	render() {
		return (
			<BSearchFoundCount>{this.props.countResults} movies found</BSearchFoundCount>
		);
	}
}

export default SearchFoundCount;
