import React from 'react';
import ComponentBEM from '../ComponentBEM.js';
import './SortBy.scss';
import connect from "react-redux/es/connect/connect";
import {mapStateToDispatchers, mapStateToProps} from "../../reducers/.del.Reducer";

class SortBy extends ComponentBEM {

	componentName = 'sort-by';

	render() {
		return (
			<button
				className={this.block('status', this.props.sortByCurrent === this.props.sortByCode ? 'active' : 'default')}
				onClick={this.props.setSortBy(this.props.sortByCode)}
			>{this.props.sortByTitle}
			</button>
		);
	}
}

export default connect(mapStateToProps, mapStateToDispatchers)(SortBy);