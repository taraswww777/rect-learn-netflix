import React, { Component } from 'react';
import SearchLink from '../SearchLink/SearchLink';
import { withRouter } from 'react-router';
import styled from 'styled-components';
import _ from 'lodash';

const BAppFooter = styled.div`
	display: flex;
	flex-wrap: nowrap;
	justify-content: space-between;
`;
const BAppFooterTitle = styled.div`
	color: #e50914;
	text-transform: uppercase;
	font-size: 2rem;
	font-style: italic;
	font-weight: bold;
`;

const BAppFooterSearchLink = styled.div``;

class AppFooter extends Component {

	render() {
		let location = _.get(this.props, 'location.pathname');

		return (
			<BAppFooter>
				<BAppFooterTitle>netflix</BAppFooterTitle>

				{location !== '/' && <BAppFooterSearchLink>
					<SearchLink/>
				</BAppFooterSearchLink>}

			</BAppFooter>
		);
	}
}

export default withRouter(AppFooter);
