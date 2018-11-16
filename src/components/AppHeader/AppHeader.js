import React, { Component } from 'react';
import SearchLink from '../SearchLink/SearchLink';
import { withRouter } from 'react-router';
import styled from 'styled-components';
import _ from 'lodash';
import { settings } from '../../rebass-grid-custom';

const BAppHeader = styled.div`
	display: flex;
	flex-wrap: nowrap;
	justify-content: space-between;
`;
const BAppHeaderTitle = styled.div`
	color: ${settings.colors.red};
	text-transform: uppercase;
	font-size: 2rem;
	font-style: italic;
	font-weight: bold;
`;

const BAppHeaderSearchLink = styled.div``;

class AppHeader extends Component {

	render() {
		let location = _.get(this.props, 'location.pathname');

		return (
			<BAppHeader>
				<BAppHeaderTitle>netflix</BAppHeaderTitle>

				{location !== '/' && <BAppHeaderSearchLink>
					<SearchLink/>
				</BAppHeaderSearchLink>}

			</BAppHeader>
		);
	}
}

export default withRouter(AppHeader);
