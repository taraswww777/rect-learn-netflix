import React, {Component} from 'react';
import SearchBar from '../SearchBar/SearchBar';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import {RouteComponentProps, withRouter} from 'react-router';
import {Ceil, Container, Row} from '../../rebass-grid-custom';
import AppHeader from '../AppHeader/AppHeader';
import AppFooter from '../AppFooter/AppFooter';
import _ from 'lodash';
import {AppProps} from "./AppInterfaces";
import {BApp, BAppFooter, BAppHeader, BAppHeaderContent, BAppHeaderSearchBar} from "./AppStyled";


class App extends Component <RouteComponentProps, AppProps> {

	render() {
		let location = _.get(this.props, 'location.pathname');
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
