import React, {Component} from 'react';
import styled from 'styled-components';

const BSearchFoundCount = styled.div``;

export interface InterfaceSearchFoundCountProps {
	countResults: number
}

class SearchFoundCount extends Component<InterfaceSearchFoundCountProps> {

	public render() {
		return (
			<BSearchFoundCount>{this.props.countResults} movies found</BSearchFoundCount>
		);
	}
}

export default SearchFoundCount;
