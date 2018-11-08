import React from 'react';
import './SearchResults.scss';
import ComponentBEM from '../ComponentBEM.js';
import FilmItem from "../FilmItem/FilmItem";
import connect from "react-redux/es/connect/connect";
import {mapStateToDispatchers, mapStateToProps} from "../../actions/reducer";

class SearchResults extends ComponentBEM {

	componentName = 'search-results';


	render() {
		return (
			<div className={this.block()}>
				{!this.props.state.searchResults || this.props.state.searchResults.length <= 0 ?
					<div className={this.elem('result-empty')}>
						No films found
					</div>
					:
					<div className={this.elem('result-list')}>
						{this.props.state.searchResults.map((film) =>
							<div className={this.elem('result-list-item')} key={'film_' + film.id}>
								<FilmItem film={film}/>
							</div>
						)}
					</div>
				}
			</div>
		);
	}
}

export default connect(mapStateToProps, mapStateToDispatchers)(SearchResults);