import React from 'react';
import {connect} from 'react-redux';
import ComponentBEM from './components/ComponentBEM';
import './App.scss';
import {mapStateToProps, mapStateToDispatchers} from './actions/reducer';
import SearchField from './components/SearchField/SearchField';
import SearchByButton from "./components/SearchByButton/SearchByButton";
import SearchOkButton from "./components/SearchOkButton/SearchOkButton";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

const stateDefault = {
	listFilms: [],
	searchQuery: null,
	searchBy: 'title',
	sortBy: 'date',
	searchResults: []
};

class App extends ComponentBEM {
	componentName = 'app';


	constructor(a, b) {
		super(a, b);
		this.props.load(stateDefault);
		this.props.loadListFilms();
		this.props.load({
			onSearchFilm: this.searchFilm.bind(this),
			onSetSortBy: this.setSortBy.bind(this)
		});
	}

	searchFilm() {

		if (!this.props.state.searchQuery
			|| this.props.state.searchQuery.length <= 0
			|| !this.props.state.listFilms) {
			this.props.state.searchResults = [];
		} else {

			switch (this.props.state.searchBy.toLowerCase()) {
				case 'genre':
					this.props.state.searchResults = this.filterByGenre(this.props.state.listFilms);
					break;
				case 'title':
					this.props.state.searchResults = this.filterByTitle(this.props.state.listFilms);
					break;
				default:
					this.props.state.searchResults = this.filterByTitle(this.props.state.listFilms);
					break;
			}
		}
		this.sortSearchResults();
		this.freshProps();
	}

	setSortBy(sortBy = 'rating') {
		return () => {
			if (sortBy && sortBy.length > 0) {
				this.props.state.sortBy = sortBy;
			}

			this.freshProps();
			this.searchFilm();
		}
	}


	sortSearchResults() {
		if (!this.props.state.searchResults) {
			return;
		}

		switch (this.props.state.sortBy) {
			case'rating':
				this.props.state.searchResults.sort(App.compareFilmRating);
				break;
			case'date':
				this.props.state.searchResults.sort(App.compareFilmDate);
				break;
			case'title':
				this.props.state.searchResults.sort(App.compareFilmTitle);
				break;
			default:
				this.props.state.searchResults.sort(App.compareFilmRating);
				break;
		}
	}

	static compareFilmRating(filmA, filmB) {
		return filmA.rating - filmB.rating;
	}

	static compareFilmDate(filmA, filmB) {
		return filmA.year - filmB.year;
	}

	static compareFilmTitle(filmA, filmB) {
		if (filmA.title < filmB.title) {
			return -1;
		} else if (filmA.title > filmB.title) {
			return 1;
		}
		return 0;
	}

	filterByTitle(listFilms = []) {
		let resultListSearch = [];

		listFilms
			.filter((film) => film.title.toLowerCase().indexOf(this.props.state.searchQuery.toLowerCase()) > -1)
			.map((film) => resultListSearch.push(film));

		return resultListSearch;
	}

	filterByGenre(listFilms = []) {
		let resultListSearch = [];
		listFilms
			.filter((film) => film.genre.toLowerCase().indexOf(this.props.state.searchQuery.toLowerCase()) > -1)
			.map((film) => resultListSearch.push(film));


		return resultListSearch;
	}


	setSearchBy(searchBy = 'title') {
		return () => {
			if (searchBy && searchBy.length > 0) {
				this.props.state.searchBy = searchBy;
			}

			this.freshProps();
			this.searchFilm();
		}
	}

	setSearchQuery(searchQuery) {
		this.props.state.searchQuery = searchQuery;
		this.freshProps();
	}

	freshProps() {
		this.setState(this.props.state);
		this.props.load(this.props.state);
	}


	render() {
		return (
			<div className={this.block()}>
				<header className={this.elem('header')}>
					<div className={this.elem('container')}>
						<div className={this.elem('row')}>
							<div className={this.elem('header-title')}>netflix roulette</div>

							<div className={this.elem('search-area')}>
								<div className={this.elem('search-area-title')}>Find your movie</div>
								<div className={this.elem('search-area-field')}>
									<ErrorBoundary>
										<SearchField
											searchFilm={this.searchFilm.bind(this)}
											setSearchQuery={this.setSearchQuery.bind(this)}/>
									</ErrorBoundary>
								</div>
							</div>

							<div className={this.elem('search-by')}>
								<div className={this.elem('search-by-title')}>search by</div>
								<ErrorBoundary>
									<div className={this.elem('search-by-btn')}>
										<SearchByButton
											searchByTitle={'title'}
											searchByCurrent={this.props.state.searchBy}
											searchByCode={'title'}
											setSearchBy={this.setSearchBy.bind(this)}/>
									</div>
									<div className={this.elem('search-by-btn')}>
										<SearchByButton
											searchByTitle={'genre'}
											searchByCurrent={this.props.state.searchBy}
											searchByCode={'genre'}
											setSearchBy={this.setSearchBy.bind(this)}/>
									</div>
									<div className={this.elem('search-run')}>
										<SearchOkButton
											searchFilm={this.searchFilm.bind(this)}/>
									</div>
								</ErrorBoundary>
							</div>

						</div>
					</div>
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

export default connect(mapStateToProps, mapStateToDispatchers)(App);
