import React from 'react';
import _ from "lodash";
import ComponentBEM from '../ComponentBEM.js';
import './SearchResults.scss';
import FilmList from "../FilmList/FilmList";

class SearchResults extends ComponentBEM {

	componentName = 'search-results';


	render() {
		let listFilms = _.get(this.props, 'listFilms');
		return (
			<div className={this.block()}>
				{listFilms &&
				<div className={this.elem('result-list')}>
					<FilmList filmList={listFilms}/>
				</div>
				}
			</div>
		);
	}
}

export default SearchResults;