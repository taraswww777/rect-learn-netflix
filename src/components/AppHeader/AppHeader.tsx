import React, {Component} from 'react';
import SearchLink from '../SearchLink/SearchLink';
import {RouteComponentProps, withRouter} from 'react-router';
import _ from 'lodash';
import {AppHeaderProps} from "./AppHeaderInterfaces";
import {BAppHeader, BAppHeaderSearchLink, BAppHeaderTitle} from "./AppHeaderStyled";

class AppHeader extends Component<RouteComponentProps, AppHeaderProps> {

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
