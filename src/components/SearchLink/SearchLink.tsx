import React, {Component} from 'react';
import styled from 'styled-components';
import {LINK} from "../../components-styled/Button";

const BSearchLink = styled(LINK)``;

class SearchLink extends Component {

	render() {
		return (
			<BSearchLink to={'/'}>search</BSearchLink>
		);
	}
}

export default SearchLink;
