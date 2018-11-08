import React from 'react';
import ComponentBEM from '../ComponentBEM.js';
import './SearchBar.scss';
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import SearchFoundCount from "../SearchFoundCount/SearchFoundCount";
import SortBy from "../SortBy/SortBy";
import connect from "react-redux/es/connect/connect";
import {mapStateToDispatchers, mapStateToProps} from "../../actions/reducer";

class SearchBar extends ComponentBEM {

	componentName = 'search-bar';

	render() {


		return (
			<aside className={this.block()}>
				<div className={this.elem('container')}>
					<div className={this.elem('row')}>

							<div className={this.elem('status-bar-found')}>
								<ErrorBoundary>
									<SearchFoundCount countResults={this.props.state.searchResults.length}/>
								</ErrorBoundary>
							</div>

							<div className={this.elem('status-bar-sort')}>
								<ErrorBoundary>
									Sort by
									<div className={this.elem('status-bar-sort-btn')}>
										<SortBy
											sortByTitle={'release date'}
											sortByCode={'date'}
											sortByCurrent={this.props.state.sortBy}
										/>
									</div>
									<div className={this.elem('status-bar-sort-btn')}>
										<SortBy
											sortByTitle={'rating'}
											sortByCode={'rating'}
											sortByCurrent={this.props.state.sortBy}
										/>
									</div>

								</ErrorBoundary>
							</div>

					</div>
				</div>
			</aside>
		);

	}
}

export default connect(mapStateToProps, mapStateToDispatchers)(SearchBar);