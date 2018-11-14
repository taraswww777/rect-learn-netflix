import React from 'react';
import { connect } from 'react-redux';
import ComponentBEM from '../ComponentBEM';
import './App.scss';
import { mapStateToProps } from '../../reducers/index';
import SearchLink from '../SearchLink/SearchLink';
import AppDispatch from './AppDispatch';
import SearchBar from '../SearchBar/SearchBar';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
// import ReactCssTransitionGroup from "react-addons-css-transition-group";
import { withRouter } from 'react-router';
import { Container, Col, Row } from 'react-grid-system';

class App extends ComponentBEM {
	componentName = 'app';

	render() {
	  // console.log('App render', this);
	  return (
			<div className={this.block()}>
				<header className={this.elem('header')}>
					<Container>
						<Row>
							<Col sm={12}>
								<ErrorBoundary>
									<div className={this.elem('header-title')}>
										netflix roulette
										{window.location.pathname !== '/' && <SearchLink/>}
									</div>
								</ErrorBoundary>
							</Col>
						</Row>
					</Container>

					{window.location.pathname === '/' && <SearchBar/>}

				</header>


				<div className={this.elem('main')}>
					<ErrorBoundary>
						{/* <ReactCssTransitionGroup */}
						{/* transitionName="page" */}
						{/* transitionEnterTimeout={1000} */}
						{/* transitionLeaveTimeout={1000} */}
						{/* > */}
						{/* {React.cloneElement(this.props.children, {key: window.location.pathname})} */}
						{/* </ReactCssTransitionGroup> */}

						<Container>
							<Row>
								<Col sm={12}>
									{this.props.children}
								</Col>
							</Row>
						</Container>
					</ErrorBoundary>
				</div>

				<footer className={this.elem('footer')}>
					<Container>
						<Row>
							<Col sm={12}>
								netflix roulette
							</Col>
						</Row>
					</Container>
				</footer>
			</div>
	  );
	}
}

export default withRouter(connect(mapStateToProps, AppDispatch)(withRouter(App)));
