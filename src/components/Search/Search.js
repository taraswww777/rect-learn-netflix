import React from 'react';
import ComponentBEM from '../ComponentBEM.js';
import './Search.scss';
import SearchBar from "../SearchBar/SearchBar";
import connect from "react-redux/es/connect/connect";
import {mapStateToProps, mapStateToDispatchers} from '../../actions/reducer';
import SearchResults from "../SearchResults/SearchResults";


class Search extends ComponentBEM {

	componentName = 'search';

	render() {
		return (
			<div className={this.block()}>
				<SearchBar/>
				<SearchResults/>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapStateToDispatchers)(Search);