import React from 'react';
import {connect} from 'react-redux';
import ComponentBEM from '../ComponentBEM';
import './App.scss';
import {mapStateToProps} from '../../reducers/index';
import SearchLink from "../SearchLink/SearchLink";
import AppDispatch from "./AppDispatch";
import SearchBar from "../SearchBar/SearchBar";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";


class App extends ComponentBEM {
	componentName = 'app';

	render() {
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

export default connect(mapStateToProps, AppDispatch)(App);
