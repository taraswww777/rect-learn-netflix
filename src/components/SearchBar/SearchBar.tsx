import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from "react-redux";
import mapStateToProps from '../../reducers/mapStateToProps';
import SearchByButton from '../SearchByButton/SearchByButton';
import SearchField from '../SearchField/SearchField';
import SearchFoundCount from '../SearchFoundCount/SearchFoundCount';
import SearchOkButton from '../SearchOkButton/SearchOkButton';
import SortBy from '../SortBy/SortBy';
import SearchBarDispatch from './SearchBarDispatch';
import {
	BSearchBar,
	BSearchBarSearch,
	BSearchBarSearchBy,
	BSearchBarSearchByBoxBtn,
	BSearchBarSearchByBoxBtnRun,
	BSearchBarSearchByTitle,
	BSearchBarSearchField,
	BSearchBarSearchTitle,
	BSearchBarStatus,
	BSearchBarStatusCount,
	BSearchBarStatusSort,
	BSearchBarStatusSortBtn,
	BSearchBarStatusSortTitle
} from "./SearchBarStyled";

export interface InterfaceSearchBarProps {
	store?: any;
	onSearchFilm?: Function | any | undefined;
	onSetSearchQuery?: Function | any | undefined;
	onSetSearchBy?: Function | any | undefined;
	onSetSortBy?: Function | any | undefined;
}


class SearchBar extends Component <InterfaceSearchBarProps> {

	public render() {
		const showStatusBar = this.props.store.ReducerFilms.searchResults.length > 0;
		const searchQuery = _.get(this.props, 'store.ReducerFilms.searchQuery');
		const searchBy = _.get(this.props, 'store.ReducerFilms.searchBy');
		const sortBy = _.get(this.props, 'store.ReducerFilms.sortBy');

		return (
			<BSearchBar>

				<BSearchBarSearch>
					<BSearchBarSearchTitle>Find your movie</BSearchBarSearchTitle>
					<BSearchBarSearchField>
						<SearchField
							onSearchFilm={this.props.onSearchFilm(searchQuery, searchBy, sortBy)}
							onSetSearchQuery={this.props.onSetSearchQuery}
						/>
					</BSearchBarSearchField>
				</BSearchBarSearch>

				<BSearchBarSearchBy>
					<BSearchBarSearchByTitle>search by</BSearchBarSearchByTitle>
					<BSearchBarSearchByBoxBtn>
						<SearchByButton
							searchByTitle={'title'}
							searchByCode={'title'}
							searchByCurrent={this.props.store.ReducerFilms.searchBy}
							onSetSearchBy={this.props.onSetSearchBy(searchQuery, sortBy)}
						/>
					</BSearchBarSearchByBoxBtn>
					<BSearchBarSearchByBoxBtn>
						<SearchByButton
							searchByTitle={'genre'}
							searchByCode={'genre'}
							searchByCurrent={this.props.store.ReducerFilms.searchBy}
							onSetSearchBy={this.props.onSetSearchBy(searchQuery, sortBy)}
						/>
					</BSearchBarSearchByBoxBtn>

					<BSearchBarSearchByBoxBtnRun>
						<SearchOkButton
							onSearchFilm={this.props.onSearchFilm}
						/>
					</BSearchBarSearchByBoxBtnRun>
				</BSearchBarSearchBy>

				<BSearchBarStatus>
					{showStatusBar &&
					<BSearchBarStatusCount>
						<SearchFoundCount countResults={this.props.store.ReducerFilms.searchResults.length}/>
					</BSearchBarStatusCount>
					}
					{showStatusBar &&
					<BSearchBarStatusSort>
						<BSearchBarStatusSortTitle>Sort by</BSearchBarStatusSortTitle>
						<BSearchBarStatusSortBtn>
							<SortBy
								sortByTitle={'release date'}
								sortByCode={'date'}
								sortByCurrent={this.props.store.ReducerFilms.sortBy}
								onSetSortBy={this.props.onSetSortBy(searchQuery, searchBy)}
							/>
						</BSearchBarStatusSortBtn>
						<BSearchBarStatusSortBtn>
							<SortBy
								sortByTitle={'rating'}
								sortByCode={'rating'}
								sortByCurrent={this.props.store.ReducerFilms.sortBy}
								onSetSortBy={this.props.onSetSortBy(searchQuery, searchBy)}
							/>
						</BSearchBarStatusSortBtn>

					</BSearchBarStatusSort>
					}
				</BSearchBarStatus>

			</BSearchBar>
		);
	}
}

export default connect(mapStateToProps, SearchBarDispatch)(SearchBar);

