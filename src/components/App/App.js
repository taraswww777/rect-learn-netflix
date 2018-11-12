import React from 'react';
import {connect} from 'react-redux';
import ComponentBEM from '../ComponentBEM';
import './App.scss';
import {mapStateToProps} from '../../reducers/index';
import SearchLink from "../SearchLink/SearchLink";
import AppDispatch from "./AppDispatch";
import SearchBar from "../SearchBar/SearchBar";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import ReactCssTransitionGroup from "react-addons-css-transition-group";
import {withRouter} from "react-router";


class App extends ComponentBEM {
	componentName = 'app';

	render() {
		// console.log('App render', this);
		return (
			<div className={this.block()}>
				<header className={this.elem('header')}>
					<div className={this.elem('container')}>
						<div className={this.elem('row')}>
							<ErrorBoundary>
								<div className={this.elem('header-title')}>
									netflix roulette
									{window.location.pathname !== '/' && <SearchLink/>}
								</div>
							</ErrorBoundary>


						</div>
					</div>

					{window.location.pathname === '/' && <SearchBar/>}

				</header>

				<div className={this.elem('main')}>
					<ErrorBoundary>
						{/*<ReactCssTransitionGroup*/}
							{/*transitionName="page"*/}
							{/*transitionEnterTimeout={1000}*/}
							{/*transitionLeaveTimeout={1000}*/}
						{/*>*/}
							{/*{React.cloneElement(this.props.children, {key: window.location.pathname})}*/}
						{/*</ReactCssTransitionGroup>*/}

						{this.props.children}
					</ErrorBoundary>
				</div>

				<footer className={this.elem('footer')}>
					<div className={this.elem('container')}>
						<div className={this.elem('row')}>
							<div className={this.elem('footer-title')}>netflix roulette</div>
						</div>
					</div>
				</footer>
			</div>
		);
	}
}

export default connect(mapStateToProps, AppDispatch)(withRouter(App));
