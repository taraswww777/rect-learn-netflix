import React from 'react';
import ComponentBEM from '../ComponentBEM.js';
import './SearchBar.scss';
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import connect from "react-redux/es/connect/connect";
import {mapStateToProps} from "../../reducers/Reducers";
import SearchField from "../SearchField/SearchField";
import SearchBarDispatch from "./SearchBarDispatch";
import SearchByButton from "../SearchByButton/SearchByButton";
import SearchOkButton from "../SearchOkButton/SearchOkButton";
import SearchFoundCount from "../SearchFoundCount/SearchFoundCount";
import SortBy from "../SortBy/SortBy";

class SearchBar extends ComponentBEM {

	componentName = 'search-bar';

	render() {
		return (
			<div className={this.block()}>
				<div className={this.elem('container')}>
					<div className={this.elem('row')}>

						<div className={this.elem('search-area')}>
							<div className={this.elem('search-area-title')}>Find your movie</div>
							<div className={this.elem('search-area-field')}>
								<ErrorBoundary>
									<SearchField
										searchFilm={this.props.searchFilm}
										setSearchQuery={this.props.setSearchQuery}
									/>
								</ErrorBoundary>
							</div>
						</div>


						<div className={this.elem('search-by')}>
							<div className={this.elem('search-by-title')}>search by</div>
							<ErrorBoundary>
								<div className={this.elem('search-by-btn')}>
									<SearchByButton
										searchByTitle={'title'}
										searchByCode={'title'}
										searchByCurrent={this.props.store.ReducerFilms.searchBy}
										setSearchBy={this.props.setSearchBy}
									/>
								</div>
								<div className={this.elem('search-by-btn')}>
									<SearchByButton
										searchByTitle={'genre'}
										searchByCode={'genre'}
										searchByCurrent={this.props.store.ReducerFilms.searchBy}
										setSearchBy={this.props.setSearchBy}
									/>
								</div>

								<div className={this.elem('search-run')}>
									<SearchOkButton
										searchFilm={this.props.searchFilm}
									/>
								</div>
							</ErrorBoundary>
						</div>


						<div className={this.elem('status-bar-found')}>
							<ErrorBoundary>
								{this.props.store.ReducerFilms.searchResults &&
								<SearchFoundCount countResults={this.props.store.ReducerFilms.searchResults.length}/>
								}
							</ErrorBoundary>
						</div>

						<div className={this.elem('status-bar-sort')}>
							<ErrorBoundary>
								Sort by
								<div className={this.elem('status-bar-sort-btn')}>
									<SortBy
										sortByTitle={'release date'}
										sortByCode={'date'}
										sortByCurrent={this.props.store.ReducerFilms.sortBy}
										setSortBy={this.props.setSortBy}
									/>
								</div>
								<div className={this.elem('status-bar-sort-btn')}>
									<SortBy
										sortByTitle={'rating'}
										sortByCode={'rating'}
										sortByCurrent={this.props.store.ReducerFilms.sortBy}
										setSortBy={this.props.setSortBy}
									/>
								</div>

							</ErrorBoundary>
						</div>

					</div>
				</div>
			</div>
		);

	}
}

export default connect(mapStateToProps, SearchBarDispatch)(SearchBar);