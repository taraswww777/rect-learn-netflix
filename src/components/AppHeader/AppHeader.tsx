import _ from 'lodash';
import React, {Component} from 'react';
import {RouteComponentProps, withRouter} from 'react-router';
import {InterfaceMatch} from "../../types/InterfaceMatch";
import SearchLink from '../SearchLink/SearchLink';
import {BAppHeader, BAppHeaderSearchLink, BAppHeaderTitle} from "./AppHeaderStyled";


class AppHeader extends Component<RouteComponentProps, InterfaceMatch> {

	public render() {
		const location = _.get(this.props, 'location.pathname');

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
