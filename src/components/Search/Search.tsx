import React, {Component} from 'react';
import _ from 'lodash';
import {mapStateToProps} from '../../reducers';
import SearchDispatch from './SearchDispatch';
import SearchResultsEmpty from '../SearchResultsEmpty/SearchResultsEmpty';
import FilmList from '../FilmList/FilmList';
import {PreLoader} from '../../rebass-grid-custom';
import {connect} from "react-redux";


class Search extends Component {

	render() {
		const searchResults = _.get(this.props, 'store.ReducerFilms.searchResults');
		const SEARCH_QUERY_STATUS = _.get(this.props, 'store.ReducerFilms.SEARCH_QUERY_STATUS');

		return (
			<div>
				<div>
					<div>
						<div>
							{SEARCH_QUERY_STATUS === false && <PreLoader/>}

							{SEARCH_QUERY_STATUS === true && searchResults.length > 0
								? <FilmList filmList={searchResults}/>
								: <SearchResultsEmpty/>
							}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default connect(mapStateToProps, SearchDispatch)(Search);
