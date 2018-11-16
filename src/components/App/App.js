import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import { withRouter } from 'react-router';
import { Ceil, Container, Row } from '../../rebass-grid-custom';
import AppHeader from '../AppHeader/AppHeader';
import styled from 'styled-components';
import AppFooter from '../AppFooter/AppFooter';
import _ from 'lodash';

const BApp = styled.div` 
	width: 100%;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const BAppHeader = styled.div`
	background:#ccc;
	padding: 5px 0;
	width: 100%;
`;
console.log('BAppHeader', BAppHeader);
const BAppFooter = styled(BAppHeader)``;
const BAppHeaderSearchBar = styled.div``;
const BAppHeaderContent = styled.div`
	width: 100%;
	flex-grow: 1;
`;


class App extends Component {

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
