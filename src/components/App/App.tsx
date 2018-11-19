import _ from 'lodash';
import React, {Component} from 'react';
import {RouteComponentProps, withRouter} from 'react-router';
import {Ceil, Container, Row} from '../../rebass-grid-custom';
import {InterfaceMatch} from "../../types/InterfaceMatch";
import AppFooter from '../AppFooter/AppFooter';
import AppHeader from '../AppHeader/AppHeader';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import SearchBar from '../SearchBar/SearchBar';
import {BApp, BAppFooter, BAppHeader, BAppHeaderContent, BAppHeaderSearchBar} from "./AppStyled";


class App extends Component <RouteComponentProps, InterfaceMatch> {

	public render() {
		const location = _.get(this.props, 'location.pathname');
		return (
			<BApp>
				<BAppHeader>
					<Container>
						<Row>
							<Ceil width={[1]}>
								<ErrorBoundary>
									<AppHeader/>
								</ErrorBoundary>
							</Ceil>
						</Row>
					</Container>

					{location === '/' && <BAppHeaderSearchBar>
						<Container>
							<Row>
								<Ceil width={[1]}>
									<SearchBar/>
								</Ceil>
							</Row>
						</Container>
					</BAppHeaderSearchBar>}
				</BAppHeader>


				<BAppHeaderContent>
					<ErrorBoundary>
						<Container>
							<Row>
								<Ceil width={[1]}>
									{this.props.children}
								</Ceil>
							</Row>
						</Container>
					</ErrorBoundary>
				</BAppHeaderContent>

				<BAppFooter>
					<Container>
						<Row>
							<Ceil>
								<AppFooter/>
							</Ceil>
						</Row>
					</Container>
				</BAppFooter>
			</BApp>
		);
	}
}

export default withRouter(App);
