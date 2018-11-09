import React from 'react';
import ComponentBEM from '../ComponentBEM.js';
import './Search.scss';
import connect from "react-redux/es/connect/connect";
import {mapStateToProps} from '../../reducers/.del.Reducer';
import SearchResults from "../SearchResults/SearchResults";
import SearchDispatch from "./SearchDispatch";


class Search extends ComponentBEM {

	componentName = 'search';

	render() {
		return (
			<div className={this.block()}>
				<div className={this.elem('container')}>
					<div className={this.elem('row')}>
						<div className={this.elem('results')}>
							<SearchResults listFilms={this.props.state.ReducerFilms.searchResults}/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default connect(mapStateToProps, SearchDispatch)(Search);