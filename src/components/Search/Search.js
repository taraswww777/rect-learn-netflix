import React from 'react';
import ComponentBEM from '../ComponentBEM.js';
import _ from "lodash";
import './Search.scss';
import connect from "react-redux/es/connect/connect";
import {mapStateToProps} from '../../reducers/index';
import SearchDispatch from "./SearchDispatch";
import SearchResultsEmpty from "../SearchResultsEmpty/SearchResultsEmpty";
import FilmList from "../FilmList/FilmList";
import Loader from "../Loader/Loader";


class Search extends ComponentBEM {

	componentName = 'search';

	render() {
		let searchResults = _.get(this.props, 'store.ReducerFilms.searchResults');
		let SEARCH_QUERY_STATUS = _.get(this.props, 'store.ReducerFilms.SEARCH_QUERY_STATUS');

		return (
			<div className={this.block()}>
				<div className={this.elem('container')}>
					<div className={this.elem('row')}>
						<div className={this.elem('results')}>
							{SEARCH_QUERY_STATUS === false && <Loader/>}

							{SEARCH_QUERY_STATUS === true && searchResults.length > 0 ?
								<FilmList filmList={searchResults}/>
								:
								<SearchResultsEmpty/>
							}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default connect(mapStateToProps, SearchDispatch)(Search);