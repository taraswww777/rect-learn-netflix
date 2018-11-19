import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {isKeyEnter, settings} from '../../rebass-grid-custom';
import mapStateToProps from "../../reducers/mapStateToProps";


export interface InterfaceSearchFieldProps {
	onSetSearchQuery: Function;
	onSearchFilm: Function;
}


const BSearchField = styled.input`
	width: calc(100% - 30px);
	padding: 10px 15px;
	max-width: 100%;

	:focus,
	:active {
		border-bottom: 2px  ${settings.colors.red} solid;
	}
`;

class SearchField extends Component<InterfaceSearchFieldProps> {

	public render() {
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
