import React, {Component} from 'react';
import styled from 'styled-components';
import {isKeyEnter, settings} from '../../rebass-grid-custom';
import {connect} from 'react-redux';
import {mapStateToProps} from '../../reducers';
import {SearchFieldProps} from "./SearchFieldInterfaces";

const BSearchField = styled.input`
	width: calc(100% - 30px);
	padding: 10px 15px;
	max-width: 100%;

	:focus,
	:active {
		border-bottom: 2px  ${settings.colors.red} solid;
	}
`;

class SearchField extends Component<SearchFieldProps> {

	render() {
		return (
			<BSearchField
				type="text"
				placeholder={'search...'}

				onChange={(event) => {
					this.props.onSetSearchQuery(event.target.value);
				}}
				onKeyPress={(event) => {
					if (isKeyEnter(event)) {
						this.props.onSearchFilm();
					}
					return false;
				}}

			/>
		);
	}
}

export default connect(mapStateToProps)(SearchField);
