import React from 'react';
import ComponentBEM from '../ComponentBEM.js';
import _ from "lodash";
import './Search.scss';
import connect from "react-redux/es/connect/connect";
import {mapStateToProps} from '../../reducers/index';
import SearchResults from "../SearchResults/SearchResults";
import SearchDispatch from "./SearchDispatch";
import SearchResultsEmpty from "../SearchResultsEmpty/SearchResultsEmpty";


class Search extends ComponentBEM {

	componentName = 'search';

	render() {
		let searchResults = _.get(this.props, 'store.ReducerFilms.searchResults');

		return (
			<div className={this.block()}>
				<div className={this.elem('container')}>
					<div className={this.elem('row')}>
						<div className={this.elem('results')}>
							{searchResults ?
								<SearchResults listFilms={searchResults}/>
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